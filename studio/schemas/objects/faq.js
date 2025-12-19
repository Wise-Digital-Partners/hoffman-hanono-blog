export default {
  name: "faq",
  type: "object",
  title: "FAQ",
  fields: [
    {
      name: "identifier",
      type: "string",
      title: "Identifier",
    },
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name:"body",
      type: "bodyPortableText",
      title: "Body"
    }
  ], 
  preview: {
    select: {
      title: "identifier",
    },
  },
};
