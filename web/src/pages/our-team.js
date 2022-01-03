import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CallToAction";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Layout>
      <SearchEngineOptimization
        title="Our Team | Commercial Insurance | Hoffman Hanono"
        description="Our team at Hoffman Hanono Insurance Services is top-notch and dedicated to your needs. Learn more about our team and how we can help you here."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-0 mb-20 md:pt-6 md:mb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-24 items-center">
            <div>
              <Img fluid={data.meetTheTeam.childImageSharp.fluid} />
            </div>
            <div>
              <p className="decorative-text">Since 1959</p>
              <h1>Meet the Team</h1>
              <p className="md:text-2xl md:leading-10 md:font-heading md:text-gray-900 mb-0">
                Get to know our dedicated partners and team members at Hoffman
                Hanono.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <header className="mb-12 md:mb-20">
            <h2>Leadership</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-16">
            <div>
              <div className="relative m-auto w-xl overflow-hidden mb-6 md:mb-8">
                <button
                  data-modal-open="modal-team-members"
                  onClick={() => setSlideIndex(0)}
                  className="w-full"
                >
                  <Img
                    className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear"
                    fluid={data.davidHoffman.childImageSharp.fluid}
                    alt="David Hoffman"
                  />
                </button>
              </div>
              <h3 className="mb-1">David Hoffman</h3>
              <p className="text-gray-900 opacity-50 text-large md:text-xlarge mb-0">
                President
              </p>
            </div>
            <div>
              <div className="relative m-auto w-xl overflow-hidden mb-6 md:mb-8">
                <button
                  data-modal-open="modal-team-members"
                  onClick={() => setSlideIndex(1)}
                  className="w-full"
                >
                  <Img
                    className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear"
                    fluid={data.ezraHanono.childImageSharp.fluid}
                    alt="Ezra Hanono"
                  />
                </button>
              </div>
              <h3 className="mb-1">Ezra Hanono</h3>
              <p className="text-gray-900 opacity-50 text-large md:text-xlarge mb-0">
                Partner
              </p>
            </div>
            <div>
              <div className="relative m-auto w-xl overflow-hidden mb-6 md:mb-8">
                <button
                  data-modal-open="modal-team-members"
                  onClick={() => setSlideIndex(2)}
                  className="w-full"
                >
                  <Img
                    className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear"
                    fluid={data.michelleTorres.childImageSharp.fluid}
                    alt="Michelle Torres"
                  />
                </button>
              </div>
              <h3 className="mb-1">Michelle Torres</h3>
              <p className="text-gray-900 opacity-50 text-large md:text-xlarge mb-0">
                Operations Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <header className="mb-10 md:mb-20">
            <h2>Company Directory</h2>
          </header>

          <div className="md:table w-full">
            <div className="md:table-row-group">
              <div className="hidden md:table-row">
                <div className="md:table-cell text-xlarge text-gray-900 font-heading text-left font-semibold border-b border-solid border-gray-200 md:px-4 md:py-2">
                  Name
                </div>
                <div className="md:table-cell text-xlarge text-gray-900 font-heading text-left font-semibold border-b border-solid border-gray-200 md:px-4 md:py-2">
                  Title
                </div>
                <div className="md:table-cell text-xlarge text-gray-900 font-heading text-left font-semibold border-b border-solid border-gray-200 md:px-4 md:py-2">
                  Email
                </div>
                <div className="md:table-cell text-xlarge text-gray-900 font-heading text-left font-semibold border-b border-solid border-gray-200 md:px-4 md:py-2">
                  Extension
                </div>
              </div>
              <div className="hidden md:table-row">
                <div className="md:table-cell py-3"></div>
                <div className="md:table-cell py-3"></div>
                <div className="md:table-cell py-3"></div>
                <div className="md:table-cell py-3"></div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  David Hoffman
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  President
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:david@hhinsurance.com"
                  >
                    david@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>101
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Philip Hoffman
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Vice President
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:phil@hhinsurance.com"
                  >
                    phil@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>103
                </div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Ezra Hanono
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  Partner/Treasurer
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:ezra@hhinsurance.com"
                  >
                    ezra@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>102
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Michelle Torres
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Operations Manager
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:mtorres@hhinsurance.com"
                  >
                    mtorres@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>104
                </div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Ben Antl
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  Account Executive
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:ben@hhinsurance.com"
                  >
                    ben@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>113
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Johanna Guedea
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Account Manager Transportation Dept.
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:jguedea@hhinsurance.com"
                  >
                    jguedea@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>120
                </div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Judy Schwartz
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  Commercial Lines Account Manager
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:jschwartz@hhinsurance.com"
                  >
                    jschwartz@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>107
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Stephanie Vargas
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Director of First Impressions
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:svargas@hhinsurance.com"
                  >
                    svargas@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>109
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Lisa Preisler
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Personal Lines Account Manager
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:lpreisler@hhinsurance.com"
                  >
                    lpreisler@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>108
                </div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Manuela Warren
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  Commercial Lines Account Manager
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:mwarren@hhinsurance.com"
                  >
                    mwarren@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>106
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Natalie Manriquez
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Commercial Lines Account Manager
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:nmanriquez@hhinsurance.com"
                  >
                    nmanriquez@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>115
                </div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Osmar Espinoza
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  Account Executive
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:osmar@hhinsurance.com"
                  >
                    osmar@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>105
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Kimberly Mull
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Customer Service Associate
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:kmull@hhinsurance.com"
                  >
                    kmull@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>111
                </div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Rosanne Fuentes
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  Commercial Lines Account Manager
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:rfuentes@hhinsurance.com"
                  >
                    rfuentes@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>110
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Patricia Strand
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Accounting
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:pstrand@hhinsurance.com"
                  >
                    pstrand@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>122
                </div>
              </div>
              <div className="md:table-row bg-gray-100 rounded-sm px-4 py-3">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  Elias Vazquez
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  Account Executive
                </div>
                <div className="md:table-cell md:px-4 md:py-2 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:evazquez@hhinsurance.comcom"
                  >
                    evazquez@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-2">
                  <span className="md:hidden">ext. </span>118
                </div>
              </div>
              <div className="md:table-row px-4 py-4">
                <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
                  John Borja
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  Account Executive
                </div>
                <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
                  <a
                    className="no-underline font-normal"
                    href="mailto:jborja@hhinsurance.com"
                  >
                    jborja@hhinsurance.com
                  </a>
                </div>
                <div className="md:table-cell md:px-4 md:py-4">
                  <span className="md:hidden">ext. </span>124
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />

      <ModalTeamMembers slideIndex={slideIndex} />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/meet-the-team-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/meet-the-team-twitter.jpg" }
    ) {
      publicURL
    }
    meetTheTeam: file(
      relativePath: { eq: "about/our-team/meet-the-team.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 548) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    davidHoffman: file(
      relativePath: { eq: "about/our-team/david-hoffman.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ezraHanono: file(relativePath: { eq: "about/our-team/ezra-hanono.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    michelleTorres: file(
      relativePath: { eq: "about/our-team/michelle-torres.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
