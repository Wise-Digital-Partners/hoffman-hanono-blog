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
      title:
        "1. What is errors and omissions insurance and why do businesses need it?",
      body: "Errors and omissions insurance protects your business if a client claims you made a mistake or gave bad advice. It helps cover legal defense costs and damages, which can save your company thousands of dollars and protect your reputation.",
    },
    {
      title: "2. What types of claims does E&O insurance cover?",
      body: "E&O insurance can cover professional mistakes, negligence, misrepresentation, copyright issues, breach of contract, delays in delivering work, and personal injury related to advice or services. Coverage varies by policy, which is why speaking with an agent can help you choose the right protection.",
    },
    {
      title: "3. Who needs errors and omissions insurance in California?",
      body: "Businesses that provide advice or professional services need E&O coverage. This includes industries such as financial services, consulting, real estate, information technology, and other service-based professions. Small and mid-sized companies often need this coverage most because one lawsuit can have a major financial impact.",
    },
    {
      title:
        "4. How is E&O insurance different from general liability insurance?",
      body: "General liability covers physical injuries or property damage, but it does not protect against financial losses caused by professional mistakes. E&O insurance fills that gap by protecting against service-based errors, incorrect advice, and missed deadlines.",
    },
    {
      title: "5. Why choose Hoffman Hanono Insurance for E&O coverage?",
      body: "Hoffman Hanono has been helping California businesses secure professional insurance since 1959. They tailor errors and omissions insurance based on your industry, risks, and budget, providing competitive rates and long-term peace of mind.",
    },
    {
      title:
        "6. Can Hoffman Hanono customize E&O insurance for my business needs?",
      body: "Yes, their team reviews your industry, exposure, and risk level to recommend a policy that fits your operations. This customized approach helps you avoid paying for unnecessary coverage while still protecting your business from claims.",
    },
    {
      title: "7. How do I get an errors and omissions insurance quote?",
      body: "You can request a quote online or contact Hoffman Hanono Insurance at (619) 420-1861. Their licensed advisors will review your business and provide options that fit your needs and budget.",
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
        title="Errors and Omissions Insurance | Hoffman Hanono"
        description="Errors and omissions insurance provides protection for your services and helps safeguard your business from claims of negligent acts. Get a free quote today!"
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
          <h1>Errors and Omissions Insurance (E&O)</h1>
          <p>
            Errors and omissions claims are on the rise, and from defense costs
            to awarded damages, a single claim can cost your business thousands
            of dollars. Talk to our insurance experts about comprehensive errors
            & omissions insurance to protect your company.
          </p>
          <p>
            Error and omission insurance protects businesses—particularly those
            in service and advice-oriented industries like financial services,
            consulting, real estate, information technology, and more. When a
            client sues a business for negligence, E&O insurance kicks in to
            cover defense costs, and if the business is found liable, the
            insurance can help pay for damages awarded to the client. This
            protection is essential, especially for small and mid-sized
            businesses. Policies vary, so talk to our experts at Hoffman Hanono
            to find the best option for your needs.
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
              <h2>What Does Errors & Omissions Insurance Cover?</h2>
              <p>
                While the exact type of coverage offered can vary between
                policies, error and omission insurance typically covers a range
                of risks and damages associated with professional advice or
                services. This insurance may cover you against the following
                claims:
              </p>
              <ul className="styled-list">
                <li>Mistakes or Negligence</li>
                <li>Misrepresentation</li>
                <li>Copyright Infringement</li>
                <li>Breach of Contract</li>
                <li>Failure to Deliver a Promised Service On Time</li>
                <li>Personal Injury</li>
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
                <h2>Our Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  At Hoffman Hanono, we’ve been helping business owners like you
                  find financial security and peace of mind since 1959. If you
                  need error and omission insurance in California, our agents
                  can help.
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
      relativePath: {
        eq: "open-graph/facebook/errors-omissions-insurance-FB.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/errors-omissions-insurance-twitter.jpg"
      }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/error-omissions/1.0 Errors & Omissions Insurance_Desktop.jpg"
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
        eq: "commercial-insurance/error-omissions/1.1 Errors & Omissions Insurance_Mobile.jpg"
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
        eq: "commercial-insurance/error-omissions/2.0 Errors & Omissions Insurance_Desktop + Mobile.jpg"
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
