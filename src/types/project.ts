import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  features?: string[];
  status: string;
  cover: StaticImageData;
  subImage?: StaticImageData[];
  type: string;
  role: string;
  frontend?: string;
  backend?: string;
  database?: string;
  deploy?: string;
  link?: string;
}