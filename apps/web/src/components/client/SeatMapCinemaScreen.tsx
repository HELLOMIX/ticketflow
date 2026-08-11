import { useMemo, useState } from 'react';
import Button from '../ui/Button';
import { EventTypeBadge } from '../ui/Badge';
import type { EventItem } from '../mockData';

function money(value: number) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function buildRows() {
  const rows = [] as Array<{ row: number; seats: Array<{ id: string; state: 'available' | 'gap' | 'occupied' }> }>;
  for (let row = 16; row >= 1; row -= 1) {
    const seatCount = row <= 3 ? 11 : 13;
    const seats = Array.from({ length: seatCount }, (_, index) => {
      const seed = (row * 7 + index * 3) % 11;
      let state: 'available' | 'gap' | 'occupied' = 'available';
      if (seed === 0) state = 'gap';
      else if (seed === 1 || seed === 2) state = 'occupied';
      return { id: `${row}-${index}`, state };
    });
    rows.push({ row, seats });
  }
  return rows;
}

const LEGEND = [
  { label: 'Disponível', dot: 'bg-blue-500' },
  { label: 'Selecionado', dot: 'bg-red-500' },
  { label: 'Ocupado', dot: 'bg-neutral-700' },
  { label: 'Conforto', dot: 'bg-blue-700' },
  { label: 'Acessível', dot: 'bg-blue-400' },
];

type SeatMapCinemaScreenProps = {
  event: EventItem;
  onBack: () => void;
  onBuy: (payload: { event: EventItem; ticketType: { name: string; price: number; available: number }; qty: number; total: number }) => void;
};

export default function SeatMapCinemaScreen({ event, onBack, onBuy }: SeatMapCinemaScreenProps) {
  const rows = useMemo(buildRows, []);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const pricePerSeat = event.ticketTypes[0].price;

  function toggleSeat(seat: { id: string; state: 'available' | 'gap' | 'occupied' }) {
    if (seat.state === 'occupied' || seat.state === 'gap') return;
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(seat.id)) next.delete(seat.id);
      else next.add(seat.id);
      return next;
    });
  }

  const total = selected.size * pricePerSeat;

  return (
    <div className="flex h-full flex-col bg-neutral-950">
      <div className="flex items-center gap-3 px-4 py-4">
        <button type="button" onClick={onBack} className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
          ‹
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 pb-4">
        <EventTypeBadge type={event.type} />
        <h1 className="font-serif text-2xl font-bold text-white">{event.title}</h1>
        <p className="text-sm text-neutral-400">📅 {event.dateLabel} às {event.time}</p>
        <p className="text-sm text-neutral-400">📍 {event.venue}, {event.city}</p>

        <div className="border-t border-neutral-800 pt-3">
          <h2 className="mb-1 font-semibold text-white">Sobre o evento</h2>
          <p className="text-sm leading-relaxed text-neutral-400">{event.description}</p>
        </div>

        <div className="border-t border-neutral-800 pt-3">
          <h2 className="font-semibold text-white">Escolha seus assentos</h2>
          <p className="mb-3 text-xs text-neutral-500">Inteira · {money(pricePerSeat)} por assento</p>

          <div className="overflow-x-auto rounded-xl bg-neutral-900 p-3">
            <div className="min-w-[420px] space-y-1.5">
              {rows.map(({ row, seats }) => (
                <div key={row} className="flex items-center gap-1.5">
                  <span className="w-4 text-right text-[10px] text-neutral-500">{row}</span>
                  <div className="flex gap-1">
                    {seats.map((seat) => {
                      const isSelected = selected.has(seat.id);
                      const color =
                        seat.state === 'gap'
                          ? 'bg-transparent'
                          : seat.state === 'occupied'
                            ? 'bg-neutral-700'
                            : isSelected
                              ? 'bg-red-500'
                              : 'bg-blue-500 hover:bg-blue-400';
                      return (
                        <button
                          key={seat.id}
                          type="button"
                          disabled={seat.state !== 'available'}
                          onClick={() => toggleSeat(seat)}
                          className={`h-3.5 w-3.5 rounded-sm ${color}`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
              <div className="mt-2 border-t border-neutral-700 pt-2 text-center text-[10px] tracking-widest text-neutral-500">TELA</div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            {LEGEND.map((item) => (
              <span key={item.label} className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {selected.size > 0 && (
          <div className="flex items-center justify-between rounded-xl border border-red-500/40 bg-red-950/40 px-4 py-3">
            <span className="text-sm text-neutral-200">{selected.size} assento{selected.size > 1 ? 's' : ''} selecionado{selected.size > 1 ? 's' : ''}</span>
            <span className="font-bold text-amber-400">{money(total)}</span>
          </div>
        )}

        <p className="text-xs text-neutral-500">Organizador: <span className="text-neutral-300">{event.organizer}</span></p>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-neutral-800 px-4 py-4">
        <div>
          <p className="text-xs text-neutral-500">{selected.size} assentos</p>
          <p className="text-lg font-bold text-amber-400">{money(total)}</p>
        </div>
        <Button
          variant="secondary"
          className="w-auto px-8"
          disabled={selected.size === 0}
          onClick={() =>
            onBuy({
              event,
              ticketType: { name: 'Inteira', price: pricePerSeat, available: event.ticketTypes[0].available },
              qty: selected.size,
              total,
            })
          }
        >
          Comprar Ingresso
        </Button>
      </div>
    </div>
  );
}
