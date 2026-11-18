export function BootScreen() {
  return (
    <div className="flex h-screen items-center justify-center bg-brand-dark px-8 text-center text-white">
      <div className="rounded-kiosk border border-white/15 bg-white/10 px-10 py-8 shadow-kiosk">
        <div className="text-4xl font-black">Caricamento…</div>
      </div>
    </div>
  );
}