import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import ButtonWithIcon from "../Button/ButtonWithIcon";

const About = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      about: file(relativePath: { eq: "repeating/about-us-graphic.png" }) {
        childImageSharp {
          fluid(maxWidth: 1176) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div>
      <section className={`wrapper ${className}`}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 md:gap-x-24 items-center">
            <div className="md:col-start-1 md:col-end-7">
              <Img
                fluid={data.about.childImageSharp.fluid}
                alt="About Us graphic"
              />
            </div>
            <div className="md:col-end-13 md:col-span-6">
              <h2>First-Class Service Since 1959</h2>
              <p>
                Our story started with founder Jerry Hoffman, who aimed to offer
                cost-effective insurance solutions, superior customer service,
                and ultimately, peace of mind. Since then, the company has been
                passed down generations without losing our founder’s commitment.{" "}
              </p>
              <ButtonWithIcon
                href="/about-hoffman-hanono-insurance/"
                text={[
                  "Learn More",
                  <i className="far fa-arrow-right ml-2"></i>,
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
