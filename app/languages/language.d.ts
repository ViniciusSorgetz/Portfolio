type subtitle = {
  type: "subtitle";
  value: string;
};
type paragraph = {
  type: "subtitle";
  value: string;
};
type previewCode = {
  type: "preview-code";
  value:
    | {
        code: string;
        codeMode: boolean;
        previewText: string;
      }
    | {
        code: string;
        codeMode: boolean;
        previewImg: string;
      };
};

type Rows = (subtitle | paragraph | previewCode)[];

type Session = {
  title: string;
  rows: Rows;
};

export type Item = {
  title: string;
  sessions: Session[];
};

export type Page = {
  title: string;
  items: Item[];
};
