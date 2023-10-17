import React, { useState } from "react";
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
  const [showTooltip, setShowTooltip] = useState(false);
  const heroImages = [
    data.heroDesktop.childImageSharp.fixed,
    {
      ...data.heroMobile.childImageSharp.fixed,
      media: `(max-width: 767px)`,
    },
  ];

  const displayTooltip = () => {
    setShowTooltip(true);
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  const handleClick = () => {
    setShowTooltip((p) => !p);
  };

  return (
    <Layout>
      <SearchEngineOptimization
        title="Earthquake Insurance | California | Hoffman Hanono"
        description="Looking for earthquake insurance to help protect your business or home? Get a free quote with the experts at Hoffman Hanono Insurance today!"
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
          <h1>Earthquake Insurance</h1>
          <p>
            Without a comprehensive earthquake insurance plan for your business,
            you’re playing a risky game with Mother Nature, especially in
            California. According to a U.S. Geological Survey and FEMA report,
            earthquakes cost the U.S. $14.7 billion in damages every single
            year.{" "}
            <img
              className="inline-block pb-1 cursor-pointer"
              src={data.tooltipIcon.publicURL}
              alt="Tooltip Icon"
              onMouseEnter={displayTooltip}
              onClick={handleClick}
            />
            <a
              href="https://www.usgs.gov/news/national-news-release/new-usgs-fema-study-highlights-economic-earthquake-risk-united-states"
              target="_blank"
              rel="noreferrer"
              className={`${
                showTooltip ? "" : "hidden"
              } text-white inline-block p-3 absolute z-20 w-[300px] text-sm bg-black/70 rounded-lg hover:text-white`}
              onMouseLeave={hideTooltip}
              onClick={hideTooltip}
            >
              https://www.usgs.gov/news/national-news-release/new-usgs-fema-study-highlights-economic-earthquake-risk-united-states
            </a>
          </p>
          <p>
            What's more, most general business insurance policies do not cover
            natural disasters like earthquakes. That means you're on the hook
            for repairs if your business suffers damage during a seismic event.
            You should be focusing on running your company – not stressing about
            protecting your commercial property. Hoffman Hanono has the
            California earthquake insurance you need for peace of mind.
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
              <h2>What’s Covered</h2>
              <p>
                Earthquake insurance in San Diego is designed to keep you and
                your business financially stable. As you can imagine, the cost
                of earthquake insurance depends on several factors, including
                where your business is located and the age and condition of your
                commercial buildings. That being said, many find the cost to be
                more than worth it, as most policies cover:
              </p>
              <ul className="styled-list">
                <li>Damage to your buildings</li>
                <li>Stock, equipment, and even machinery</li>
                <li>Loss of business income</li>
                <li>Damage to the commercial property itself</li>
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
                <h2>Our Commercial Earthquake Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  At Hoffman Hanono, we’ve been helping business owners like you
                  find financial security and peace of mind since 1959. If you
                  need insurance for earthquakes in California or any other type
                  of coverage, our agents can help.
                </p>
                <p>
                  We believe in more than just insurance sales. Our mission is
                  to serve as advisers and partners as you explore the insurance
                  landscape and choose the right protection for you. With us,
                  you’ll find unmatched coverage at an unmatched price.
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
      relativePath: { eq: "open-graph/facebook/EarthquakeInsuranceFB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/EarthquakeInsuranceTwitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/earthquake/EarthquakeInsuranceDesktop.jpg"
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
        eq: "commercial-insurance/earthquake/EarthquakeInsuranceMobile.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 748, height: 748) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    tooltipIcon: file(relativePath: { eq: "repeating/tooltip.svg" }) {
      publicURL
    }
    whatsIncluded: file(
      relativePath: {
        eq: "commercial-insurance/earthquake/EarthquakeInsurancePlusMobile.jpg"
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
