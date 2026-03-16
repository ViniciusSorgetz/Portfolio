import { tv } from "tailwind-variants";

const sidebar = tv({
  base: "h-screen w-50 border-x-2 border-white/15 p-5 px-10",
});

export default function Sidebar({ className }: { className: string }) {
  return (
    <aside className={sidebar({ className })}>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </aside>
  );
}
