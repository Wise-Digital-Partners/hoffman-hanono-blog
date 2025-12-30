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
  title: "Landlord Insurance FAQs",
  faqs: [
    {
      title: "1. What is landlord insurance?",
      body: "Landlord insurance protects property owners from financial losses related to their rental properties. This includes risks such as theft, vandalism, water damage, and other unexpected events that can affect both the building and the personal property inside it.",
    },
    {
      title: "2. What does landlord insurance cover?",
      body: "Coverage generally includes protection for the building itself, liability in case a tenant or visitor is injured on the property, and personal property used to service the rental. Many policies also cover additional living expenses if the property becomes uninhabitable due to a covered loss. Specific coverage options vary by policy, and a qualified agent can help you determine the right combination for your property.",
    },
    {
      title: "3. Who needs landlord insurance?",
      body: "Any property owner who rents out a home, apartment, or other dwelling should have landlord insurance. Even well-maintained properties are vulnerable to accidents, natural disasters, or tenant-related damages. Insurance helps protect both your investment and your financial stability.",
    },
    {
      title: "4. How do I choose the right landlord insurance policy?",
      body: "Selecting the right policy depends on the size and type of your rental property, the location, and your personal risk tolerance. Consider what coverage is essential for your property, including liability and personal property protection. Experienced agents can customize a policy that balances cost with the level of protection needed.",
    },
    {
      title:
        "5. Why choose Hoffman Hanono for landlord insurance in San Diego?",
      body: "Hoffman Hanono has been serving San Diego and Chula Vista since 1959, offering personalized insurance solutions for landlords. Their family-owned, customer-focused approach ensures that each property owner receives tailored coverage and support. With trusted carriers and decades of experience, they provide comprehensive insurance that safeguards your investment and offers peace of mind.",
    },
    {
      title: "6. How can I get a quote for landlord insurance?",
      body: "You can request a quote online, by calling (619) 420-1861, or by emailing info@hhinsurance.com. Hoffman Hanono's agents will guide you through the policy selection process and recommend the best coverage for your specific rental property.",
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
        title="Landlord & Rental Property Insurance | Hoffman Hanono"
        description="Need landlord & rental property insurance in San Diego County? Hoffman Hanono will connect you with the right coverage for your needs. Get a free quote!"
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
          <h1>Landlord Insurance San Diego</h1>
          <p className="mb-0">
            If you’re a landlord, getting insurance is a must. Any place is
            vulnerable to theft, vandalism, water damage, and a host of
            potential peril. At Hoffman Hanono, we provide first-class customer
            service to landlords like you who need coverage for their rental
            property. We pair you with the right policy and make it easy to
            prepare for unexpected events.
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
                Getting insurance for your property shouldn’t be a hassle, and
                with Hoffman Hanono your peace of mind and satisfaction is our
                business. Our partner carriers provide the following:
              </p>
              <ul className="styled-list">
                <li>Liability</li>
                <li>Personal Property</li>
                <li>Additional Living Expenses</li>
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
                <h2>Our Rental Property Insurance Approach</h2>
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
      relativePath: { eq: "open-graph/facebook/renters-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/renters-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "personal-insurance/rental-insurance/renters-hero-desktop.jpg"
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
        eq: "personal-insurance/rental-insurance/renters-hero-mobile.jpg"
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
        eq: "personal-insurance/rental-insurance/whats-included.jpg"
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
