import contentful from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  content: Document;
  date: string;
}


export const contentfulClient = contentful.createClient({
  // space: "zksbb4bim6",
  // accessToken: "xvrcbaHaZe7xs6kV-AQfGEjtvNeMHOcg85LZqouow4g"

  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
