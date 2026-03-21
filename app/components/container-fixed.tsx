import { tv } from "tailwind-variants";

const container = tv({
  slots: {
    base: " md:px:10 text-sm font-figree flex items-center justify-center z-5 transition-colors w-full bg-zinc-950 pointer-events-none",
    layout: "fixed w-[95%] max-w-341.5  justify-center top-0",
  },
});

export function ContainerFixed({ children }: { children: React.ReactNode }) {
  const { base, layout } = container();

  return (
    <div className={base()}>
      <div className={layout()}>{children}</div>
    </div>
  );
}
