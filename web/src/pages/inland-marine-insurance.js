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
        "1. What is inland marine insurance coverage and why do businesses need it?",
      body: "Inland marine insurance protects your business from financial losses caused by damage, loss, or theft of goods while they are being transported. A single cargo claim can cost thousands of dollars, so this coverage helps prevent major financial setbacks.",
    },
    {
      title: "2. What does inland marine insurance typically cover?",
      body: "This type of policy can cover damage from collisions or overturns, theft or pilferage, loss during transportation, weather or natural disasters, fire damage to cargo, and legal expenses related to disputes over damaged or lost goods. Coverage varies by policy, so working with an expert ensures your business is fully protected.",
    },
    {
      title: "3. Who needs inland marine insurance in California?",
      body: "Businesses that transport goods, equipment, or supplies should consider this coverage. It is especially important for shipping companies, contractors, distributors, manufacturers, retailers, and any business that moves goods off-site or between locations.",
    },
    {
      title:
        "4. How is inland marine insurance different from cargo insurance?",
      body: "Cargo insurance primarily covers goods transported by sea, while inland marine insurance protects goods moved on land. Inland marine insurance often covers more types of goods and equipment and applies to trucks, trains, and other land transportation.",
    },
    {
      title:
        "5. Does inland marine insurance cover goods stored temporarily during transport?",
      body: "Yes, many policies protect goods while they are temporarily stored during the shipping process. This protection is especially useful if items need to be held at a warehouse or facility before reaching their final destination.",
    },
    {
      title:
        "6. Why choose Hoffman Hanono Insurance for inland marine coverage?",
      body: "Hoffman Hanono has provided customized commercial insurance solutions in California since 1959. Their advisors tailor inland marine coverage to match your cargo value, transportation risks, and business operations, ensuring you get strong protection at a competitive price.",
    },
    {
      title: "7. How can I get a quote for inland marine insurance?",
      body: "You can request a quote online or contact Hoffman Hanono Insurance at (619) 420-1861. Their team will evaluate your transportation needs and recommend the best inland marine policy for your business.",
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
        title="Inland Marine Insurance | Hoffman Hanono Insurance"
        description="Inland marine insurance protects business property in transit or stored off site. Get a free quote with the experts at Hoffman Hanono Insurance today!"
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
          <h1>Inland Marine Insurance Coverage</h1>
          <p>
            Inland marine claims are on the rise, and from defense costs to
            awarded damages, a single claim can cost your business thousands of
            dollars. To protect your company, talk to our insurance experts
            about comprehensive inland marine insurance.
          </p>
          <p>
            Inland marine insurance coverage protects businesses from financial
            losses resulting from damage, loss, or{" "}
            <a href="https://www.hhinsurance.com/cargo-insurance/">
              cargo theft
            </a>{" "}
            during transportation. It is essential for those involved in
            shipping goods, as a single claim can lead to significant financial
            burdens. Policies vary, so talk to our experts at Hoffman Hanono to
            find the best option for your needs.
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
              <h2>What Does Inland Marine Insurance Cover?</h2>
              <p>
                While the exact type of coverage offered can vary between
                policies, inland marine insurance coverage typically covers a
                range of risks and damages associated with the transportation of
                goods, including:
              </p>
              <ul className="styled-list">
                <li>Damage or loss of cargo during transportation</li>
                <li>Theft, pilferage, or cargo not reaching its destination</li>
                <li>Damage from accidents like collisions or overturns</li>
                <li>Damage from natural disasters or bad weather</li>
                <li>Fire damage to the cargo</li>
                <li>Costs for handling cargo claims</li>
                <li>
                  Legal expenses for disputes or lawsuits related to cargo
                  damage or loss
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
                <h2>Our Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  At Hoffman Hanono, we’ve been helping business owners like you
                  find financial security and peace of mind since 1959. If you
                  need inland marine insurance coverage in California, our
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
      relativePath: { eq: "open-graph/facebook/inland-marine-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/inland-marine-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/inland-marine-insurance/inland-hero-desktop.jpg"
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
        eq: "commercial-insurance/inland-marine-insurance/inland-hero-mobile.jpg"
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
        eq: "commercial-insurance/inland-marine-insurance/whats-included.jpg"
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
