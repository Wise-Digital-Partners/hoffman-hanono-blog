import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroAlignEnd from "../components/Hero/HeroAlignEnd";
import ButtonSolid from "../components/Button/ButtonSolid";
// import ButtonGhost from "../components/Button/ButtonGhost"
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
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
        "1. WHAT TYPES OF INSURANCE DOES HOFFMAN HANONO OFFER IN SAN DIEGO?",
      body: "Hoffman Hanono Insurance Services provides commercial insurance for businesses and personal insurance to protect families and assets throughout San Diego County.",
    },
    {
      title: "2. WHERE IS HOFFMAN HANONO INSURANCE SERVICES LOCATED?",
      body: "Our main office is in Chula Vista, CA, serving clients from Chula Vista to San Diego’s North County with trusted, family-owned insurance services.",
    },
    {
      title: "3. HOW LONG HAS HOFFMAN HANONO BEEN SERVING SAN DIEGO?",
      body: "We have been a trusted San Diego insurance agency since 1959, offering over 50 years of experience in providing commercial and personal insurance solutions.",
    },
    {
      title:
        "4. WHY CHOOSE HOFFMAN HANONO FOR COMMERCIAL OR PERSONAL INSURANCE?",
      body: "Our clients trust us for generations due to our superior customer service, practical insurance solutions, and time-tested approach. We focus on providing peace of mind with the right coverage at competitive rates.",
    },
    {
      title: "5. CAN HOFFMAN HANONO HELP ME FIND THE BEST INSURANCE PREMIUMS?",
      body: "Yes. Our experienced team specializes in finding the best insurance coverage and premiums for businesses and families across San Diego County.",
    },
    {
      title: "6. HOW DO I GET A QUOTE FOR INSURANCE IN SAN DIEGO?",
      body: "Getting a San Diego insurance quote is easy. Click “Get a Quote” on our website or contact us via phone or email to speak with our team.",
    },
    {
      title: "7. IS HOFFMAN HANONO LICENSED IN CALIFORNIA?",
      body: "Yes. Our California insurance license number is 0424824, ensuring you work with a fully licensed and compliant agency.",
    },
    {
      title: "8. WHAT TYPES OF SERVICE CAN I EXPECT FROM HOFFMAN HANONO?",
      body: "We provide all lines of insurance with a focus on reliable customer service, comprehensive coverage, and tailor-made insurance solutions for businesses and families in San Diego.",
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
        title="Commercial Insurance Agency Chula Vista | Hoffman Hanono"
        description="Hoffman Hanono Insurance Services connects you with commercial & personal insurance in Chula Vista & throughout San Diego. Get a free quote from our agency!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroAlignEnd
        images={heroImages}
        position="50% 50%"
        maxHeightDesktop="600px"
        maxHeightMobile="580px"
      >
        <div className="max-w-2xl">
          <p className="text-white font-heading text-mobile6xl md:text-6xl leading-tight font-bold mb-6">
            Beyond Coverage
          </p>
          <p className="text-white font-display text-mobile4xl md:text-2xl leading-tight mb-10">
            Your Peace of Mind is Our Business
          </p>
          <ButtonSolid data="modal-quote" text="Get a Quote" />
        </div>
      </HeroAlignEnd>

      <section className="mt-16 mb-12 md:mt-32 md:mb-24">
        <div className="container">
          <p className="decorative-text">Established in 1959</p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
            <div>
              <h1>
                Commercial Insurance Company from Chula Vista to San Diego’s
                North County
              </h1>
            </div>
            <div>
              <p className="mb-0">
                Ready to go beyond coverage? Hoffman Hanono Insurance Services
                is a family-owned, full-service commercial insurance agency in
                Chula Vista serving clients throughout San Diego County. Since
                1959, we’ve helped{" "}
                <a href="https://www.hhinsurance.com/business-insurance-chula-vista/">
                  businesses
                </a>{" "}
                and{" "}
                <a href="https://www.hhinsurance.com/personal-insurance-agency/">
                  individuals
                </a>{" "}
                get the best premiums for their needs. Clients have trusted us
                for generations because of our superior customer service,
                time-tested approach, and practical solutions. Whatever your
                industry or personal needs, your peace of mind will always be
                our business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 items-center">
            <div className="md:col-start-1 md:col-end-8">
              <Img fluid={data.commercialInsurance.childImageSharp.fluid} />
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <h2>Commercial Insurance</h2>
              <p>
                At Hoffman Hanono Insurance Services, we offer tailor-made
                solutions for business owners. With years of experience in the
                industry, our knowledgeable team will help you find the best
                premiums for your business.
              </p>
              <ButtonWithIcon
                href="/business-insurance-chula-vista/"
                text={[
                  "View Products",
                  <i className="far fa-arrow-right ml-2"></i>,
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 items-center">
            <div className="md:col-start-1 md:col-end-5 row-start-2 md:row-start-1">
              <h2>Personal Insurance</h2>
              <p>
                Protect your family’s assets with policies that suit your unique
                needs. With our long-standing knowledge and carrier
                relationships, we will carefully manage risk for you. Our
                personal insurance products guard what matters to you and your
                family.
              </p>
              <ButtonWithIcon
                href="/personal-insurance-agency/"
                text={[
                  "View Products",
                  <i className="far fa-arrow-right ml-2"></i>,
                ]}
              />
            </div>
            <div className="md:col-span-7 md:col-end-13 row-start-1">
              <Img fluid={data.personalInsurance.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>

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
      relativePath: { eq: "open-graph/facebook/homepage-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/homepage-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "home/1.0-homepage-hero-desktop.jpg" }
    ) {
      childImageSharp {
        fixed(width: 2880, height: 1200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(relativePath: { eq: "home/hero-mobile-2.jpg" }) {
      childImageSharp {
        fixed(width: 750, height: 960) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    commercialInsurance: file(
      relativePath: { eq: "home/commercial-insurance.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1392) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    personalInsurance: file(
      relativePath: { eq: "home/personal-insurance.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1392) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
