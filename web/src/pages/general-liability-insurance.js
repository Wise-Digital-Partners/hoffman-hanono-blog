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
      title: "1. What is general liability insurance?",
      body: "General liability insurance is a policy designed to protect businesses from financial losses due to claims of bodily injury, property damage, advertising injuries, or reputational harm. It is essential for businesses of all sizes in Chula Vista and the greater San Diego area.",
    },
    {
      title: "2. Who needs general liability insurance?",
      body: "Any business owner, contractor, or service provider operating in Chula Vista or San Diego should have general liability insurance. It safeguards against claims arising from accidents on your premises, damage caused by employees, or other unforeseen incidents that could lead to financial liability.",
    },
    {
      title: "3. What does general liability insurance cover?",
      body: "This insurance covers bodily injury, property damage, advertising injuries, reputational harm, and damage to premises you are renting for your business. Policies can be customized to meet the specific risks of your industry and business operations.",
    },
    {
      title: "4. How does Hoffman Hanono approach general liability insurance?",
      body: "Hoffman Hanono Insurance Services evaluates your business needs and partners you with the right insurance solutions. We specialize in providing policies tailored to your business rather than a one-size-fits-all approach, helping you secure the coverage you need at competitive rates.",
    },
    {
      title:
        "5. Why choose Hoffman Hanono for general liability insurance in Chula Vista?",
      body: "With over 50 years of experience, Hoffman Hanono is a family-owned, customer-focused agency. We provide expert guidance, reliable service, and customized insurance solutions that protect your business and give you peace of mind.",
    },
    {
      title:
        "6. Is Hoffman Hanono licensed to provide insurance in California?",
      body: "Yes, Hoffman Hanono is fully licensed in California under license number 0424824, ensuring professional and compliant insurance services for businesses throughout the region.",
    },
    {
      title: "7. How can I get a quote for general liability insurance?",
      body: 'You can request a quote on our website by clicking "Get a Quote" or contact our team by phone or email. Our experts will guide you in finding the right policy to protect your business and mitigate potential risks.',
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
        title="Manufacturer's Insurance San Diego | Hoffman Hanono"
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
          <h1>General Liability Insurance in Chula Vista & Beyond</h1>
          <p className="mb-0">
            Protect your Chula Vista or greater San Diego-area business from the
            types of claims that may arise during your normal operations, such
            as property damage or physical injury. Without general liability
            insurance, you could end up having to pay for someone’s medical
            expenses, or property damage, out of pocket.
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
                General liability insurance is important coverage to have when
                you own a business. It can cover you in the event someone
                injures themselves in your place of business, for example, or if
                your employees damage a customer’s property. It can even cover
                claims such as copyright infringement or slander. Here are the
                types of claims it can protect you from:
              </p>
              <ul className="styled-list">
                <li>Bodily Injury</li>
                <li>Property Damage</li>
                <li>Advertising Injuries</li>
                <li>Reputational Harm</li>
                <li>Damage to Premises You’re Renting for Your Business</li>
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
                <h2>Our General Liability Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  Hoffman Hanono Insurance Services is here to advise and
                  partner with you to ensure you get the right general liability
                  insurance for your Chula Vista or San Diego business. We
                  specialize in finding insurance solutions meant entirely for
                  you—because we know that insurance is not "one-size-fits-all."
                  We provide quality service and resources that will help you
                  secure better insurance premiums in the long run. Our
                  commitment has made us a pillar of the San Diego and Chula
                  Vista insurance community since 1959.
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
        eq: "open-graph/facebook/general-liability-insurance_fb.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/general-liability-insurance_twitter.jpg"
      }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/general-liability/1.0-general-liability-insurance-hero_desktop.jpg"
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
        eq: "commercial-insurance/general-liability/1.1-general-liability-insurance_mobile.jpg"
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
        eq: "commercial-insurance/general-liability/2.0-general-liability-insurance-premiums_desktop-mobile.jpg"
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
