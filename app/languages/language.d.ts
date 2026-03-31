import { StaticImageData } from "next/image";

type subtitle = {
  type: "subtitle";
  value: string;
};
type paragraph = {
  type: "paragraph";
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
        previewImg: StaticImageData;
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

export type FinalItem = {
  id: string;
  title: string;
  sessions: Session[];
  path: string;
};

export type Page = {
  title: string;
  items: Item[];
};
