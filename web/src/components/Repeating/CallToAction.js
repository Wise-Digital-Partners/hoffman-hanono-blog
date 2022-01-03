import React from "react";
// import { useStaticQuery, graphql } from "gatsby"

// import BannerImage from "../Banner/BannerImage"
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const CTA = () => {
  // const data = useStaticQuery(graphql`
  //     {
  //         ctaBannerDesktop: file(relativePath: {eq: "repeating/CTA-Desktop.jpg"}) {
  //             childImageSharp {
  //                 fixed(width: 960, height: 600) {
  //                 ...GatsbyImageSharpFixed_withWebp
  //                 }
  //             }
  //         }
  //         ctaBannerMobile: file(relativePath: {eq: "repeating/CTA-Mobile.jpg"}) {
  //             childImageSharp {
  //                 fixed(width: 767, height: 450) {
  //                 ...GatsbyImageSharpFixed_withWebp
  //                 }
  //             }
  //         }
  //     }
  // `)

  // const ctaImages = [
  //     data.ctaBannerDesktop.childImageSharp.fixed,
  //     {
  //     ...data.ctaBannerMobile.childImageSharp.fixed,
  //     media: `(max-width: 767px)`,
  //     },
  // ]

  return (
    <div className="container">
      <section
        id="call-to-action-module"
        className="wrapper relative bg-primary_600 pt-24 pb-20 md:py-32 px-6 rounded-xl md:rounded-3xl"
      >
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-white">Peace of mind is priceless.</h2>
          <p className="text-white text-xlarge md:text-2xlarge opacity-75 mb-10">
            Let us help you get the right coverage for the right price.
            <br /> Get a quote today!
          </p>
          <div className="mt-5 sm:mt-8 md:flex justify-center">
            <ButtonSolid
              className="w-full md:w-auto mb-4 md:mb-0 md:mr-5 is-light"
              data="modal-quote"
              text="Get a Quote"
            />
            <ButtonGhost
              className="w-full md:w-auto is-light"
              data="modal-contact"
              text="Contact"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
