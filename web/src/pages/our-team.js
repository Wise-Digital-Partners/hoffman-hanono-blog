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

  const leadership = [
    {
      name: "David Hoffman",
      position: "President",
      email: "david@hhinsurance.com",
      ext: 101,
      image: "david-hoffman.jpg",
      hasBio: true,
    },
    {
      name: "Michelle Torres",
      position: "Operations Manager",
      email: "mtorres@hhinsurance.com",
      ext: 104,
      image: "michelle-torres.jpg",
      hasBio: true,
    },
  ];

  const accountExecutives = [
    {
      name: "Alejandro Torres",
      position: "Account Executive",
      email: "atorres@hhinsurance.com",
      ext: 113,
      image: "alejandro-torres.jpg",
    },
    {
      name: "Brad Wilson",
      position: "Account Executive",
      email: "brad@hhinsurance.com",
      ext: 138,
      image: "brad-wilson.jpg",
    },
    {
      name: "Elias Vazquez",
      position: "Account Executive",
      email: "evazquez@hhinsurance.com",
      ext: 118,
      image: "elias-vazquez.jpg",
    },
    {
      name: "Ben Antl",
      position: "Account Executive",
      email: "ben@hhinsurance.com",
      ext: 113,
      image: "ben-antl.jpg",
    },
    {
      name: "German Gonzalez ",
      position: "Account Executive",
      email: "german@hhinsurance.com",
      ext: 136,
      image: "german-gonzalez.jpg",
    },
    // {
    //   name: "John Borja",
    //   position: "Account Executive",
    //   email: "jborja@hhinsurance.com",
    //   ext: 124,
    //   image: "john-borja.jpg",
    // },
    {
      name: "Nestor Aguilar",
      position: "Account Executive",
      email: "naguilar@hhinsurance.com",
      ext: 131,
      image: "nestor-aguilar.jpg",
    },
  ];

  const commercialInsuranceService = [
    {
      name: "Johanna Guedea",
      position: "Account Manager",
      email: "jguedea@hhinsurance.com",
      ext: 120,
      image: "johanna-guedea.jpg",
    },
    {
      name: "Judy Schwartz",
      position: "Account Manager",
      email: "jschwartz@hhinsurance.com",
      ext: 107,
      image: "judy-schwartz.jpg",
    },
    {
      name: "Liliana Robles",
      position: "Account Manager",
      email: "lrobles@hhinsurance.com",
      ext: 106,
      image: "liliana-robles.jpg",
    },
    // {
    //   name: "Nora Johnson",
    //   position: "Account Manager",
    //   email: "njohnson@hhinsurance.com",
    //   ext: 135,
    //   image: "nora-johnson.jpg",
    // },
    {
      name: "Pamela Garcia",
      position: "Customer Service Representative",
      email: "pgarcia@hhinsurance.com",
      ext: 127,
      image: "pamela-garcia.jpg",
    },
    {
      name: "Rosanne Fuentes",
      position: "Account Manager",
      email: "rfuentes@hhinsurance.com",
      ext: 110,
      image: "placeholder.jpg",
    },
    {
      name: "Samantha Arenas",
      position: "Account Manager",
      email: "sarenas@hhinsurance.com",
      ext: 128,
      image: "samantha-arenas.jpg",
    },
    {
      name: "Emelyn Woods",
      position: "Customer Service Representative",
      email: "ewoods@hhinsurance.com",
      ext: 110,
      image: "placeholder.jpg",
    },
  ];

  const personalInsuranceService = [
    {
      name: "Lisa Preisler",
      position: "Account Manager",
      email: "lpreisler@hhinsurance.com",
      ext: 108,
      image: "lisa-preisler.jpg",
    },
    {
      name: "Marlene Martinez ",
      position: "Account Manager",
      email: "mmartinez@hhinsurance.com",
      ext: 133,
      image: "marlene-martinez.jpg",
    },
  ];

  const claims = [
    {
      name: "Karen Hernandez",
      position: "Claims",
      email: "claims@hhinsurance.com",
      ext: 109,
      image: "karen-hernandez.jpg",
    },
  ];

  const accounting = [
    {
      name: "Patricia Strand",
      position: "Accounting",
      email: "pstrand@hhinsurance.com",
      ext: 122,
      image: "patricia-strand.jpg",
    },
  ];

  const administration = [
    {
      name: "Nyah Costello",
      position: "Customer Service Representative",
      email: "ncostello@hhinsurance.com",
      ext: 134,
      image: "nyah-costello.jpg",
    },
  ];

  const benefits = [
    {
      name: "Laura Ayala",
      position: "Employee Benefits Consultant",
      email: null,
      ext: 110,
      image: "laura-ayala.jpg",
    },
    {
      name: "Brittany Morales",
      position: "Account Manager",
      email: "bmorales@hhinsurance.com",
      ext: 110,
      image: "brittany-morales.jpg",
    },
  ];
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
      <div className="flex flex-col gap-y-16 mb-[156px]">
        <DepartmentSection
          departmentName="Leadership"
          members={leadership}
          setSlideIndex={setSlideIndex}
        />
        <DepartmentSection
          departmentName="Account Executives"
          members={accountExecutives}
          setSlideIndex={setSlideIndex}
        />
        <DepartmentSection
          departmentName="Commercial Insurance Service"
          members={commercialInsuranceService}
          setSlideIndex={setSlideIndex}
        />
        <DepartmentSection
          departmentName="Personal Insurance Service"
          members={personalInsuranceService}
          setSlideIndex={setSlideIndex}
        />
        <DepartmentSection
          departmentName="Benefits"
          members={benefits}
          setSlideIndex={setSlideIndex}
        />
        <DepartmentSection
          departmentName="Claims"
          members={claims}
          setSlideIndex={setSlideIndex}
        />
        <DepartmentSection
          departmentName="Accounting"
          members={accounting}
          setSlideIndex={setSlideIndex}
        />
        <DepartmentSection
          departmentName="Administration"
          members={administration}
          setSlideIndex={setSlideIndex}
        />
      </div>
      {/* <section className="wrapper">
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
      </section> */}
      <CallToAction />
      <ModalTeamMembers slideIndex={slideIndex} />
    </Layout>
  );
};

const DepartmentSection = ({ members, departmentName, setSlideIndex }) => {
  return (
    <section className="wrapper mb-0">
      <div className="container">
        <header className="mb-6">
          <h2>{departmentName}</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-6 md:gap-x-6">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              member={member}
              setSlideIndex={setSlideIndex}
              slideIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemberCard = ({ member, setSlideIndex, slideIndex }) => {
  const handleClick = (slideIndex) => {
    if (member.hasBio) {
      setSlideIndex(slideIndex);
    }
  };
  return (
    <div className="">
      <div className="relative m-auto w-xl overflow-hidden">
        <div
          data-modal-open={member.hasBio ? "modal-team-members" : null}
          onClick={() => handleClick(slideIndex)}
          className={`w-full rounded-t-[20px] overflow-hidden h-full lg:max-h-[424px] ${
            member.hasBio ? "cursor-pointer" : ""
          }`}
        >
          <img
            src={`/images/our-team/${member.image}`}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-y-2">
        <h3 className="text-xl my-0 font-semibold">{member.name}</h3>
        <p className="text-[#232B48] text-lg my-0">{member.position}</p>
        {member.email && (
          <a
            className="text-lg text-[#232B48] font-normal"
            href={`mailto:${member.email}`}
          >
            {member.email}
          </a>
        )}
      </div>
    </div>
  );
};

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
      relativePath: { eq: "about/our-team/meet-the-team-v3.jpg" }
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
    alejandroTorres: file(
      relativePath: { eq: "about/our-team/alejandro-torres.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    benjaminAntl: file(
      relativePath: { eq: "about/our-team/benjamin-antl.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bradWilson: file(relativePath: { eq: "about/our-team/brad-wilson.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eliasVasquez: file(
      relativePath: { eq: "about/our-team/elias-vasquez.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    germanGonzalez: file(
      relativePath: { eq: "about/our-team/german-gonzalez.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    johannaGuedea: file(
      relativePath: { eq: "about/our-team/johanna-guedea.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    johnBorja: file(relativePath: { eq: "about/our-team/john-borja.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    karenHernandez: file(
      relativePath: { eq: "about/our-team/karen-hernandez.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lilianaRobles: file(
      relativePath: { eq: "about/our-team/liliana-robles.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lisaPreisler: file(
      relativePath: { eq: "about/our-team/lisa-preisler.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    marleneMartinez: file(
      relativePath: { eq: "about/our-team/marlene-martinez.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nestorAguilar: file(
      relativePath: { eq: "about/our-team/nestor-aguilar.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    noraJohnson: file(relativePath: { eq: "about/our-team/nora-johnson.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nyahCostello: file(
      relativePath: { eq: "about/our-team/nyah-costello.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pamelaGarcia: file(
      relativePath: { eq: "about/our-team/pamela-garcia.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    patriciaStrand: file(
      relativePath: { eq: "about/our-team/patricia-strand.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    samanthaArenas: file(
      relativePath: { eq: "about/our-team/samantha-arenas.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 363) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
