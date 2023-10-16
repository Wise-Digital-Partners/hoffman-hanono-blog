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
        title="Employment Practices Liability Insurance | Hoffman Hanono"
        description="Learn about employment practices liability insurance and protect your business. Get a free quote with the experts at Hoffman Hanono Insurance today!"
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
          <h1>Employment Practices Liability Insurance</h1>
          <p>
            Employment-related claims are on the rise, and from defense costs to
            awarded damages, a single claim can cost your business thousands of
            dollars. Protect your company against wrongful termination and
            discrimination claims with a comprehensive Employment Practices
            Liability Insurance coverage.
          </p>
          <p>
            Known as EPLI, this type of business liability insurance offers
            much-needed peace of mind if an employee accuses you of violating
            their rights. Our Hoffman Hanono insurance experts will review the
            type of business you have, offering EPLI insurance options that keep
            you covered.
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
              <h2>What Does EPLI Cover?</h2>
              <p>
                While the exact type of coverage offered is specific to each
                EPLI plan, generally, this type of business insurance covers a
                range of employee-related claims and associated damages, like:
              </p>
              <ul className="styled-list">
                <li>Litigation costs, defense attorney fees</li>
                <li>Costs related to the claim</li>
                <li>
                  Allegations of wrongful termination, discrimination, workplace
                  harassment, and even retaliation
                </li>
                <li>
                  Other employment-related claims, like failure to promote
                </li>
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
                <h2>Our EPLI Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  At Hoffman Hanono, we’ve been helping business owners like you
                  find financial security and peace of mind since 1959. If you
                  need Employment Practices Liability Insurance in California,
                  our agents can help.
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
      relativePath: { eq: "open-graph/facebook/epli-InsuranceFB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/epli-InsuranceTwitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/epli-insurance/epli-InsuranceDesktop.jpg"
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
        eq: "commercial-insurance/epli-insurance/epli-InsuranceMobile.jpg"
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
        eq: "commercial-insurance/epli-insurance/epli-InsurancePlusMobile.jpg"
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
