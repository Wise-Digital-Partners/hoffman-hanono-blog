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
        title="Building Insurance San Diego | Hoffman Hanono"
        description="Looking for building insurance in San Diego? Hoffman Hanono serves North County SD with top quality service. Get a free quote today!"
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
          <h1>Building Insurance in California</h1>
          <p className="mb-0">
            Protect what’s likely the largest physical asset of your
            business—the building and the land surrounding it. Building
            insurance coverage is critical for anyone who owns a building in
            California or is planning to purchase one. It needs to be in place
            in the event the worst happens.
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
              <h2>What It Covers</h2>
              <p>
                Building insurance protects you if a fire, flood,{" "}
                <a href="https://www.hhinsurance.com/earthquake-insurance/">
                  earthquake
                </a>
                , storm, theft, or vandalism occurs on your property. It covers
                the physical building and the property it sits on. We offer
                different types of building insurance plans and packages, and
                we’ll pair you with trusted insurance providers to ensure you
                have a strong policy. Typically, a policy will cover damage to:
              </p>
              <ul className="styled-list">
                <li>Buildings</li>
                <li>Structures</li>
                <li>Fixtures</li>
                <li>Garages</li>
                <li>Fences</li>
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
                  Hoffman Hanono Insurance Services is here to advise and
                  partner with you to ensure you get the right building
                  insurance for your California project. We specialize in
                  finding insurance solutions meant entirely for you—because we
                  know that insurance is not "one-size-fits-all." We provide
                  quality service and resources that will help you secure better
                  insurance premiums in the long run. Our commitment has made us
                  a pillar of the San Diego and Chula Vista insurance community
                  since 1959.
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
        eq: "commercial-insurance/building-insurance/10-building-insurance-hero-desktop.jpg"
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
        eq: "commercial-insurance/building-insurance/11-building-insurance-hero-mobile.jpg"
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
        eq: "commercial-insurance/building-insurance/20-building-insurance-premiums-desktop-mobile.jpg"
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
