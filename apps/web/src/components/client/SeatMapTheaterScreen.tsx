import { useMemo, useState } from 'react';
import Button from '../ui/Button';
import type { EventItem } from '../mockData';

function money(value: number) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

function buildRows() {
  return ROWS.map((row, index) => {
    const seats = Array.from({ length: 10 }, (_, seatIndex) => {
      const seed = (index * 5 + seatIndex * 3) % 9;
      let state: 'available' | 'gap' | 'occupied' | 'companion' = 'available';
      if (seed === 0) state = 'gap';
      else if (seed === 1) state = 'occupied';
      else if (row === 'G' && seatIndex === 4) state = 'companion';
      return { id: `${row}-${seatIndex}`, state };
    });
    const tier = index < 6 ? 'Plateia A' : index < 8 ? 'Plateia B' : 'Balcão';
    return { row, seats, tier };
  });
}

function Legend({ dot, label }: { dot: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-neutral-400">
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

type SeatMapTheaterScreenProps = {
  event: EventItem;
  onBack: () => void;
  onBuy: (payload: { event: EventItem; ticketType: { name: string; price: number; available: number }; qty: number; total: number }) => void;
};

export default function SeatMapTheaterScreen({ event, onBack, onBuy }: SeatMapTheaterScreenProps) {
  const rows = useMemo(buildRows, []);
  const [selected, setSelected] = useState<{ id: string; tier: string; price: number } | null>(null);

  const tierPrice = (tier: string) => event.ticketTypes.find((ticketType) => ticketType.name === tier)?.price ?? 0;

  function toggleSeat(seat: { id: string; state: 'available' | 'gap' | 'occupied' | 'companion' }, tier: string) {
    if (seat.state !== 'available') return;
    setSelected((current) => {
      if (current && current.id === seat.id) return null;
      return { id: seat.id, tier, price: tierPrice(tier) };
    });
  }

  return (
    <div className="flex h-full flex-col bg-neutral-950">
      <div className="flex items-center gap-3 px-4 py-4">
        <button type="button" onClick={onBack} className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
          ‹
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 pb-4">
        <h1 className="font-serif text-2xl font-bold text-white">{event.title}</h1>
        <p className="text-sm text-neutral-400">📅 {event.dateLabel} às {event.time}</p>
        <p className="text-sm text-neutral-400">📍 {event.venue}, {event.city}</p>

        <div className="border-t border-neutral-800 pt-3">
          <h2 className="mb-1 font-semibold text-white">Sobre o evento</h2>
          <p className="text-sm leading-relaxed text-neutral-400">{event.description}</p>
        </div>

        <div className="border-t border-neutral-800 pt-3">
          <h2 className="font-semibold text-white">Escolha seus assentos</h2>
          <p className="mb-3 text-xs text-neutral-500">Toque em um assento disponível para selecioná-lo</p>

          <div className="mb-4 space-y-2">
            {event.ticketTypes.map((ticketType) => (
              <div key={ticketType.name} className="flex items-center justify-between rounded-xl border border-neutral-800 px-4 py-2.5">
                <span className="text-sm font-semibold text-white">{ticketType.name}</span>
                <span className="text-sm font-semibold text-amber-400">{money(ticketType.price)}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-neutral-900 p-4">
            <div className="mb-4 rounded-md border border-neutral-700 py-1.5 text-center text-xs tracking-widest text-neutral-400">PALCO</div>
            <div className="space-y-1.5">
              {rows.map(({ row, seats, tier }) => (
                <div key={row} className="flex items-center gap-1.5">
                  <span className="w-4 text-[10px] text-neutral-500">{row}</span>
                  <div className="flex flex-wrap gap-1">
                    {seats.map((seat) => {
                      const isSelected = selected?.id === seat.id;
                      const color =
                        seat.state === 'gap'
                          ? 'bg-transparent'
                          : seat.state === 'occupied'
                            ? 'bg-neutral-700'
                            : seat.state === 'companion'
                              ? 'bg-green-500'
                              : isSelected
                                ? 'bg-amber-400'
                                : 'bg-pink-600 hover:bg-pink-500';
                      return (
                        <button
                          key={seat.id}
                          type="button"
                          disabled={seat.state === 'occupied' || seat.state === 'gap'}
                          onClick={() => toggleSeat(seat, tier)}
                          className={`h-3.5 w-3.5 rounded-full ${color}`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Legend dot="bg-pink-600" label="Disponível" />
              <Legend dot="bg-amber-400" label="Selecionado" />
              <Legend dot="bg-neutral-700" label="Ocupado / Vendido" />
              <Legend dot="bg-green-500" label="Acompanhante" />
            </div>
            <p className="mt-2 text-center text-[10px] text-neutral-500">Fileiras I–J: Balcão</p>
          </div>
        </div>

        {selected && (
          <div className="flex items-center justify-between rounded-xl border border-red-500/40 bg-red-950/40 px-4 py-3">
            <span className="text-sm text-neutral-200">1 assento selecionado</span>
            <span className="font-bold text-amber-400">{money(selected.price)}</span>
          </div>
        )}

        <p className="text-xs text-neutral-500">Organizador: <span className="text-neutral-300">{event.organizer}</span></p>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-neutral-800 px-4 py-4">
        <div>
          <p className="text-xs text-neutral-500">{selected ? '1 assento' : '0 assentos'}</p>
          <p className="text-lg font-bold text-amber-400">{money(selected?.price ?? 0)}</p>
        </div>
        <Button
          variant="secondary"
          className="w-auto px-8"
          disabled={!selected}
          onClick={() =>
            onBuy({
              event,
              ticketType: { name: selected!.tier, price: selected!.price, available: 1 },
              qty: 1,
              total: selected!.price,
            })
          }
        >
          Comprar Ingresso
        </Button>
      </div>
    </div>
  );
}
