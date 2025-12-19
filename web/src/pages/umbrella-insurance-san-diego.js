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
      title: "1. What is umbrella insurance?",
      body: "Umbrella insurance is a type of policy that provides additional coverage when the limits of your existing insurance, such as home or auto, are reached. It helps protect your personal or business assets from unexpected accidents, lawsuits, or liabilities that could otherwise exceed your primary coverage limits.",
    },
    {
      title: "2. What does umbrella insurance cover?",
      body: "Umbrella insurance typically covers liabilities that arise from bodily injury, personal injury, property damage, and even landlord-related claims. It can step in when other insurance policies fall short, offering broader protection for both everyday risks and extraordinary events. Coverage varies by policy, and an experienced agent can help determine the right level of protection for your needs.",
    },
    {
      title: "3. Who needs umbrella insurance?",
      body: "Any individual or business that wants additional financial protection beyond standard insurance policies can benefit from an umbrella policy. It is particularly important for those with significant assets or exposure to potential lawsuits, including homeowners, drivers, and landlords.",
    },
    {
      title: "4. How do I choose the right umbrella insurance policy?",
      body: "Choosing the right umbrella policy depends on your current coverage, financial situation, and risk exposure. Working with a knowledgeable agent ensures your policy complements your existing insurance and provides the necessary protection without unnecessary gaps or overlaps.",
    },
    {
      title: "5. Why choose Hoffman Hanono for umbrella insurance?",
      body: "Hoffman Hanono has been serving the San Diego and Chula Vista communities since 1959, providing personalized insurance solutions that go beyond standard coverage. As a family-owned and customer-focused agency, they take the time to understand your unique needs and match you with the most suitable umbrella insurance to safeguard your assets and provide peace of mind.",
    },
    {
      title: "6. How can I get a quote for umbrella insurance?",
      body: "You can request a quote online, by calling (619) 420-1861, or by emailing info@hhinsurance.com. Hoffman Hanono's agents will guide you through the process, ensuring you receive comprehensive coverage tailored to your specific situation.",
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
        title="Umbrella Insurance San Diego | Hoffman Hanono"
        description="Exploring umbrella insurance in San Diego County? Hoffman Hanono will connect you with the right coverage for your needs. Get a free quote today!"
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
          <h1>Umbrella Insurance</h1>
          <p className="mb-0">
            Go beyond coverage with an umbrella insurance from Hoffman Hanono.
            Get the coverage you need when you reach the limits of your existing
            insurance. Because accidents and other liabilities can happen to
            anyone, an umbrella insurance policy is a must and we’ll help you
            find the best one.
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
                For the ultimate coverage, we help you find an umbrella
                insurance policy tailored to your needs. Our partner carriers
                provide the following:
              </p>
              <ul className="styled-list">
                <li>Bodily Injury</li>
                <li>Personal Injury</li>
                <li>Property Damage</li>
                <li>Landlord Liability</li>
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
                <h2>Our Umbrella Insurance Approach</h2>
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
      relativePath: { eq: "open-graph/facebook/umbrella-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/umbrella-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "personal-insurance/umbrella-insurance/umbrella-hero-desktop.jpg"
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
        eq: "personal-insurance/umbrella-insurance/umbrella-hero-mobile.jpg"
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
        eq: "personal-insurance/umbrella-insurance/whats-included.jpg"
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
