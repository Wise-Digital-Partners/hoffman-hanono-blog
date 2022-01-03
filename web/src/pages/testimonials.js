import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ReviewCards from "../components/Reviews/ReviewCards";
import CallToAction from "../components/Repeating/CallToAction";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Hoffman Hanono Testimonials | Commercial Insurance"
        description="Visit our Testimonials page to find out why San Diego and Chula Vista businesses have trusted Hoffman Hanono Insurance Services for over 50 years."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <div className="container">
        <section className="wrapper bg-gray-100 pt-16 pb-12 px-6 md:py-24 mb-10 md:mt-6 md:mb-24 rounded-xl md:rounded-3xl">
          <header className="max-w-2xl mx-auto text-center">
            <img
              className="mx-auto mb-6"
              src={data.quotationMark.publicURL}
              alt="Quotation mark"
            />
            <h1>You’re in Good Company</h1>
            <p className="mb-0">
              San Diego businesses and families have trusted Hoffman Hanono for
              more than 60 years. Hear what happy clients have to say!
            </p>
          </header>
        </section>
      </div>

      <ReviewCards className="wrapper" />
      <CallToAction />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/reviews-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/reviews-twitter.jpg" }
    ) {
      publicURL
    }
    quotationMark: file(relativePath: { eq: "testimonials/quote.svg" }) {
      publicURL
    }
  }
`;
