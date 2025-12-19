import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroSplit from "../components/Hero/HeroSplit";
import WhyUs from "../components/Repeating/WhyUs";
import SliderTestimonials from "../components/Slider/SliderTestimonials";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CallToAction";
import SliderMobileCards from "../components/Slider/SliderMobileCards";
import FaqSection from "../components/Repeating/FaqSection";

const faqGroup = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      title: "1. What personal insurance products does Hoffman Hanono offer?",
      body: "Hoffman Hanono Insurance Services provides a full range of personal insurance products, including home, auto, umbrella, landlord, recreational vehicle, boat and watercraft, life, family medical, and custom insurance solutions tailored to your family’s needs.",
    },
    {
      title: "2. Who can benefit from Hoffman Hanono’s personal insurance?",
      body: "We work with individuals and families throughout San Diego and Chula Vista who want coverage for their personal belongings, assets, and more. Our solutions are designed to protect what matters most to you and your loved ones.",
    },
    {
      title:
        "3. How does Hoffman Hanono customize personal insurance policies?",
      body: "Our team carefully evaluates your needs and risks, then creates tailored policies that provide comprehensive protection without gaps. Each policy is designed to fit your family’s unique situation.",
    },
    {
      title:
        "4. Why choose Hoffman Hanono for personal insurance in San Diego?",
      body: "With over 50 years of experience, our family-owned agency has earned the trust of San Diego and Chula Vista homeowners. We combine long-standing carrier relationships with superior service and practical solutions to ensure your peace of mind.",
    },
    {
      title: "5. What insurance carriers does Hoffman Hanono work with?",
      body: "We represent a large number of “A” rated admitted carriers, enabling us to find the most suitable personal insurance policy for your family while ensuring competitive premiums.",
    },
    {
      title: "6. How can Hoffman Hanono help families lower insurance costs?",
      body: "Our team provides quality service and resources to help clients secure better insurance premiums over time, ensuring comprehensive coverage without unnecessary costs.",
    },
    {
      title:
        "7. Is Hoffman Hanono licensed to provide insurance in California?",
      body: "Yes. Our California insurance license number is 0424824, so you can trust that we are a fully licensed and compliant provider of personal insurance.",
    },
    {
      title: "8. How can I get a quote for personal insurance?",
      body: "You can request a quote directly on our website by clicking “Get a Quote,” or contact us via phone or email to speak with one of our personal insurance specialists.",
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
        title="Personal Insurance Agency San Diego | Hoffman Hanono"
        description="Need a top personal insurance agency in San Diego County? Hoffman Hanono connects you with the right coverage for your needs. Get a free quote!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroSplit
        images={heroImages}
        position="50% 50%"
        maxHeightDesktop="618px"
        maxHeightMobile="500px"
      >
        <h1>San Diego Personal Insurance Agency</h1>
        <p>
          Hoffman Hanono is a full lines insurance agency that also offers
          personal lines to our clients. No matter what assets are important to
          you and your family, we’ll put our long-standing knowledge and carrier
          relationships to carefully manage risk for you. Our commitment is to
          place you in a policy that perfectly suits your needs.
        </p>
        <p className="mb-0">
          Hoffman Hanono works with individuals and families who need coverage
          for their personal belongings and more. With our tailored solutions,
          Hoffman Hanono has been trusted by San Diego and Chula Vista
          homeowners for over 50 years. We also represent a large number of “A”
          rated admitted carriers and will work diligently to find the perfect
          personal insurance policy for your family.{" "}
        </p>
      </HeroSplit>

      <section className="wrapper">
        <div className="container">
          <header className="md:text-center mb-10 md:mb-20">
            <h2>Products We Offer</h2>
            <p>
              Protect what matters most to you and your family with our personal
              insurance products.{" "}
            </p>
          </header>

          <SliderMobileCards>
            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.homeInsurance.childImageSharp.fluid}
                alt="Home Insurance"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Home Insurance</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/home-insurance-chula-vista/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.autoInsurance.childImageSharp.fluid}
                alt="Auto Insurance"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Auto Insurance</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/auto-insurance-chula-vista/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.umbrellaInsurance.childImageSharp.fluid}
                alt="Umbrella Insurance"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Umbrella Insurance</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/umbrella-insurance-san-diego/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.rentalInsurance.childImageSharp.fluid}
                alt="Landlord Insurance"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Landlord Insurance</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/landlord-insurance-san-diego/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>
          </SliderMobileCards>

          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 mt-16 md:mt-24 text-center">
            <div className="px-4 py-6 md:p-0 border-r border-b md:border-0 border-solid border-gray-200">
              <div className="h-20 mb-4 md:mb-8">
                <img
                  className="mx-auto"
                  src={data.recreationalVehicleInsurance.publicURL}
                  alt="Recreational Vehicle Insurance"
                />
              </div>
              <p className="font-bold text-gray-900 mb-0">
                Recreational Vehicle Insurance
              </p>
            </div>
            <div className="px-4 py-6 md:p-0 border-b md:border-0 border-solid border-gray-200">
              <div className="h-20 mb-4 md:mb-8">
                <img
                  className="mx-auto"
                  src={data.boatWatercraftInsurance.publicURL}
                  alt="Boat and Watercraft Insurance"
                />
              </div>
              <p className="font-bold text-gray-900 mb-0">
                Boat and Watercraft Insurance
              </p>
            </div>
            <div className="px-4 py-6 md:p-0 border-r md:border-0 border-solid border-gray-200">
              <div className="h-20 mb-4 md:mb-8">
                <img
                  className="mx-auto"
                  src={data.lifeInsurance.publicURL}
                  alt="Life Insurance"
                />
              </div>
              <p className="font-bold text-gray-900 mb-0">Life Insurance</p>
            </div>
            <div className="px-4 py-6 md:p-0">
              <div className="h-20 mb-4 md:mb-8">
                <img
                  className="mx-auto"
                  src={data.familyMedicalInsurance.publicURL}
                  alt="Family Medical Insurance"
                />
              </div>
              <p className="font-bold text-gray-900 mb-0">
                Family Medical Insurance
              </p>
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
                <h2>Our Personal Insurance Approach</h2>
              </div>
              <div>
                <p className="mb-0">
                  With our personal insurance products, get peace of mind and
                  focus on moments that matter. Hoffman Hanono Insurance
                  Services is here to advise and partner with you to find
                  insurance solutions that are meant entirely for you and your
                  loved ones. After all, insurance isn’t “one-size-fits-all.”Not
                  only that, but we provide quality service and resources that
                  will help you secure better insurance premiums in the long
                  run. This commitment reveals why we've been a pillar of the
                  San Diego and Chula Vista insurance community since 1959.
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
      relativePath: { eq: "open-graph/facebook/personal-insurance-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/personal-insurance-twitter.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "personal-insurance/hub/personal-insurance-desktop.jpg"
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
        eq: "personal-insurance/hub/personal-insurance-mobile.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 748, height: 748) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    homeInsurance: file(
      relativePath: { eq: "personal-insurance/hub/home-insurance.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    autoInsurance: file(
      relativePath: { eq: "personal-insurance/hub/auto.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    umbrellaInsurance: file(
      relativePath: { eq: "personal-insurance/hub/umbrella-insurance.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rentalInsurance: file(
      relativePath: { eq: "personal-insurance/hub/rental-insurance.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    boatWatercraftInsurance: file(
      relativePath: {
        eq: "personal-insurance/hub/boat-and-watercraft-insurance.svg"
      }
    ) {
      publicURL
    }
    familyMedicalInsurance: file(
      relativePath: {
        eq: "personal-insurance/hub/family-medical-insurance.svg"
      }
    ) {
      publicURL
    }
    lifeInsurance: file(
      relativePath: { eq: "personal-insurance/hub/life-insurance.svg" }
    ) {
      publicURL
    }
    recreationalVehicleInsurance: file(
      relativePath: {
        eq: "personal-insurance/hub/recreational-vehicle-insurance.svg"
      }
    ) {
      publicURL
    }
  }
`;
