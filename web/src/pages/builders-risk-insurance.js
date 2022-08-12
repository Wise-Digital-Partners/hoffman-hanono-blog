import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import WhyUs from "../components/Repeating/WhyUs";
import SliderTestimonials from "../components/Slider/SliderTestimonials";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CallToAction";

const Page = ({ data }) => {
  const heroImages = [
    data.heroDesktop.childImageSharp.fixed,
    {
      ...data.heroMobile.childImageSharp.fixed,
      media: `(max-width: 767px)`,
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Builder's Risk Insurance San Diego | Hoffman Hanono"
        description="If you need Builder's Risk Insurance in San Diego County, look no further. Hoffman Hanono gets you the right coverage for your needs. Get a free quote!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroSplit
        images={heroImages}
        position="50% 50%"
        maxHeightDesktop="618px"
        maxHeightMobile="500px"
      >
        <div className="max-w-2xl">
          <h1>Builder's Risk Insurance</h1>
          <p className="mb-0">
If you’re a contractor or stakeholder in a new construction project, remodel, or installation, you’ll want to consider builder’s risk insurance (also referred to as course of construction coverage). It can protect you from loss and damage due to events out of your control, such as natural disasters, severe weather, theft, or vandalism. 
          </p>
        </div>
      </HeroSplit>

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-24 items-center">
            <div className="md:col-start-1 md:col-end-7">
              <Img fluid={data.whatsIncluded.childImageSharp.fluid} />
            </div>
            <div className="md:col-end-13 md:col-span-6">
              <h2>Custom Coverage For Your Project</h2>
              <p>
Builder’s risk insurance can be purchased by property owners, general contractors, subcontractors, architects, and others who have a stake in a commercial or residential project. Each policy is tailored to fit your needs. At Hoffman Hanono, we pair you with trusted insurance providers so you’ll have a strong policy to cover incidents such as:
              </p>
              <ul className="styled-list">
                <li>Weather damage</li>
                <li>Fire damage</li>
                <li>Natural disaster damage (i.e., earthquake or flooding)</li>
                <li>Theft and vandalism</li>
                <li>Damage due to faulty design or materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="wrapper bg-gray-100 pt-24 pb-20 md:py-32 px-6 rounded-xl md:rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <p className="decorative-text">Custom Solutions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <div>
                <h2>Our Builder’s Risk Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
Whether you're working on a residential or commercial construction project, Hoffman Hanono Insurance Services is here to advise and partner with you. We specialize in finding insurance solutions meant entirely for you—because we know that insurance is not "one-size-fits-all." And when it comes to builder's risk insurance, the policies are as unique as your project. We provide quality service and resources that will help you secure better insurance premiums in the long run. Our commitment has made us a pillar of the San Diego and Chula Vista insurance community since 1959.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <WhyUs />
      <SliderTestimonials />
      <About />
      <CallToAction />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/restaurants-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/restaurants-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/builders-risk-insurance/builders-hero-desktop.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 548, height: 618) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "commercial-insurance/builders-risk-insurance/builders-hero-mobile.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 748, height: 748) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    whatsIncluded: file(
      relativePath: {
        eq: "commercial-insurance/builders-risk-insurance/whats-included.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
