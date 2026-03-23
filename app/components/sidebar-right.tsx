import { Sidebar } from "./sidebar";
import { TableOfContent } from "./ui/table-of-content";

export function SidebarRight() {
  return (
    <Sidebar position="right">
      <TableOfContent />
    </Sidebar>
  );
}
