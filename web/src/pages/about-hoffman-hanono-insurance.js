import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
// import ButtonSolid from "../components/Button/ButtonSolid"
// import ButtonGhost from "../components/Button/ButtonGhost"
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
import WhyUs from "../components/Repeating/WhyUs";
import SliderTestimonials from "../components/Slider/SliderTestimonials";
import CallToAction from "../components/Repeating/CallToAction";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="About Hoffman Hanono Insurance Services | Chula Vista"
        description="Hoffman Hanono Insurance Services is a family-owned, full-service insurance agency serving San Diego County from Chula Vista, CA. Learn more here."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-0 mb-20 md:pt-6 md:mb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-24">
            <div>
              <Img fluid={data.about.childImageSharp.fluid} />
            </div>
            <div className="">
              <p className="decorative-text">Our History</p>
              <h1>About Hoffman Hanono Insurance</h1>
              <p>
                In 1959, our founder Jerry Hoffman started our agency with one
                thing in mind—to bring clients peace of mind by offering
                affordable insurance solutions with the highest customer service
                attainable.
              </p>
              <p>
                Our name later changed to Hoffman Hanono in 1970 when Philip
                Hoffman and Ezra Hanono teamed up to form a partnership—one that
                would carry on the tradition that Jerry set in motion back in
                the fifties. David Hoffman, our third generation of the Hoffman
                family, joined us in 1995 and has taken us into the 21st century
                without a misstep in our founder’s original commitment to our
                customers.
              </p>
              <p>
                Today you can expect nothing less than the best customer service
                and insurance coverage. We look forward to serving San Diego and
                Chula Vista businesses for many more generations to come!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 row-start-2 md:row-start-1 gap-y-8 md:gap-y-0 md:gap-x-20 items-center">
            <div className="md:col-start-1 md:col-span-6">
              <h2>Our Team</h2>
              <p>
                Hoffman Hanono’s team draws on years of experience and an
                unwavering commitment to the best customer service for our
                clients.{" "}
              </p>
              <ButtonWithIcon
                href="/our-team/"
                text={[
                  "Meet the Team",
                  <i className="far fa-arrow-right ml-2"></i>,
                ]}
              />
            </div>
            <div className="md:col-end-13 md:col-span-6 row-start-1">
              <Img
                fluid={data.meetTheTeam.childImageSharp.fluid}
                alt="Meet the Team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <header className="text-center max-w-3xl mx-auto mb-20">
            <h2>Organizations We Support</h2>
            <p>
              At Hoffman Hanono, we are committed to giving back to the
              community. We are proud to support the following local
              organizations:
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-8 text-center">
            <div>
              <Img
                className="mb-5"
                fixed={data.rotaryChulaVista.childImageSharp.fixed}
              />
              <p className="text-sm font-bold uppercase mb-0 opacity-50">
                Chula Vista Rotary
              </p>
            </div>
            <div>
              <Img className="mb-5" fixed={data.ymca.childImageSharp.fixed} />
              <p className="text-sm font-bold uppercase mb-0 opacity-50">
                Southbay Family YMCA
              </p>
            </div>
            <div>
              <Img
                className="mb-5"
                fixed={data.chulaVistaKiwanis.childImageSharp.fixed}
              />
              <p className="text-sm font-bold uppercase mb-0 opacity-50">
                Chula Vista Kiwanis
              </p>
            </div>
            <div>
              <Img
                className="mb-5"
                fixed={data.livingCoastDiscoveryCenter.childImageSharp.fixed}
              />
              <p className="text-sm font-bold uppercase mb-0 opacity-50">
                Living Coast Discovery Center
              </p>
            </div>
          </div>
        </div>
      </section>

      <SliderTestimonials />
      <WhyUs />
      <CallToAction />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/about-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/about-twitter.jpg" }
    ) {
      publicURL
    }
    about: file(relativePath: { eq: "about/about-hoffman-hanono-v2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1176) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    meetTheTeam: file(relativePath: { eq: "about/meet-the-team.png" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    chulaVistaKiwanis: file(
      relativePath: { eq: "about/chula-vista-kiwanis.png" }
    ) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    rotaryChulaVista: file(
      relativePath: { eq: "about/rotary-chula-vista-sunrise.png" }
    ) {
      childImageSharp {
        fixed(width: 233, height: 64) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    ymca: file(relativePath: { eq: "about/the-ymca.png" }) {
      childImageSharp {
        fixed(width: 83, height: 64) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    livingCoastDiscoveryCenter: file(
      relativePath: { eq: "about/living-coast-discovery-center.png" }
    ) {
      childImageSharp {
        fixed(width: 159, height: 64) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
