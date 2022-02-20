export type Link = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  url: string;
  content: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};