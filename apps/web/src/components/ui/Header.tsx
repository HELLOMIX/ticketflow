type AppHeaderProps = {
  title?: string;
};

export function AppHeader({ title = 'TicketFlow' }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-neutral-950 px-4 py-4 border-b border-neutral-800">
      <div>
        <p className="font-serif text-xl font-bold text-red-500">{title}</p>
      </div>
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-neutral-300 text-sm"
        aria-label="Perfil"
      >
        👤
      </button>
    </header>
  );
}

type BackHeaderProps = {
  title: string;
  onBack: () => void;
};

export function BackHeader({ title, onBack }: BackHeaderProps) {
  return (
    <header className="flex items-center gap-3 border-b border-neutral-800 bg-neutral-950 px-4 py-4">
      <button
        type="button"
        onClick={onBack}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xl text-white"
        aria-label="Voltar"
      >
        ‹
      </button>
      <h1 className="font-semibold text-white text-base">{title}</h1>
    </header>
  );
}
