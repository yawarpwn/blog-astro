import { EntrySkeletonType } from "contentful";
import { contentfulClient } from "../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BlogPost } from "../lib/contentful";
const entries = await contentfulClient.getEntries<EntrySkeletonType<BlogPost>>({
  content_type: "blog",
});

export function getPosts() {
  const posts = entries.items.map((item) => {
    const { title, description, slug, date, content } = item.fields;

    return {
      title,
      description,
      date: new Date(date).toLocaleString(),
      slug,
      content: documentToHtmlString(content),
    };
  });

  return posts;
}
