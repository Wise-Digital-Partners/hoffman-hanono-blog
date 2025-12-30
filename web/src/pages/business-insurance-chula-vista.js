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
  title: "Business Insurance FAQs",
  faqs: [
    {
      title: "1. What types of commercial insurance does Hoffman Hanono offer?",
      body: "Hoffman Hanono Insurance Services provides a wide range of commercial insurance products, including general liability, workers’ compensation, professional liability, property coverage, auto insurance, health benefits, bonds, and custom solutions tailored for your business needs.",
    },
    {
      title:
        "2. Which businesses can benefit from Hoffman Hanono's commercial insurance?",
      body: "We work with a variety of clients, from small family operations to large multi-site businesses. Our specialties include manufacturers, property owners, contractors, restaurants, non-profits, transportation companies, and more.",
    },
    {
      title:
        "3. How does Hoffman Hanono tailor insurance policies for businesses?",
      body: "We go on-site with business owners to assess exposures and determine the best coverage. Our approach ensures there are no gaps in protection and that each policy is specifically designed for the client’s unique needs.",
    },
    {
      title:
        "4. Why choose Hoffman Hanono for commercial insurance in San Diego?",
      body: "With over 50 years of experience, our family-owned agency has built trust with San Diego and Chula Vista businesses through superior service, practical solutions, and a time-tested approach to managing risk.",
    },
    {
      title: "5. What insurance carriers does Hoffman Hanono work with?",
      body: "We represent a large number of “A” rated admitted carriers, allowing us to find the most suitable commercial insurance policy for your business while providing competitive premiums.",
    },
    {
      title:
        "6. How can Hoffman Hanono help businesses reduce insurance costs?",
      body: "Our team provides quality service and resources to help clients secure better insurance premiums in the long run, ensuring comprehensive coverage without unnecessary costs.",
    },
    {
      title:
        "7. Is Hoffman Hanono licensed to provide insurance in California?",
      body: "Yes. Our California insurance license number is 0424824, ensuring you work with a fully licensed and compliant commercial insurance provider.",
    },
    {
      title: "8. How can I get a quote for commercial insurance?",
      body: "You can request a quote directly on our website by clicking “Get a Quote,” or contact us via phone or email to speak with our commercial insurance specialists.",
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
        title="Business Insurance Chula Vista | Hoffman Hanono"
        description="We offer a wide range of business insurance services in Chula Vista & throughout San Diego. See how Hoffman Hanono can help you. Get a free quote today!"
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
          <h1>Commercial Business Insurance in Chula Vista & Beyond</h1>
          <p>
            Hoffman Hanono Insurance Services offers a wide range of commercial
            lines products for our clients. We go on-site with business owners
            to determine the best way to protect their assets, and the
            end-result is a policy tailored specifically for their needs. We
            ensure that there are no gaps in coverage, and we identify exposures
            to loss that could be detrimental in the long run.
          </p>
          <p className="mb-0">
            Hoffman Hanono works with everyone from small family operations to
            large multi-site businesses across various industries. We have been
            trusted by San Diego and Chula Vista companies and their owners for
            over 50 years. We also represent a large number of “A” rated
            admitted carriers and will work diligently to find the perfect
            commercial insurance policy for your business.
          </p>
        </div>
      </HeroSplit>

      <section className="wrapper">
        <div className="container">
          <header className="md:text-center mb-10 md:mb-20">
            <h2>Our Commercial Insurance Specialties</h2>
            <p>
              Hoffman Hanono offers insurance coverage across industries. Here
              are some of our specialties:
            </p>
          </header>

          <SliderMobileCards>
            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.manufacturers.childImageSharp.fluid}
                alt="Manufacturers"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Manufacturers</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/manufacturers-insurance/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.propertyOwners.childImageSharp.fluid}
                alt="Property Owners"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Property Owners</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/property-owners-insurance/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.contractors.childImageSharp.fluid}
                alt="Contractors"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Contractors</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/contractors-insurance/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.restaurants.childImageSharp.fluid}
                alt="Restaurants"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Restaurants</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/restaurant-insurance/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.nonProfits.childImageSharp.fluid}
                alt="Non-Profits"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Non-Profits</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/nonprofit-insurance/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.transportation.childImageSharp.fluid}
                alt="Transportation"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Transportation</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/transportation-insurance/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img
                fluid={data.healthBenefits.childImageSharp.fluid}
                alt="Health Benefits"
              />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Health Benefits</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/health-benefits-insurance/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            <div className="shadow-xl relative transform hover:-translate-y-2 transition-all duration-300 ease-linear">
              <Img fluid={data.auto.childImageSharp.fluid} alt="Auto" />
              <div className="bg-white pl-4 pr-8 py-4 flex justify-between items-center text-gray-900">
                <span className="font-bold">Auto</span>
                <i className="text-lg far fa-arrow-right"></i>
              </div>
              <AniLink fade to="/commercial-auto-insurance-san-diego/">
                <span className="link-overlay"></span>
              </AniLink>
            </div>

            {/* <div className="flex">
                     <div className="relative w-48 h-48 hover:w-40 hover:h-40 rounded-full border border-solid border-primary_600 flex items-center justify-center m-auto transition-all duration-300 ease-linear">
                        <div className="w-32 h-32 rounded-full bg-primary_100 flex items-center justify-center">
                           <span className="text-primary_600">Get a Quote</span>
                        </div>
                        <a data-modal-open="modal-quote">
                           <span className="link-overlay"></span>
                        </a>
                     </div>
                  </div> */}
          </SliderMobileCards>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <header className="text-center mb-16">
            <h2>Products We Offer</h2>
            <p>
              Below is a list of commercial insurance products we offer
              including (but not limited to):{" "}
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
            <div>
              <ul className="styled-list">
                <li>Business</li>
                <li>General Liability</li>
                <li>Liquor Liability</li>
                <li>Product Liability</li>
                <li>Building</li>
                <li>Loss of Income</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Workers Compensation</li>
                <li>Medical</li>
                <li>Computer Equipment</li>
                <li>Builders Risk</li>
                <li>Professional Liability</li>
                <li>Directors & Officers Liability</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Employment Practices Liability</li>
                <li>Errors & Omissions</li>
                <li>Umbrella/Excess</li>
                <li>Auto</li>
                <li>Crime</li>
                <li>Inland Marine</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Contractors Equipment</li>
                <li>Bonds</li>
                <li>Employee Dishonesty</li>
                <li>Earthquake</li>
                <li>Flood</li>
                <li>Glass</li>
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
                <h2>Our Commercial Insurance Approach</h2>
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
      relativePath: { eq: "open-graph/facebook/commercial-insurance-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/commercial-insurance-twitter.jpg"
      }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "commercial-insurance/hub/commercial-insurance-desktop.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 560) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "commercial-insurance/hub/commercial-insurance-mobile.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 767) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    contractors: file(
      relativePath: { eq: "commercial-insurance/hub/contractors.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    healthBenefits: file(
      relativePath: { eq: "commercial-insurance/hub/health-benefits.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    manufacturers: file(
      relativePath: { eq: "commercial-insurance/hub/manufacturers.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nonProfits: file(
      relativePath: { eq: "commercial-insurance/hub/non-profits.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    propertyOwners: file(
      relativePath: { eq: "commercial-insurance/hub/property-owners.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    restaurants: file(
      relativePath: { eq: "commercial-insurance/hub/restaurants.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    transportation: file(
      relativePath: { eq: "commercial-insurance/hub/transportation.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    auto: file(relativePath: { eq: "commercial-insurance/hub/auto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 528) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
