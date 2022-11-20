import React from "react";
import { graphql } from "gatsby";
import InsurancePost from "../components/insurance/InsurancePost";
import GraphQLErrorList from "../components/Insurance/graphql-error-list";
// import { toPlainText } from "../lib/helpers";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

export const query = graphql`
  query InsurancePostTemplateQuery($id: String!) {
    insurance: sanityInsurance(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      image {
        asset {
          gatsbyImageData
        }
      }
      title
      slug {
        current
      }
      seoTitle
      metaDescription
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        _id
        image {
          asset {
            _id
            gatsbyImageData
          }
        }
        name
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const InsurancePostTemplate = (props) => {
  const { data, errors } = props;
  const insurance = data && data.insurance;
  const site = data && data.site;
  return (
    <Layout>
      {errors && <SearchEngineOptimization title="GraphQL Error" />}
      {insurance && (
        <SearchEngineOptimization
          title={insurance.seoTitle}
          description={insurance.metaDescription}
          openGraphImage={insurance.mainImage}
          twitterOpenGraphImage={insurance.mainImage}
        />
      )}

      {errors && (
        <div className="container">
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      {insurance && <InsurancePost {...insurance} {...site} />}
    </Layout>
  );
};

export default InsurancePostTemplate;
