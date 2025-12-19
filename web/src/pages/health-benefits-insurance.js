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
      title: "1. What is health benefits insurance for businesses?",
      body: "Health benefits insurance provides coverage options that help employers offer medical, dental, vision, and life insurance plans to their employees. It supports employee well-being and can help attract and retain top talent while ensuring compliance with applicable laws.",
    },
    {
      title:
        "2. What types of health benefits insurance does Hoffman Hanono offer?",
      body: "Hoffman Hanono offers group medical insurance, HSA plans, group dental, group vision, and group life coverage. Policies are tailored to meet the needs of your business and employees.",
    },
    {
      title:
        "3. Who needs health benefits insurance in Chula Vista and San Diego?",
      body: "Any business owner with employees should consider health benefits insurance. It is especially important for companies that want to provide competitive employee benefits, protect workers' health, and manage risks associated with employee medical costs.",
    },
    {
      title: "4. How does health benefits insurance help employees?",
      body: "Health benefits insurance gives employees access to medical, dental, and vision care, helps cover healthcare costs, and provides life insurance protection. It also ensures they receive financial support for health-related issues and enhances overall workplace satisfaction.",
    },
    {
      title: "5. How does Hoffman Hanono approach health benefits insurance?",
      body: "Hoffman Hanono works with employers to understand their business needs, employee demographics, and budget. They partner with trusted carriers to offer customized insurance solutions that provide the best coverage at competitive premiums.",
    },
    {
      title: "6. Why choose Hoffman Hanono for health benefits insurance?",
      body: "With over 50 years of experience serving the San Diego and Chula Vista communities, Hoffman Hanono is a family-owned, customer-focused agency. Their expertise, personalized service, and access to top carriers make them a trusted partner in securing comprehensive health benefits for your employees.",
    },
    {
      title: "7. How can I get a quote for health benefits insurance?",
      body: "You can request a quote online or contact Hoffman Hanono directly at (619) 420-1861. Their advisors will review your business needs and help you choose the right plan for your employees.",
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
        title="Health Benefits Insurance San Diego | Hoffman Hanono"
        description="Thinking about health benefits insurance in San Diego County? Hoffman Hanono helps you get the right coverage for your business’ needs. Get a free quote!"
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
          <h1>Health Benefits Insurance</h1>
          <p className="mb-0">
            At Hoffman Hanono, we prioritize helping business owners take care
            of their workers. Our health benefits insurance solutions come with
            years of trusted service and deep industry knowledge. For decades,
            we’ve been helping employers find the best plan for their businesses
            and connecting them with top providers.
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
                Hoffman Hanono will deliver the right plan whatever health
                benefits your business needs. Our partner carriers provide the
                following:
              </p>
              <ul className="styled-list">
                <li>Group Medical insurance</li>
                <li>HSA plans</li>
                <li>Group Dental</li>
                <li>Group Vision</li>
                <li>Group Life</li>
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
                <h2>Our Health Benefits Insurance Approach</h2>
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
      relativePath: { eq: "open-graph/facebook/health-benefits-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/health-benefits-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/health-benefits/health-benefits-hero-desktop.jpg"
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
        eq: "commercial-insurance/health-benefits/health-benefits-hero-mobile.jpg"
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
        eq: "commercial-insurance/health-benefits/whats-included.jpg"
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
