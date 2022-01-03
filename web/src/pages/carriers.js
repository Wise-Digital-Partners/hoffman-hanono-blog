import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CallToAction";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Insurance Carriers San Diego | Hoffman Hanono"
        description="Throughout the years, Hoffman Hanono Insurance Services has established a strong history & relationships with the best A+ rated insurance carriers."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <div className="container">
        <section className="wrapper bg-gray-100 pt-16 pb-12 px-6 md:py-24 mb-16 md:mt-6 md:mb-24 rounded-xl md:rounded-3xl">
          <header className="max-w-2xl mx-auto text-center">
            <h1>Carriers</h1>
            <p className="mb-0">
              For decades, Hoffman Hanono Insurance Services has established a
              strong history and business relationships with the top A+ rated
              insurance carriers. Get the best coverage, value, and service in
              the industry.
            </p>
          </header>
        </section>
      </div>

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-12 text-center items-center">
            <div>
              <Img
                className="mx-auto"
                fluid={data.aetna.childImageSharp.fluid}
                alt="Aetna logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.amTrust.childImageSharp.fluid}
                alt="AmTrust logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.anthemBlueCross.childImageSharp.fluid}
                alt="Anthem Blue Cross logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.benchmark.childImageSharp.fluid}
                alt="Benchmark logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.blueOfCalifornia.childImageSharp.fluid}
                alt="Blue of California logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.californiaChoice.childImageSharp.fluid}
                alt="California Choice logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.capitalInsurance.childImageSharp.fluid}
                alt="Capital Insurance logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.cnaSurety.childImageSharp.fluid}
                alt="CNA Surety logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.compWest.childImageSharp.fluid}
                alt="CompWest logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.deansHomer.childImageSharp.fluid}
                alt="Deans & Homer logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.employers.childImageSharp.fluid}
                alt="Employers logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.firstAmerican.childImageSharp.fluid}
                alt="First-American logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.foremost.childImageSharp.fluid}
                alt="Foremost logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.guardInsuranceGroup.childImageSharp.fluid}
                alt="Guard Insurance Group logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.hagerty.childImageSharp.fluid}
                alt="Hagerty logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.hanoverInsuranceGroup.childImageSharp.fluid}
                alt="Hanover-Insurance-Group logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.hartford.childImageSharp.fluid}
                alt="Hartford logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.healthNet.childImageSharp.fluid}
                alt="Health-Net logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.icwGroup.childImageSharp.fluid}
                alt="ICW-Group logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.kaiserPermanente.childImageSharp.fluid}
                alt="Kaiser-Permanente logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.libertyMutualInsurance.childImageSharp.fluid}
                alt="Liberty-Mutual-insurance logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.markel.childImageSharp.fluid}
                alt="Markel logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.nationalInterstate.childImageSharp.fluid}
                alt="National Interstate logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.nationwide.childImageSharp.fluid}
                alt="Nationwide logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.nonprofitInsurance.childImageSharp.fluid}
                alt="Nonprofit-Insurance logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.northlandInsurance.childImageSharp.fluid}
                alt="Northland Insurance logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.philadelphiaInsuranceCo.childImageSharp.fluid}
                alt="Philadelphia Insurance Co logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.progressive.childImageSharp.fluid}
                alt="Progressive logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.qbeInsurance.childImageSharp.fluid}
                alt="QBE Insurance logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.sharp.childImageSharp.fluid}
                alt="Sharp logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={
                  data.stateCompensationInsuranceFund.childImageSharp.fluid
                }
                alt="State Compensation Insurance Fund logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.tokioMarineHCC.childImageSharp.fluid}
                alt="Tokio Marine HCC logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.travelers.childImageSharp.fluid}
                alt="Travelers logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.unitedHealthCare.childImageSharp.fluid}
                alt="UnitedHealthCare logo"
              />
            </div>
            <div>
              <Img
                className="mx-auto"
                fluid={data.zenith.childImageSharp.fluid}
                alt="Zenith logo"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/carriers-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/carriers-twitter.jpg" }
    ) {
      publicURL
    }
    aetna: file(relativePath: { eq: "carriers/Aetna.png" }) {
      childImageSharp {
        fluid(maxWidth: 123) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    amTrust: file(relativePath: { eq: "carriers/AmTrust.png" }) {
      childImageSharp {
        fluid(maxWidth: 122) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    anthemBlueCross: file(
      relativePath: { eq: "carriers/Anthem-Blue-Cross.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 155) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    benchmark: file(relativePath: { eq: "carriers/Benchmark.png" }) {
      childImageSharp {
        fluid(maxWidth: 163) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    blueOfCalifornia: file(
      relativePath: { eq: "carriers/Blue-of-California.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 103) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    californiaChoice: file(
      relativePath: { eq: "carriers/California-Choice.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 165) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    capitalInsurance: file(
      relativePath: { eq: "carriers/Capital-Insurance.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    cnaSurety: file(relativePath: { eq: "carriers/CNA-Surety.png" }) {
      childImageSharp {
        fluid(maxWidth: 160) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    compWest: file(relativePath: { eq: "carriers/CompWest.png" }) {
      childImageSharp {
        fluid(maxWidth: 107) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    deansHomer: file(relativePath: { eq: "carriers/Deans-Homer.png" }) {
      childImageSharp {
        fluid(maxWidth: 165) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    employers: file(relativePath: { eq: "carriers/Employers.png" }) {
      childImageSharp {
        fluid(maxWidth: 146) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    firstAmerican: file(relativePath: { eq: "carriers/First-American.png" }) {
      childImageSharp {
        fluid(maxWidth: 107) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    foremost: file(relativePath: { eq: "carriers/Foremost.png" }) {
      childImageSharp {
        fluid(maxWidth: 143) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    guardInsuranceGroup: file(
      relativePath: { eq: "carriers/Guard-Insurance-Group.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 95) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    hagerty: file(relativePath: { eq: "carriers/Hagerty.png" }) {
      childImageSharp {
        fluid(maxWidth: 154) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    hanoverInsuranceGroup: file(
      relativePath: { eq: "carriers/Hanover-Insurance-Group.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 105) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    hartford: file(relativePath: { eq: "carriers/Hartford.png" }) {
      childImageSharp {
        fluid(maxWidth: 110) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    healthNet: file(relativePath: { eq: "carriers/Health-Net.png" }) {
      childImageSharp {
        fluid(maxWidth: 154) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    icwGroup: file(relativePath: { eq: "carriers/ICW-Group.png" }) {
      childImageSharp {
        fluid(maxWidth: 102) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    kaiserPermanente: file(
      relativePath: { eq: "carriers/Kaiser-Permanente.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 118) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    libertyMutualInsurance: file(
      relativePath: { eq: "carriers/Liberty-Mutual-Insurance.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 101) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    markel: file(relativePath: { eq: "carriers/Markel.png" }) {
      childImageSharp {
        fluid(maxWidth: 142) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    nationalInterstate: file(
      relativePath: { eq: "carriers/National-Interstate.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 147) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    nationwide: file(relativePath: { eq: "carriers/Nationwide.png" }) {
      childImageSharp {
        fluid(maxWidth: 162) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    nonprofitInsurance: file(
      relativePath: { eq: "carriers/Nonprofit-Insurance.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 106) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    northlandInsurance: file(
      relativePath: { eq: "carriers/Northland-Insurance.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 91) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    philadelphiaInsuranceCo: file(
      relativePath: { eq: "carriers/Philadelphia-Insurance-Co.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 147) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    progressive: file(relativePath: { eq: "carriers/Progressive.png" }) {
      childImageSharp {
        fluid(maxWidth: 164) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    qbeInsurance: file(relativePath: { eq: "carriers/QBE-Insurance.png" }) {
      childImageSharp {
        fluid(maxWidth: 111) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    sharp: file(relativePath: { eq: "carriers/Sharp.png" }) {
      childImageSharp {
        fluid(maxWidth: 98) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    stateCompensationInsuranceFund: file(
      relativePath: { eq: "carriers/State-Compensation-Insurance-Fund.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 76) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    tokioMarineHCC: file(
      relativePath: { eq: "carriers/Tokio-Marine-HCC.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 147) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    travelers: file(relativePath: { eq: "carriers/Travelers.png" }) {
      childImageSharp {
        fluid(maxWidth: 155) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    unitedHealthCare: file(
      relativePath: { eq: "carriers/UnitedHealthCare.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 156) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    zenith: file(relativePath: { eq: "carriers/Zenith.png" }) {
      childImageSharp {
        fluid(maxWidth: 107) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
