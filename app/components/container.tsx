export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-950  min-h-screen pointer-events-none">
      {children}
    </div>
  );
}
