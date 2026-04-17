import { supabase } from "./supabase";

export type BookingSettings = {
  slug: string;
  nom_affiche: string;
  description: string;
  timezone: string;
  slot_duration: number;
  buffer_minutes: number;
  min_notice_hours: number;
  max_advance_days: number;
  weekly_hours: Record<string, Array<{ start: string; end: string }>>;
  blocked_dates: string[] | null;
};

export type BookedSlot = {
  start_at: string;
  end_at: string;
};

export type DayAvailability = {
  date: string; // ISO YYYY-MM-DD
  slots: Array<{ start: string; end: string }>; // "09:00", "09:45"
};

const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export async function fetchBookingSettings(slug: string): Promise<BookingSettings | null> {
  const { data, error } = await supabase.rpc("get_public_booking_settings", { p_slug: slug });
  if (error || !data || data.length === 0) return null;
  return data[0] as BookingSettings;
}

export async function fetchBookedSlots(from: Date, to: Date): Promise<BookedSlot[]> {
  const { data, error } = await supabase.rpc("get_booked_slots", {
    p_from: from.toISOString(),
    p_to: to.toISOString(),
  });
  if (error) return [];
  return (data as BookedSlot[]) || [];
}

/**
 * Compute available slots for a given month (1-12).
 * Returns only days that have at least one available slot.
 */
export function computeMonthAvailability(
  settings: BookingSettings,
  bookings: BookedSlot[],
  year: number,
  month: number
): DayAvailability[] {
  const result: DayAvailability[] = [];
  const now = new Date();
  const minBookable = new Date(now.getTime() + settings.min_notice_hours * 3600 * 1000);
  const maxBookable = new Date(now.getTime() + settings.max_advance_days * 86400 * 1000);

  const daysInMonth = new Date(year, month, 0).getDate();
  const slotDurationMs = settings.slot_duration * 60 * 1000;
  const bufferMs = settings.buffer_minutes * 60 * 1000;
  const blocked = settings.blocked_dates || [];

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month - 1, d);
    const dateISO = `${year}-${pad(month)}-${pad(d)}`;

    if (blocked.includes(dateISO)) continue;
    if (date > maxBookable) continue;

    const endOfDay = new Date(year, month - 1, d, 23, 59, 59);
    if (endOfDay < minBookable) continue;

    const weekday = WEEKDAYS[date.getDay()];
    const ranges = settings.weekly_hours[weekday];
    if (!ranges || ranges.length === 0) continue;

    const slots: Array<{ start: string; end: string }> = [];

    for (const range of ranges) {
      const [startH, startM] = range.start.split(":").map(Number);
      const [endH, endM] = range.end.split(":").map(Number);

      let current = new Date(year, month - 1, d, startH, startM);
      const rangeEndDate = new Date(year, month - 1, d, endH, endM);

      while (current.getTime() + slotDurationMs <= rangeEndDate.getTime()) {
        const slotEnd = new Date(current.getTime() + slotDurationMs);

        // Skip if before min notice
        if (current < minBookable) {
          current = new Date(current.getTime() + slotDurationMs + bufferMs);
          continue;
        }

        // Check conflict with existing bookings
        const conflict = bookings.some((b) => {
          const bStart = new Date(b.start_at);
          const bEnd = new Date(b.end_at);
          return current < bEnd && slotEnd > bStart;
        });

        if (!conflict) {
          slots.push({
            start: `${pad(current.getHours())}:${pad(current.getMinutes())}`,
            end: `${pad(slotEnd.getHours())}:${pad(slotEnd.getMinutes())}`,
          });
        }

        current = new Date(current.getTime() + slotDurationMs + bufferMs);
      }
    }

    if (slots.length > 0) {
      result.push({ date: dateISO, slots });
    }
  }

  return result;
}
