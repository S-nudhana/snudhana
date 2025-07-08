export type Expertise = {
  icon: JSX.Element;
  title: string;
  description: string;
  longDescription?: string;
  link?: Link[];
}

type Link = {
  text: string;
  img: string;
  url: string;
}