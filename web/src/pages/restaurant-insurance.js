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
  title: "Restaurant Insurance FAQs",
  faqs: [
    {
      title: "1. What is restaurant insurance?",
      body: "Restaurant insurance is a specialized policy designed to protect restaurants from financial losses due to property damage, liability claims, employee dishonesty, and other risks unique to the food service industry.",
    },
    {
      title: "2. Who needs restaurant insurance in San Diego?",
      body: "Any restaurant owner, whether running a small café or a large dining establishment in Chula Vista or the greater San Diego area, should have restaurant insurance to safeguard their business operations, property, and employees.",
    },
    {
      title: "3. What does restaurant insurance cover?",
      body: "Restaurant insurance can cover property and building damage, liability and excess coverage, equipment breakdown, liquor liability, food spoilage or contamination, employee dishonesty, money on and off premises, loss of business income, earthquake sprinkler leakage, and non-owned auto liability for delivery drivers.",
    },
    {
      title: "4. How does Hoffman Hanono approach restaurant insurance?",
      body: "Hoffman Hanono works closely with restaurant owners to evaluate their unique risks and connect them with the most appropriate coverage. We partner with trusted insurance carriers to create tailored policies that provide comprehensive protection and competitive premiums.",
    },
    {
      title:
        "5. Why choose Hoffman Hanono for restaurant insurance in Chula Vista?",
      body: "With over 50 years of experience, our family-owned agency provides personalized service and expert guidance. We focus on quality coverage, reliable customer support, and peace of mind for restaurant owners throughout San Diego.",
    },
    {
      title:
        "6. Is Hoffman Hanono licensed to provide restaurant insurance in California?",
      body: "Yes. Hoffman Hanono is fully licensed in California with license number 0424824, ensuring professional and compliant insurance services for your restaurant.",
    },
    {
      title: "7. How can I get a quote for restaurant insurance?",
      body: 'You can request a quote directly on our website by clicking "Get a Quote" or contact our team by phone or email to discuss customized restaurant insurance options that fit your business needs.',
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
        title="Restaurant Insurance San Diego | Hoffman Hanono"
        description="If you need restaurant insurance in San Diego County, look no further. Hoffman Hanono gets you the right coverage for your needs. Get a free quote!"
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
          <h1>Restaurant Insurance</h1>
          <p className="mb-0">
            Restaurants face unique risks including food poisoning, injuries,
            <a href="https://www.hhinsurance.com/loss-of-income-insurance/">
              loss of business income
            </a>
            , and many others. Hoffman Hanono’s restaurant insurance solutions
            will help you find the most comprehensive coverage for your
            business. No matter the size of your restaurant, we’ll match you
            with the best policies to ensure your business runs smoothly.
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
                Keep the kitchen open and the culinary goods going with
                restaurant insurance. Our partner carriers provide the
                following:
              </p>
              <ul className="styled-list">
                <li>Property coverage</li>
                <li>Building coverage</li>
                <li>Liability and excess insurance </li>
                <li>Equipment breakdown coverage</li>
                <li>Liquor liability coverage</li>
                <li>Food spoilage</li>
                <li>Food contamination</li>
                <li>Employee dishonesty </li>
                <li>Money on and off premises</li>
                <li>Loss of business income</li>
                <li>Earthquake sprinkler leakage </li>
                <li>Non-owned auto liability for delivery drivers</li>
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
                <h2>Our Restaurant Insurance Approach</h2>
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
      relativePath: { eq: "open-graph/facebook/restaurants-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/restaurants-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/restaurants/restaurants-hero-desktop.jpg"
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
        eq: "commercial-insurance/restaurants/restaurants-hero-mobile.jpg"
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
        eq: "commercial-insurance/restaurants/whats-included.jpg"
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
