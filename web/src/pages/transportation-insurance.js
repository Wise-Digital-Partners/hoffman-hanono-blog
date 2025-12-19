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
      title: "1. What is transportation insurance?",
      body: "Transportation insurance protects your business from risks related to vehicles, drivers, and transported goods. It covers liabilities and potential losses while operating a commercial fleet, including non-emergency medical transportation services.",
    },
    {
      title: "2. Who needs transportation insurance in San Diego?",
      body: "Any business that operates a fleet of vehicles, including non-emergency medical transportation companies, delivery services, or commercial transportation providers, needs transportation insurance to protect assets and minimize liability.",
    },
    {
      title: "3. What does transportation insurance cover?",
      body: "Transportation insurance can cover general liability and excess, professional liability, vehicles and drivers, wheelchair accessible vehicles, and optional blanket additional insured endorsements, depending on your business needs.",
    },
    {
      title: "4. How does Hoffman Hanono approach transportation insurance?",
      body: "Hoffman Hanono partners with business owners to assess risks and connect them with trusted carriers. We provide tailored transportation insurance solutions designed specifically for your fleet and operational requirements.",
    },
    {
      title:
        "5. Why choose Hoffman Hanono for transportation insurance in Chula Vista?",
      body: "With over 50 years of experience, our family-owned agency delivers reliable service and practical solutions. We focus on securing comprehensive coverage with competitive premiums while providing peace of mind for your business.",
    },
    {
      title:
        "6. Is Hoffman Hanono licensed to provide transportation insurance in California?",
      body: "Yes. Hoffman Hanono is a fully licensed insurance provider in California, with license number 0424824, ensuring compliance and trustworthy service.",
    },
    {
      title: "7. How can I get a quote for transportation insurance?",
      body: 'You can request a quote on our website by clicking "Get a Quote" or contact our team via phone or email to discuss coverage options tailored to your business.',
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
        title="Transportation Insurance San Diego | Hoffman Hanono"
        description="Need transportation insurance in San Diego County? Hoffman Hanono brings you the right coverage for your business’ needs. Get a free quote today!"
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
          <h1>Transportation Insurance</h1>
          <p className="mb-0">
            There’s always potential danger when traveling on the road and even
            up in the air. For high risk needs such as transportation, you need
            an insurer with years of experience, comprehensive insurance
            options, and deep industry knowledge. At Hoffman Hanono, we connect
            you with the best transportation insurance provider to make sure
            your fleet is ready for anything.
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
                Protect your drivers, vehicles, and goods with insurance
                specific to your transportation business. Our partner carriers
                provide the following:
              </p>
              <ul className="styled-list">
                <li>
                  Insurance for non-emergency medical transportation companies
                </li>
                <li>Wheelchair accessible vehicles are acceptable </li>
                <li>Blanket Additional insured endorsement available</li>
                <li>
                  <a href="https://www.hhinsurance.com/general-liability-insurance/">
                    General liability
                  </a>{" "}
                  and excess
                </li>
                <li>
                  <a href="https://www.hhinsurance.com/professional-liability-insurance/">
                    Professional Liability
                  </a>{" "}
                  coverage
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
                <h2>Our Transportation Insurance Approach</h2>
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
      relativePath: {
        eq: "open-graph/facebook/transportation-insurance-FB.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/transportation-insurance-twitter.jpg"
      }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/transportation/transportation-hero-desktop.jpg"
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
        eq: "commercial-insurance/transportation/transportation-hero-mobile.jpg"
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
        eq: "commercial-insurance/transportation/whats-included.jpg"
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
