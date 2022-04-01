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
        title="San Diego Commercial insurance | Hoffman Hanono"
        description="Find the best coverage for your San Diego business owners with Hoffman Hanono Insurance. Get your free quote today."
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
              <h1>San Diego Commercial Insurance</h1>
            </div>
            <div>
              <p className="mb-0">
                Ready to go beyond coverage? Hoffman Hanono Insurance Services
                is a family-owned, full-service commercial insurance agency
                serving the city of San Diego and clients throughout the county.
                Since 1959, we’ve helped businesses and individuals get the best
                premiums for their needs. Clients have trusted us for
                generations because of our superior customer service,
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
                solutions for San Diego business owners. With years of
                experience in the industry, our knowledgeable team will help you
                find the best premiums for your business.
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
      <About />
      <CallToAction />

      <section className="wrapper">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <Img fluid={data.city.childImageSharp.fluid} />
            </div>
            <div>
              <h2>Why We Love San Diego</h2>
              <p className="mb-0">
                What’s not to love about beautiful San Diego? It’s the city of
                year-round sunshine, miles of exceptional beaches for you to dip
                your toes in the sand, and world-class attractions. There’s a
                reason San Diego is called “America’s Finest City” and is a
                world-renowned tourist destination. Life in San Diego is
                bustling but relaxing. It’s a town that draws dreamers, big
                thinkers, families, college students, military members, and
                more. And as a unique city along the Mexican border, San Diego
                is infused with vibrant cultural influences from its neighbor to
                the south. There’s much to love about this incredible Southern
                California city.
              </p>
            </div>
          </div>
        </div>
      </section>
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
    city: file(relativePath: { eq: "city/San Diego.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 568) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
