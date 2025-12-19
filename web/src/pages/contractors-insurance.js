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
  title: "Frequently Asked Questions",
  faqs: [
    {
      title: "1. What is contractors insurance?",
      body: "Contractors insurance provides coverage for contractors, subcontractors, and tradesmen such as carpenters, plumbers, painters, handymen, landscapers, and other professionals. It helps minimize risk and liability while protecting your business and assets.",
    },
    {
      title: "2. Who needs contractors insurance in California?",
      body: "Any contractor, subcontractor, or trade professional working in California can benefit from contractors insurance. It is especially important for those managing projects, handling equipment, or providing services on client sites.",
    },
    {
      title: "3. What does contractors insurance typically cover?",
      body: "Policies can cover general liability and excess, property in transit, scheduled equipment and tools, equipment leased or rented to others, professional liability, pollution liability, employee dishonesty coverage, waiver of subrogation, additional insured endorsements, bid and performance bonds, per-project aggregate coverage, and new residential construction projects.",
    },
    {
      title: "4. How does Hoffman Hanono approach contractors insurance?",
      body: "Hoffman Hanono partners with clients to provide personalized insurance solutions. We match your business with trusted carriers and create policies tailored to your specific needs. Our team also helps you secure competitive premiums and comprehensive protection.",
    },
    {
      title:
        "5. Why choose Hoffman Hanono for contractors insurance in San Diego?",
      body: "With over 50 years of experience, our family-owned agency has earned the trust of San Diego and Chula Vista contractors. We provide superior service, practical insurance solutions, and policies specifically customized for your industry.",
    },
    {
      title:
        "6. Is Hoffman Hanono licensed to provide contractors insurance in California?",
      body: "Yes. Our California insurance license number is 0424824, ensuring you work with a fully licensed and compliant provider.",
    },
    {
      title: "7. How can I get a quote for contractors insurance?",
      body: 'You can request a quote directly on our website by clicking "Get a Quote", or contact our team via phone or email to discuss insurance solutions tailored to your contracting business.',
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
        title="Contractors Insurance San Diego | Hoffman Hanono"
        description="Need manufacturer's insurance in San Diego County? Hoffman Hanono connects you with the right coverage for your business’ needs. Get a free quote!"
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
          <h1>Contractors Insurance</h1>
          <p className="mb-0">
            Having insurance is crucial for contractors, subcontractors, and
            other tradesmen such as carpenters, plumbers, painters, handymen,
            landscapers, and more. Our{" "}
            <a href="https://www.hhinsurance.com/our-team/">expert team</a> at
            Hoffman Hanono will match you with the right coverage for your
            industry. Minimize risk and liability with our contractors insurance
            products.
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
                At Hoffman Hanono, we pair you with trusted insurance providers
                and the right policy for your needs. Our partner carriers
                provide the following:
              </p>
              <ul className="styled-list">
                <li>General Liability and Excess</li>
                <li>Property in Transit </li>
                <li>Scheduled equipment and tools</li>
                <li>Equipment leased or rented to others</li>
                <li>Professional Liability</li>
                <li>Pollution Liability</li>
                <li>Employee Dishonesty Coverage</li>
                <li>Waiver of Subrogation and primary wording</li>
                <li>Blanket additional insured endorsement </li>
                <li>Bid bonds and performance bonds</li>
                <li>Per-project aggregate </li>
                <li>New residential construction available </li>
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
                <h2>Our Contractors Insurance Approach</h2>
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
      relativePath: { eq: "open-graph/facebook/contractors-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/contractors-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/contractors/contractors-hero-desktop.jpg"
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
        eq: "commercial-insurance/contractors/contractors-hero-mobile.jpg"
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
        eq: "commercial-insurance/contractors/whats-included.jpg"
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
