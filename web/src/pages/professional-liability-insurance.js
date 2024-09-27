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
        title="Professional Liability Insurance Chula Vista | HH Insurance"
        description="Need professional liabilitiy insurance in Chula Vista? Hoffman Hanono Insurance provides only the best full liability coverage for your business needs!"
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
          <h1> Professional Liability Insurance in Chula Vista & Beyond</h1>
          <p className="mb-0">
            If you own and operate a business in Chula Vista or the greater San
            Diego area, professional liability insurance will protect you if you
            make a mistake in the services you provide to your customer or
            client. It’s designed to shield you against financial losses from
            lawsuits you may face from your customers.
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
                Professional liability insurance can cover you against the
                following types of claims, plus the legal and settlement costs
                associated with them:
              </p>
              <ul className="styled-list">
                <li>
                  Insurance for non-emergency{" "}
                  <a href="https://www.hhinsurance.com/transportation-insurance/">
                    medical transportation
                  </a>{" "}
                  companies
                </li>
                <li>Mistakes or Negligence</li>
                <li>Misrepresentation</li>
                <li>Copyright Infringement</li>
                <li>Breach of Contract</li>
                <li>Failure to Deliver a Promised Service On Timet</li>
                <li>
                  <a href="https://www.hhinsurance.com/health-benefits-insurance/">
                    Personal Injury
                  </a>
                </li>
                <li>And more…</li>
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
                <h2>Our Professional Liability Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  Hoffman Hanono Insurance Services is here to advise and
                  partner with you to ensure you get the right professional
                  liability insurance for your Chula Vista or San Diego-area
                  business. We specialize in finding insurance solutions meant
                  entirely for you—because we know that insurance is not
                  "one-size-fits-all." We provide quality service and resources
                  that will help you secure better insurance premiums in the
                  long run. Our commitment has made us a pillar of the San Diego
                  and Chula Vista insurance community since 1959.
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
        eq: "open-graph/facebook/ProfessionalLiabilityInsuranceFb.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/ProfessionalLiabilityInsuranceTwitter.jpg"
      }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/personal-liability/ProfessionalLiabilityInsuranceDesktop.jpg"
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
        eq: "commercial-insurance/personal-liability/ProfessionalLiabilityInsuranceMobile.jpg"
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
        eq: "commercial-insurance/personal-liability/ProfessionalLiabilityInsuranceDesktopMobile.jpg"
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
