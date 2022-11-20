import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
// import SearchEngineOptimization from "../components/SEO";
import InsurancePostPreview from "../components/insurance/InsurancePostGrid";
import GraphQLErrorList from "../components/Insurance/graphql-error-list";
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
    insurance: allSanityInsurance(
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

const InsuranceArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const insuranceNodes = (data || {}).insurance
    ? mapEdgesToNodes(data.insurance)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout headerHasBorder={true}>
      <section className="pt-12 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h1>Hoffman Hanono Blog</h1>
          </header>
          {insuranceNodes && insuranceNodes.length > 0 && (
            <InsurancePostPreview nodes={insuranceNodes} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default InsuranceArchivePage;
