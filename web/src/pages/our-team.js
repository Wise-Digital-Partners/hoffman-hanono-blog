import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CallToAction";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";
import { te } from "date-fns/locale";

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
            {/* <div>
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
            </div> */}
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
            <div className="hidden md:table-row ">
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
            <div className="md:table-row-group alternating-colors-1">
              {teamMembers.map((teamMember) => (
                <TeamMemberRow teamMember={teamMember} key={teamMember.ext} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />

      <ModalTeamMembers slideIndex={slideIndex} />
    </Layout>
  );
};

const teamMembers = [
  {
    name: "David Hoffman",
    position: "President",
    email: "david@hhinsurance.com",
    ext: 101,
  },
  {
    name: "Michelle Torres",
    position: "Operations Manager",
    email: "mtorres@hhinsurance.com",
    ext: 104,
  },
  {
    name: "Ben Antl",
    position: "Account Executive",
    email: "ben@hhinsurance.com",
    ext: 113,
  },
  {
    name: "Nestor Aguilar",
    position: "Account Executive",
    email: "naguilar@hhinsurance.com",
    ext: 131,
  },
  {
    name: "Johanna Guedea",
    position: "Commercial Lines Account Manager",
    email: "jguedea@hhinsurance.com",
    ext: 120,
  },
  {
    name: "Judy Schwartz",
    position: "Commercial Lines Account Manager",
    email: "jschwartz@hhinsurance.com",
    ext: 107,
  },
  {
    name: "Karen Hernandez",
    position: "Director of First Impressions",
    email: "khernandez@hhinsurance.com",
    ext: 109,
  },
  {
    name: "Lisa Preisler",
    position: "Personal Lines Account Manager",
    email: "lpreisler@hhinsurance.com",
    ext: 108,
  },
  {
    name: "Osmar Espinoza",
    position: "Account Executive",
    email: "osmar@hhinsurance.com",
    ext: 105,
  },
  {
    name: "Rosanne Fuentes",
    position: "Commercial Lines Account Manager",
    email: "rfuentes@hhinsurance.com",
    ext: 110,
  },
  {
    name: "Patricia Strand",
    position: "Accounting",
    email: "pstrand@hhinsurance.com",
    ext: 122,
  },
  {
    name: "Elias Vazquez",
    position: "Account Executive",
    email: "evazquez@hhinsurance.com",
    ext: 118,
  },
  {
    name: "John Borja",
    position: "Account Executive",
    email: "jborja@hhinsurance.com",
    ext: 124,
  },
  {
    name: "Pamela Garcia",
    position: "Customer Service Representative",
    email: "pgarcia@hhinsurance.com",
    ext: 127,
  },
  {
    name: "Samantha Arenas",
    position: "Commercial Lines Account Manager",
    email: "sarenas@hhinsurance.com",
    ext: 128,
  },
  {
    name: "Marlene Martinez ",
    position: "Personal Lines Account Manager",
    email: "mmartinez@hhinsurance.com",
    ext: 133,
  },
  {
    name: "German Gonzalez ",
    position: "Account Executive",
    email: "ggonzalez@hhinsurance.com ",
    ext: 136,
  },
  {
    name: "Jorge Lopez",
    position: "Commercial Lines Associate",
    email: "jlopez@hhinsurance.com",
    ext: 135,
  },
  {
    name: "Carlos Garcia",
    position: "Customer Service Representative",
    email: "cgarcia@hhinsurance.com",
    ext: 134,
  },
];

const TeamMemberRow = ({ teamMember }) => {
  return (
    <div className="md:table-row  rounded-sm px-4 py-3">
      <div className="md:table-cell font-bold text-gray-900 md:px-4 md:py-2 mb-1 md:mb-0">
        {teamMember.name}
      </div>
      <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
        {teamMember.position}
      </div>
      <div className="md:table-cell md:px-4 md:py-4 mb-1 md:mb-0">
        <a
          className="no-underline font-normal"
          href={`mailto:${teamMember.email}`}
        >
          {teamMember.email}
        </a>
      </div>
      <div className="md:table-cell md:px-4 md:py-2">
        <span className="md:hidden">ext. </span>
        {teamMember.ext}
      </div>
    </div>
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
        fluid(maxWidth: 560) {
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
