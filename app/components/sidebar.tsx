import { tv } from "tailwind-variants";

const sidebar = tv({
  base: `
      h-screen pr-10 w-60 overflow-y-auto pointer-events-auto
      [&::-webkit-scrollbar]:w-1.5
      [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:bg-white/25
      [&::-webkit-scrollbar-thumb]:rounded-full`,
  variants: {
    position: {
      left: "left-0 hidden md:block",
      right: "right-0 hidden lg:block",
    },
  },
});

export function Sidebar({
  position,
  children,
}: {
  position: "right" | "left";
  children?: React.ReactNode;
}) {
  return <aside className={sidebar({ position })}>{children}</aside>;
}
