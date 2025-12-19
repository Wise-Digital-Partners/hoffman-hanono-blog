import React from "react";
import { graphql } from "gatsby";
import InsurancePost from "../components/insurance/InsurancePost";
import GraphQLErrorList from "../components/insurance/graphql-error-list";
// import { toPlainText } from "../lib/helpers";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import WhyUs from "../components/Repeating/WhyUs";
import SliderTestimonials from "../components/Slider/SliderTestimonials";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CallToAction";
import FaqSection from "../components/Repeating/FaqSection";

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
      imageSecond {
        asset {
          gatsbyImageData
        }
      }
      title
      titleSecond
      titleThird
      slug {
        current
      }
      seoTitle
      metaDescription
      faqTitle
      faqs {
        identifier
        title
        _rawBody(resolveReferences: { maxDepth: 5 })
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      _rawBodySecond(resolveReferences: { maxDepth: 5 })
      _rawBodyThird(resolveReferences: { maxDepth: 5 })
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
      <WhyUs />
      <SliderTestimonials />
      {insurance.faqs && insurance.faqs.length > 0 && (
        <FaqSection faqGroup={{ faqs: insurance.faqs }} isHardcoded={false} />
      )}

      <About />
      <CallToAction />
    </Layout>
  );
};

export default InsurancePostTemplate;
