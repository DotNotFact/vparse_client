export type Category = {
  title: string;
  content: string[];
  contentNested: NestedItem[];
  type: string;
};

export type NestedItem = {
  title: string;
  content: string[];
};

export type Data = Category[];
