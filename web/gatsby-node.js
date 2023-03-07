const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });

  }

  async function createInsurancePostPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
      {
        allSanityInsurance(
          filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        ) {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
            }
          }
        }
      }
    `);

    if (result.errors) throw result.errors;

    const postEdges = (result.data.allSanityInsurance || {}).edges || [];

    postEdges
      .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
      .forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `/${slug.current}/`;

          createPage({
          path,
          component: require.resolve("./src/templates/insurance-post.js"),
          context: { id },
        });
      });
  }

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);  
  await createInsurancePostPages(graphql, actions);
};
async function createTeamMemberPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTeamMember(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityTeamMember || {}).edges || [];

  postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/team-member.js"),
      context: {
        id,
      },
    });
  });
}
exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /micromodal/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
