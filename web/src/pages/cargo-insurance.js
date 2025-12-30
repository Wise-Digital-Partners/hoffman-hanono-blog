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
  title: "Cargo Insurance FAQs",
  faqs: [
    {
      title: "1. What is cargo insurance?",
      body: "Cargo insurance protects businesses from financial losses due to damage, loss, or theft of goods during transportation. It is essential for companies involved in shipping or transporting products.",
    },
    {
      title: "2. Who needs cargo insurance in California?",
      body: "Any business that ships, transports, or delivers goods can benefit from cargo insurance. This includes companies in Chula Vista, San Diego, and throughout the state that want protection against cargo-related risks.",
    },
    {
      title: "3. What does cargo insurance cover?",
      body: "Cargo insurance can cover damage or loss of cargo during transit, theft, pilferage, failure to reach the destination, damage from accidents, natural disasters, bad weather, fire, claim handling costs, and legal expenses related to disputes or lawsuits.",
    },
    {
      title: "4. How does Hoffman Hanono approach cargo insurance?",
      body: "Hoffman Hanono partners with business owners to provide tailored cargo insurance solutions. We assess your transportation risks, connect you with trusted carriers, and help you secure comprehensive coverage with competitive premiums.",
    },
    {
      title: "5. Why choose Hoffman Hanono for cargo insurance in San Diego?",
      body: "With over 50 years of experience, our family-owned agency has earned a reputation for trust, reliability, and superior service. We offer practical insurance solutions to protect your business assets and provide peace of mind.",
    },
    {
      title:
        "6. Is Hoffman Hanono licensed to provide cargo insurance in California?",
      body: "Yes. Our California insurance license number is 0424824, ensuring you work with a fully licensed and compliant insurance provider.",
    },
    {
      title: "7. How can I get a quote for cargo insurance?",
      body: 'You can request a quote on our website by clicking "Get a Quote," or contact our team via phone or email to discuss cargo insurance coverage options tailored to your business.',
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
        title="Cargo Insurance | California | Hoffman Hanono"
        description="Cargo insurance protects shipments while in transit & helps minimize financial loss should anything happen. Learn more here & get a free quote with us today!"
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
          <h1>Cargo Insurance Coverage</h1>
          <p>
            Cargo-related claims are on the rise, and from defense costs to
            awarded damages, a single claim can cost your business thousands of
            dollars. To protect your company, talk to our insurance experts
            about comprehensive cargo coverage.
          </p>
          <p>
            Cargo insurance protects businesses from{" "}
            <a href="https://www.hhinsurance.com/loss-of-income-insurance/">
              financial losses
            </a>{" "}
            resulting from damage, loss, or{" "}
            <a href="https://www.hhinsurance.com/crime-insurance/">
              cargo theft
            </a>{" "}
            during transportation. It is essential for those involved in
            shipping goods, as a single cargo claim can lead to significant
            financial burdens. Policies vary, so talk to our experts at Hoffman
            Hanono to find the best option for your needs.
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
              <h2>What Does Cargo Insurance Cover?</h2>
              <p>
                While the exact type of coverage offered can vary between
                policies, cargo insurance typically covers a range of risks and
                damages associated with the transportation of goods, including:
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
                <h2>Our Crime Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  At Hoffman Hanono, we’ve been helping business owners like you
                  find financial security and peace of mind since 1959. If you
                  need cargo insurance coverage in California, our agents can
                  help.
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
      relativePath: { eq: "open-graph/facebook/CargoInsuranceFB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/CargoInsuranceTwitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/cargo/CargoInsuranceDesktop.jpg"
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
        eq: "commercial-insurance/cargo/CargoInsuranceMobile.jpg"
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
        eq: "commercial-insurance/cargo/CargoInsurancePlusMobile.jpg"
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
