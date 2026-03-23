export interface SidebarItem {
  label: string;
  path: string;
}

interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

export interface Text {
  navbar: {
    pages: {
      label: string;
      path: string;
    }[];
    language: string;
  };
  aboutMe: {
    aboutMe: {
      title: string;
      paragraphs: string[];
    };
    trajectory: {
      title: string;
      paragraphs: string[];
      code: string;
    };
  };
  sidebarLeft: {
    groups: SidebarGroup[];
  };
}
