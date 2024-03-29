import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreview from "../components/Blog/BlogPostGrid";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage-Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage-Reviews.jpg" }
    ) {
      publicURL
    }
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          image {
            asset {
              gatsbyImageData
            }
          }
          categories {
            _id
            title
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Blog | Hoffman Hanono"
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h1>Hoffman Hanono Blog</h1>
          </header>
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreview nodes={postNodes} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
