export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61ce54492bc6cb15664e4984",
                  title: "Sanity Studio",
                  name: "hoffman-hanono-blog-studio",
                  apiId: "0dbf18b7-2b28-48d5-8554-73b43001ce65",
                },
                {
                  buildHookId: "61ce54491fd33472653187d1",
                  title: "Blog Website",
                  name: "hoffman-hanono-blog",
                  apiId: "eda43f17-86ab-43d4-a8ad-87180fde19a6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/hoffman-hanono-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://hoffman-hanono-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
