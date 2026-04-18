"use client";

import { useEffect, useMemo, useState } from "react";
import {
  fetchBookingSettings,
  fetchBookedSlots,
  computeMonthAvailability,
  type BookingSettings,
  type BookedSlot,
  type DayAvailability,
} from "@/lib/availability";

const DAYS_OF_WEEK = ["L", "M", "M", "J", "V", "S", "D"];
const MONTH_NAMES = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

function getWeekdayOffset(year: number, month: number) {
  // Monday = 0, Sunday = 6 (L-M-M-J-V-S-D layout)
  const firstDay = new Date(year, month - 1, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

const BOOKING_API_URL = "https://interface-digitaltimes.vercel.app/api/bookings";

type View = "picker" | "form" | "success" | "error";

export function AgendaCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1); // 1-12

  const [settings, setSettings] = useState<BookingSettings | null>(null);
  const [bookings, setBookings] = useState<BookedSlot[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ start: string; end: string } | null>(null);

  // Booking flow
  const [view, setView] = useState<View>("picker");
  const [bookerName, setBookerName] = useState("");
  const [bookerEmail, setBookerEmail] = useState("");
  const [bookerMessage, setBookerMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function submitBooking() {
    if (!selectedDate || !selectedSlot) return;
    setSubmitting(true);
    setErrorMsg(null);

    // Build ISO datetimes from "YYYY-MM-DD" + "HH:MM"
    const [sh, sm] = selectedSlot.start.split(":").map(Number);
    const [eh, em] = selectedSlot.end.split(":").map(Number);
    const [y, mo, d] = selectedDate.split("-").map(Number);
    const startDate = new Date(y, mo - 1, d, sh, sm, 0);
    const endDate = new Date(y, mo - 1, d, eh, em, 0);

    try {
      const res = await fetch(BOOKING_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "moi",
          start_at: startDate.toISOString(),
          end_at: endDate.toISOString(),
          nom: bookerName,
          email: bookerEmail,
          message: bookerMessage || null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setView("error");
        setErrorMsg(data.error || "Erreur lors de la réservation");
      } else {
        setView("success");
      }
    } catch {
      setView("error");
      setErrorMsg("Connexion au serveur impossible. Réessaie dans un instant.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetBooking() {
    setView("picker");
    setBookerName("");
    setBookerEmail("");
    setBookerMessage("");
    setErrorMsg(null);
  }

  // Fetch settings once
  useEffect(() => {
    let mounted = true;
    fetchBookingSettings("moi").then((s) => {
      if (mounted) setSettings(s);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Fetch bookings for the current month range
  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const from = new Date(year, month - 1, 1);
    const to = new Date(year, month, 0, 23, 59, 59);

    fetchBookedSlots(from, to)
      .then((b) => {
        if (mounted) setBookings(b);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [year, month]);

  // Compute availability
  const availability: DayAvailability[] = useMemo(() => {
    if (!settings) return [];
    return computeMonthAvailability(settings, bookings, year, month);
  }, [settings, bookings, year, month]);

  const availableDates = useMemo(
    () => new Set(availability.map((d) => d.date)),
    [availability]
  );

  const slotsForSelected = useMemo(() => {
    if (!selectedDate) return [];
    return availability.find((d) => d.date === selectedDate)?.slots ?? [];
  }, [availability, selectedDate]);

  // Reset selection when month changes
  useEffect(() => {
    setSelectedDate(null);
    setSelectedSlot(null);
  }, [year, month]);

  // Auto-select first available date when availability loads
  useEffect(() => {
    if (!selectedDate && availability.length > 0) {
      setSelectedDate(availability[0].date);
      setSelectedSlot(availability[0].slots[0] ?? null);
    }
  }, [availability, selectedDate]);

  const weekdayOffset = getWeekdayOffset(year, month);
  const totalDays = daysInMonth(year, month);

  const goPrev = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  const goNext = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const selectedDay = selectedDate ? Number(selectedDate.split("-")[2]) : null;

  // ── SUCCESS VIEW ─────────────────────────────────
  if (view === "success" && selectedDate && selectedSlot) {
    const [y, mo, d] = selectedDate.split("-").map(Number);
    const dateFmt = new Date(y, mo - 1, d).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return (
      <div className="w-full bg-[#BC9A36] px-5 py-10 sm:p-12">
        <div className="mx-auto max-w-md">
          <div className="bg-[#FEFBF2] p-8 text-center sm:p-10">
            <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.28em] text-[#BC9A36]">
              Confirmé
            </p>
            <p className="display-font mt-4 text-[clamp(1.5rem,3vw,2rem)] font-[800] leading-[1.1] tracking-[-0.04em] text-[#1F1810]">
              Ton rendez-vous est pris.
            </p>
            <div className="mt-6 border-y border-[#1F1810]/10 py-5">
              <p className="text-[13px] uppercase tracking-[0.15em] text-[#1F1810]/50">
                {dateFmt}
              </p>
              <p className="display-font mt-2 text-[22px] font-[700] tracking-[-0.02em] text-[#1F1810]">
                {selectedSlot.start.replace(":", " h ")} → {selectedSlot.end.replace(":", " h ")}
              </p>
            </div>
            <p className="mt-6 text-[13px] leading-[1.7] text-[#1F1810]/60">
              Tu vas recevoir une confirmation par email à <strong>{bookerEmail}</strong>.
              <br />À très vite.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── FORM VIEW ────────────────────────────────────
  if (view === "form" && selectedDate && selectedSlot) {
    const [y, mo, d] = selectedDate.split("-").map(Number);
    const dateFmt = new Date(y, mo - 1, d).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return (
      <div className="w-full bg-[#BC9A36] px-5 py-10 sm:p-12">
        <div className="mx-auto max-w-md">
          <div className="bg-[#FEFBF2] p-6 sm:p-8">
            {/* Recap */}
            <button
              type="button"
              onClick={resetBooking}
              className="accent-font text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1810]/45 transition-colors hover:text-[#1F1810]"
            >
              ← Retour
            </button>
            <p className="display-font mt-4 text-[18px] font-[700] tracking-[-0.02em] text-[#1F1810]">
              {dateFmt}
            </p>
            <p className="display-font mt-1 text-[15px] font-[400] italic text-[#1F1810]/60">
              {selectedSlot.start.replace(":", " h ")} → {selectedSlot.end.replace(":", " h ")}
            </p>

            <div className="mt-6 border-t border-[#1F1810]/10 pt-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitBooking();
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="booker-name" className="accent-font block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1810]/55">
                    Ton nom *
                  </label>
                  <input
                    id="booker-name"
                    type="text"
                    required
                    minLength={2}
                    value={bookerName}
                    onChange={(e) => setBookerName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="mt-2 w-full border border-[#1F1810]/15 bg-white px-3 py-2.5 text-[14px] text-[#1F1810] placeholder:text-[#1F1810]/30 focus:border-[#1F1810] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="booker-email" className="accent-font block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1810]/55">
                    Email *
                  </label>
                  <input
                    id="booker-email"
                    type="email"
                    required
                    value={bookerEmail}
                    onChange={(e) => setBookerEmail(e.target.value)}
                    placeholder="jean@agence.com"
                    className="mt-2 w-full border border-[#1F1810]/15 bg-white px-3 py-2.5 text-[14px] text-[#1F1810] placeholder:text-[#1F1810]/30 focus:border-[#1F1810] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="booker-message" className="accent-font block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1810]/55">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="booker-message"
                    rows={3}
                    value={bookerMessage}
                    onChange={(e) => setBookerMessage(e.target.value)}
                    placeholder="De quoi veux-tu parler ?"
                    className="mt-2 w-full resize-none border border-[#1F1810]/15 bg-white px-3 py-2.5 text-[14px] text-[#1F1810] placeholder:text-[#1F1810]/30 focus:border-[#1F1810] focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-[12px] text-red-600">Erreur : {errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 flex w-full items-center justify-center bg-[#1F1810] px-4 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#BC9A36] transition-[letter-spacing] duration-500 hover:tracking-[0.18em] disabled:opacity-60"
                >
                  {submitting ? "Réservation..." : "Valider la réservation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── PICKER VIEW (default) ────────────────────────
  return (
    <div className="w-full bg-[#BC9A36] px-5 py-10 sm:p-12">
      <div className="mx-auto max-w-md">
        {/* Calendar card */}
        <div className="bg-[#FEFBF2] p-5 sm:p-7">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="display-font text-[18px] font-[700] tracking-[-0.02em] text-[#1F1810]">
              {MONTH_NAMES[month - 1]} {year}
            </p>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-7 w-7 items-center justify-center border border-[#1F1810]/15 text-[#1F1810]/50 transition-colors hover:text-[#1F1810]"
                aria-label="Mois précédent"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-7 w-7 items-center justify-center border border-[#1F1810]/15 text-[#1F1810]/50 transition-colors hover:text-[#1F1810]"
                aria-label="Mois suivant"
              >
                ›
              </button>
            </div>
          </div>

          {/* Days of week */}
          <div className="mt-5 grid grid-cols-7 gap-1.5 text-center">
            {DAYS_OF_WEEK.map((d, i) => (
              <div
                key={i}
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1F1810]/35"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {Array.from({ length: weekdayOffset }, (_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}

            {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
              const dateISO = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const available = availableDates.has(dateISO);
              const isSelected = day === selectedDay;

              if (isSelected) {
                return (
                  <div
                    key={day}
                    className="flex aspect-square items-center justify-center border-2 border-[#1F1810] bg-[#BC9A36] text-[13px] font-bold text-[#1F1810]"
                  >
                    {day}
                  </div>
                );
              }

              if (available) {
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => {
                      setSelectedDate(dateISO);
                      const first = availability.find((d) => d.date === dateISO)?.slots[0];
                      setSelectedSlot(first ?? null);
                    }}
                    className="flex aspect-square items-center justify-center bg-[#C4A139]/55 text-[13px] font-bold text-[#1F1810] transition-colors hover:bg-[#C4A139]"
                  >
                    {day}
                  </button>
                );
              }

              return (
                <div
                  key={day}
                  className="flex aspect-square items-center justify-center text-[13px] text-[#1F1810]/20"
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Loading / Empty state */}
          {loading && availability.length === 0 && (
            <p className="mt-6 text-center text-[12px] text-[#1F1810]/40">
              Chargement des dispos…
            </p>
          )}

          {!loading && availability.length === 0 && (
            <p className="mt-6 text-center text-[12px] text-[#1F1810]/40">
              Aucun créneau disponible ce mois-ci.
            </p>
          )}

          {/* Divider */}
          {slotsForSelected.length > 0 && (
            <>
              <div className="mt-6 border-t border-[#1F1810]/10" />

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1810]/45">
                Créneaux du {selectedDay} {MONTH_NAMES[month - 1].toLowerCase()}
              </p>

              <div className="relative mt-3">
                <div className="slots-scroll flex max-h-[180px] flex-col gap-2 overflow-y-auto pr-1">
                  {slotsForSelected.map((slot) => {
                    const active = slot.start === selectedSlot?.start;
                    return (
                      <button
                        key={slot.start}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`w-full shrink-0 border px-4 py-3 text-left text-[13px] font-mono transition-colors ${
                          active
                            ? "border-[#BC9A36] bg-[#1F1810] text-[#BC9A36]"
                            : "border-[#1F1810]/15 bg-transparent text-[#1F1810] hover:border-[#1F1810]/40"
                        }`}
                      >
                        {slot.start.replace(":", " h ")} → {slot.end.replace(":", " h ")}
                      </button>
                    );
                  })}
                </div>
                {slotsForSelected.length > 3 && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#FEFBF2] to-transparent" />
                )}
              </div>

              {selectedSlot && view === "picker" && (
                <button
                  type="button"
                  onClick={() => setView("form")}
                  className="mt-5 flex w-full items-center justify-center gap-2 bg-[#1F1810] px-4 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#BC9A36] transition-[letter-spacing] duration-500 hover:tracking-[0.18em]"
                >
                  Confirmer {selectedSlot.start.replace(":", " h ")} →
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
