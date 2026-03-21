import { tv } from "tailwind-variants";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import slugify from "slugify";
import Link from "next/link";

const sidebar = tv({
  base: `
      h-screen w-60 pr-10 overflow-y-auto
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

const sidebarLine = tv({
  base: "h-0.5 rounded-full w-auto my-6",
  variants: {
    theme: {
      dark: "bg-white/20",
      light: "bg-black/20",
    },
  },
});

const sidebarTitle = tv({
  base: "font-bold",
  variants: {
    theme: {
      dark: "text-white",
      light: "text-black",
    },
  },
});

const sidebarItem = tv({
  base: "text-sm/8",
  variants: {
    theme: {
      dark: "text-white/75",
      light: "text-black/75",
      selected: "font-bold text-green-300",
    },
  },
});

export function SidebarLine() {
  const { theme } = useContext(ThemeContext);
  return <div className={sidebarLine({ theme })} />;
}

export function SidebarTitle({ children }: { children?: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return <div className={sidebarTitle({ theme })}>{children}</div>;
}

export function SidebarItem({
  children,
  item,
}: {
  children?: React.ReactNode;
  item: string;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link href={`/${slugify(item)}`}>
      <div className={sidebarItem({ theme })}>{children}</div>
    </Link>
  );
}

export function SidebarGroup({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>;
}

export function Sidebar({
  position,
  children,
}: {
  position: "right" | "left";
  children?: React.ReactNode;
}) {
  return <aside className={sidebar({ position })}>{children}</aside>;
}
