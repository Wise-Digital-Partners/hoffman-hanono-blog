import { format } from "date-fns";

export default {
  name: "insurance",
  type: "document",
  title: "Insurance Post",
  fields: [
    
    {
      name: "nav",
      type: "string",
      title: "Navigation menu Text",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
      {
      name: "metaDescription",
      type: "string",
      title: "Meta Description",
    },
    {
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
    },
        {
      title: "Author",
      name: "author",
      type: "reference",
      options: {
        disableNew: true,
      },
      to: [{ type: "author" }],
    },
     {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      // validation: (Rule) => Rule.required(),s
    },

    {
      name: "image",
      type: "image",
      title: "Hero Split image",
    },

        {
      name: "title",
      type: "string",
      title: "Hero Split Title",
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Hero Split Paragraph",
    },
        {
      name: "imageSecond",
      type: "image",
      title: "What It Covers image",
    },

        {
      name: "titleSecond",
      type: "string",
      title: "What It Covers Title",
    },
    {
      name: "bodySecond",
      type: "bodyPortableText",
      title: "What It Covers Paragraph",
    },
    {
      name: "titleThird",
      type: "string",
      title: "Our Approach Paragraph",
    },
    {
      name: "bodyThird",
      type: "bodyPortableText",
      title: "Our Approach Paragraph",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },

  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "image",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
