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
