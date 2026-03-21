export interface Text {
  navbar: {
    pages: [string, string, string];
    language: string;
  };
  aboutMe: {
    aboutMe: {
      title: string;
      paragraphs: [string];
    };
    trajectory: {
      title: string;
      paragraphs: [string, string];
      code: string;
    };
  };
  sidebarLeft: {
    groups: [
      { title: string; items: [string, string, string] },
      { title: string; items: [string, string, string, string] },
      { title: string; items: [string, string, string] },
    ];
  };
}
