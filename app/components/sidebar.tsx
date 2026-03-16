import { tv } from "tailwind-variants";

const sidebar = tv({
  base: " h-[calc(100vh-5rem)] border-x-2 border-white/15 p-5",
});

export default function Sidebar() {
  return <aside className={sidebar()}>helloo</aside>;
}
