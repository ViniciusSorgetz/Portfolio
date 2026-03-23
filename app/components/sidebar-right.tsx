import { Sidebar } from "./sidebar";
import { TableOfContent } from "./toc/table-of-content";

export function SidebarRight() {
  return (
    <Sidebar position="right">
      <TableOfContent />
    </Sidebar>
  );
}
