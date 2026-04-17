"use client";

import { useState } from "react";

const AVAILABLE_DATES = [1, 2, 7, 8, 9, 10, 14, 15, 16, 17, 21, 22, 23, 24, 28, 29, 30];

const SLOTS: Record<number, string[]> = {
  1: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45"],
  2: ["10 h 30 → 11 h 15", "15 h 00 → 15 h 45", "17 h 00 → 17 h 45"],
  7: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45", "16 h 30 → 17 h 15"],
  8: ["10 h 00 → 10 h 45", "14 h 30 → 15 h 15"],
  9: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45", "16 h 30 → 17 h 15"],
  10: ["11 h 00 → 11 h 45", "15 h 30 → 16 h 15"],
  14: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45"],
  15: ["10 h 00 → 10 h 45", "15 h 00 → 15 h 45"],
  16: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45", "16 h 30 → 17 h 15"],
  17: ["10 h 30 → 11 h 15", "15 h 30 → 16 h 15"],
  21: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45"],
  22: ["11 h 00 → 11 h 45", "15 h 00 → 15 h 45", "17 h 00 → 17 h 45"],
  23: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45"],
  24: ["10 h 00 → 10 h 45", "14 h 30 → 15 h 15", "16 h 30 → 17 h 15"],
  28: ["09 h 30 → 10 h 15"],
  29: ["10 h 30 → 11 h 15", "15 h 00 → 15 h 45"],
  30: ["09 h 30 → 10 h 15", "14 h 00 → 14 h 45", "16 h 30 → 17 h 15"],
};

const DAYS_OF_WEEK = ["L", "M", "M", "J", "V", "S", "D"];

// April 2026 starts on Wednesday (index 2 in our L-M-M-J-V-S-D grid)
const MONTH_START_OFFSET = 2;
const DAYS_IN_MONTH = 30;

export function AgendaCalendar() {
  const [selectedDate, setSelectedDate] = useState<number>(9);
  const [selectedSlot, setSelectedSlot] = useState<string>("14 h 00 → 14 h 45");

  const slotsForDate = SLOTS[selectedDate] ?? [];

  // Ensure selectedSlot is valid for the current date
  const validSlot = slotsForDate.includes(selectedSlot) ? selectedSlot : slotsForDate[0];
  if (validSlot !== selectedSlot && validSlot) {
    // Auto-correct silently on next render — avoid setState during render
  }

  return (
    <div className="w-full bg-[#BC9A36] py-16 sm:py-24">
      <div className="mx-auto max-w-md px-5 sm:px-6">
        {/* Calendar card */}
        <div className="bg-[#FEFBF2] p-5 sm:p-7">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="display-font text-[18px] font-[700] tracking-[-0.02em] text-[#1F1810]">
              Avril 2026
            </p>
            <div className="flex gap-1.5">
              <button
                className="flex h-7 w-7 items-center justify-center border border-[#1F1810]/15 text-[#1F1810]/50 transition-colors hover:text-[#1F1810]"
                aria-label="Mois précédent"
                type="button"
              >
                ‹
              </button>
              <button
                className="flex h-7 w-7 items-center justify-center border border-[#1F1810]/15 text-[#1F1810]/50 transition-colors hover:text-[#1F1810]"
                aria-label="Mois suivant"
                type="button"
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
            {/* Empty cells before start of month */}
            {Array.from({ length: MONTH_START_OFFSET }, (_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}

            {/* Days */}
            {Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1).map((day) => {
              const available = AVAILABLE_DATES.includes(day);
              const isSelected = day === selectedDate;

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
                    onClick={() => setSelectedDate(day)}
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

          {/* Divider */}
          <div className="mt-6 border-t border-[#1F1810]/10" />

          {/* Time slots */}
          {slotsForDate.length > 0 && (
            <>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1810]/45">
                Créneaux du {selectedDate} avril
              </p>

              <div className="mt-3 flex flex-col gap-2">
                {slotsForDate.map((slot) => {
                  const active = slot === validSlot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full border px-4 py-3 text-left text-[13px] font-mono transition-colors ${
                        active
                          ? "border-[#BC9A36] bg-[#1F1810] text-[#BC9A36]"
                          : "border-[#1F1810]/15 bg-transparent text-[#1F1810] hover:border-[#1F1810]/40"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Confirm */}
          {validSlot && (
            <a
              href="https://app.digitaltimes.fr/book/moi"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 bg-[#1F1810] px-4 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#BC9A36] transition-[letter-spacing] duration-500 hover:tracking-[0.18em]"
            >
              Confirmer {validSlot.split(" → ")[0]} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
