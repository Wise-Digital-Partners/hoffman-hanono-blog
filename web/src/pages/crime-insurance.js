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
  title: "Crime Insurance FAQs",
  faqs: [
    {
      title:
        "1. What is business crime insurance and why do companies need it?",
      body: "Business crime insurance protects your company from financial loss caused by illegal acts such as theft, fraud, forgery, or burglary. Even with careful hiring practices, dishonest behavior can happen unexpectedly, and a single incident can cost thousands of dollars. Crime insurance helps safeguard your business and your employees from the financial impact of criminal activity.",
    },
    {
      title: "2. What does business crime insurance typically cover?",
      body: "This coverage can protect your business against employee theft, fraud, embezzlement, burglary, forgery, cyber fraud, and dishonest acts committed by internal staff or outside third parties. Coverage varies depending on your industry and policy, so working with an insurance advisor ensures your plan fits your business risk.",
    },
    {
      title: "3. Who should consider business crime insurance in California?",
      body: "Any business that handles money, sensitive information, valuable inventory, financial transactions, or employee access to assets should consider crime insurance. It is especially important for retailers, financial service providers, manufacturers, contractors, transportation companies, and professional offices.",
    },
    {
      title:
        "4. Does business crime insurance protect against crimes committed by employees?",
      body: "Yes, many crime insurance policies include coverage for losses caused by employee dishonesty, including embezzlement, internal theft, and fraud. This protection helps businesses recover financially from crimes committed by individuals inside the organization.",
    },
    {
      title:
        "5. Is business crime insurance the same as commercial property insurance?",
      body: "No. Commercial property insurance generally covers physical damage such as fire, vandalism, or weather-related loss. Business crime insurance specifically protects against financial loss caused by criminal acts such as fraud, theft, or embezzlement. Many businesses need both for complete protection.",
    },
    {
      title:
        "6. Why choose Hoffman Hanono Insurance for crime insurance coverage?",
      body: "Hoffman Hanono has provided customized commercial insurance solutions in California since 1959. Their team designs crime insurance policies tailored to your industry, financial risk level, and internal operations. This ensures you receive strong protection at a competitive price backed by decades of trusted service.",
    },
    {
      title: "7. How can I get a quote for business crime insurance?",
      body: "You can request a quote online or contact Hoffman Hanono Insurance at (619) 420-1861 to speak directly with an advisor. They will review your business needs and recommend the right level of crime insurance protection.",
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
        title="Business Crime Insurance | San Diego | Hoffman Hanono"
        description="Looking for crime insurance for your San Diego business? Get a free quote with the experts at Hoffman Hanono Insurance today!"
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
          <h1>Business Crime Insurance Coverage</h1>
          <p>
            What’s a good rule of thumb when it comes to your business? Hope for
            the best, but prepare for the worst. While companies take great care
            in hiring, striving to build teams of trustworthy professionals,
            sometimes a person with malicious intent slips into your
            organization.
          </p>
          <p>
            The best way to protect not only your business but the dedicated
            individuals you have in your employ is by obtaining a comprehensive
            crime insurance plan specific to your company and industry. Here at
            Hoffman Hanono, that’s just what we specialize in – crime insurance
            for businesses that offer protection now and long into the future.
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
              <h2>What Is Crime Insurance?</h2>
              <p>
                Crime insurance is a particular type of insurance policy that
                protects a company from financial loss associated with a
                business-related crime. Policies can cover a range of situations
                but generally offer protection from direct losses that may arise
                from the following:
              </p>
              <ul className="styled-list">
                <li>Fraud</li>
                <li>Embezzlement</li>
                <li>Forgery</li>
                <li>Theft</li>
                <li>Burglary</li>
                <li>Dishonest acts from either employees or third parties</li>
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
                <h2>Our Crime Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  At Hoffman Hanono, we’ve been helping people like you find
                  financial security and peace of mind since 1959. If you need
                  commercial crime insurance or other type of coverage, our
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
      relativePath: { eq: "open-graph/facebook/CrimeInsuranceFB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/CrimeInsuranceTwitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/crime/CrimeInsuranceDesktop.jpg"
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
        eq: "commercial-insurance/crime/CrimeInsuranceMobile.jpg"
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
        eq: "commercial-insurance/crime/CrimeInsurancePlusMobile.jpg"
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
