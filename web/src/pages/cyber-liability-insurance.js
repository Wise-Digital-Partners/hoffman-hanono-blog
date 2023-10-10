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
        title="Cyber Liability Insurance | San Diego | Hoffman Hanono"
        description="Looking for cyber liability insurance for your San Diego business? Get a free quote with the experts at Hoffman Hanono Insurance today!"
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
          <h1>Cyber Liability Insurance</h1>
          <p className="mb-0">
            Technology makes it exponentially easier to run a business, whether
            you’re a mom-and-pop shop or a global corporation. But just because
            technology has many rewards doesn’t mean it’s without risk. If you
            use technology to conduct business, you’re vulnerable to a cyber
            attack. Thankfully, you can protect not only your company but
            yourself.
          </p>
          <p>
            By obtaining comprehensive cyber liability coverage, you can
            minimize the potential fallout of an attack, both pre- and
            post-breach. Learn more about the specific options that will
            safeguard your company and the cost of cyber liability insurance by
            getting in touch with our Hoffman Hanono insurance experts today.
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
              <h2>What Is Cyber Liability Insurance?</h2>
              <p>
                Cyber liability insurance coverage is a policy that protects a
                company from cyber security issues, like data breaches. A
                comprehensive policy often covers all or a portion of the costs
                associated with an attack, such as:
              </p>
              <ul className="styled-list">
                <li>Lost business income</li>
                <li>
                  Fees associated with notifying customers affected by a data
                  breach
                </li>
                <li>Money spent recovering compromised information</li>
                <li>Repairs to damaged systems</li>
                <li>Litigation expenses</li>
                <li>Crisis management fees</li>
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
                <h2>Our Cyber Insurance Approachh</h2>
              </div>
              <div>
                <p className="mb-0">
                  At Hoffman Hanono, we’ve been helping business owners like you
                  find financial security and peace of mind since 1959. If you
                  need cyber security insurance coverage in California, our
                  agents can help.
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
      relativePath: {
        eq: "open-graph/facebook/CyberLiabilityInsuranceDesktopFB.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/CyberLiabilityInsuranceTwitter.jpg"
      }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/cyber-liability/CyberLiabilityInsuranceDesktop.jpg"
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
        eq: "commercial-insurance/cyber-liability/CyberLiabilityInsuranceMobile.jpg"
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
        eq: "commercial-insurance/cyber-liability/CyberLiabilityInsurancePlusMobile.jpg"
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
