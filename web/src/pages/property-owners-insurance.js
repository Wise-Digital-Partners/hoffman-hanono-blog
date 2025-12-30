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
import FaqSection from "../components/Repeating/FaqSection";

const faqGroup = {
  title: "Property Owners Insurance FAQs",
  faqs: [
    {
      title: "1. What is property owners insurance?",
      body: "Property owners insurance is a policy designed to protect property owners from financial losses due to damage, theft, or liability claims. It covers buildings, structures, and the property surrounding them, providing peace of mind for landlords and investors.",
    },
    {
      title: "2. Who needs property owners insurance in San Diego?",
      body: "Any property owner in Chula Vista or the greater San Diego area should consider property owners insurance to safeguard their investments. This includes residential landlords, commercial property owners, and those who manage rental properties.",
    },
    {
      title: "3. What does property owners insurance cover?",
      body: "Property owners insurance can cover building damage, loss of rental income, earthquake sprinkler leakage, outdoor signs, glass damage, building ordinance or law requirements, non-owned auto liability, general liability, water damage, and sewer back-up. Policies can be tailored to the unique needs of each property owner.",
    },
    {
      title: "4. How does Hoffman Hanono approach property owners insurance?",
      body: "Hoffman Hanono works closely with property owners to assess their insurance needs and match them with the right policy. We partner with trusted carriers to provide customized coverage options that protect property and reduce financial risk.",
    },
    {
      title:
        "5. Why choose Hoffman Hanono for property owners insurance in Chula Vista?",
      body: "With over 50 years of experience, Hoffman Hanono is a family-owned, customer-focused agency. We provide quality service, expert guidance, and reliable insurance solutions that give property owners confidence and peace of mind.",
    },
    {
      title:
        "6. Is Hoffman Hanono licensed to provide property owners insurance in California?",
      body: "Yes, Hoffman Hanono is fully licensed in California under license number 0424824, ensuring professional, compliant, and trustworthy insurance services for property owners.",
    },
    {
      title: "7. How can I get a quote for property owners insurance?",
      body: 'You can request a quote on our website by clicking "Get a Quote" or contact our team by phone or email. Our experts will help you find the best policy to protect your property at competitive rates.',
    },
  ],
};

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
        title="Property Owners Insurance San Diego | Hoffman Hanono"
        description="Looking for property owners insurance in San Diego County? Hoffman Hanono helps you get the right coverage for your business’ needs. Get a free quote!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroSplit
        images={heroImages}
        position="50% 50%"
        maxHeightDesktop="618px"
        maxHeightMobile="450px"
      >
        <div className="max-w-2xl">
          <h1>Property Owners Insurance</h1>
          <p className="mb-0">
            Looking for property owners insurance just got easier. Hoffman
            Hanono matches property owners in Chula Vista and throughout San
            Diego county with the right policy at the best rates. Expect stellar
            customer service and industry expertise you can rely on. Protect
            your property from peril and loss with our insurance solutions.
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
              <h2>The Best Premiums for Your Needs</h2>
              <p>
                At Hoffman Hanono, we work closely with property owners to
                evaluate their insurance needs and pair them with the right
                policy at competitive rates. Our partner carriers provide the
                following:
              </p>
              <ul className="styled-list">
                <li>
                  <a href="https://www.hhinsurance.com/building-insurance/">
                    Building Coverage
                  </a>
                </li>
                <li>
                  <a href="https://www.hhinsurance.com/loss-of-income-insurance/">
                    Loss of Rental Income
                  </a>
                </li>
                <li>
                  <a href="https://www.hhinsurance.com/earthquake-insurance/">
                    Earthquake Sprinkler Leakage
                  </a>
                </li>
                <li>Outdoor Signs</li>
                <li>Glass Coverage</li>
                <li>Building Ordinance or Law</li>
                <li>Non-Owned Auto Liability Coverage</li>
                <li>Liability Coverage</li>
                <li>Water Damage </li>
                <li>Sewer Back-Up</li>
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
                <h2>Our Property Owners Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  Whether you are managing risk for business or personal assets,
                  Hoffman Hanono Insurance Services is here to advise and
                  partner with you to find insurance solutions that are meant
                  entirely for you. After all, insurance isn’t
                  “one-size-fits-all.” We’ll only place you where you belong.
                  Not only that, but we provide quality service and resources
                  that will help you secure better insurance premiums in the
                  long run. This commitment reveals why we've been a pillar of
                  the San Diego and Chula Vista insurance community since 1959.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <WhyUs />
      <SliderTestimonials />
      <FaqSection faqGroup={faqGroup} isHardcoded={true} />
      <About />
      <CallToAction />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/property-owners-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/property-owners-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/property-owners/property-owners-hero-desktop.jpg"
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
        eq: "commercial-insurance/property-owners/property-owners-hero-mobile.jpg"
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
        eq: "commercial-insurance/property-owners/whats-included.jpg"
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
