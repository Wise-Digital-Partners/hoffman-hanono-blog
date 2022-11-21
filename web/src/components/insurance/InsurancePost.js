import React from "react";
// import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import BackgroundImage from "gatsby-background-image";
// import { differenceInDays, formatDistance, format } from "date-fns";
import PortableText from "./portableText";
// import HeroSplit from "./HeroSplit";

import styled from "@emotion/styled";
import tw from "twin.macro";
// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   EmailShareButton,
// } from "react-share";

// import RecentInsurancePosts from "../Repeating/RecentInsurancePosts";
// import Newsletter from "../Form/Newsletter";

const StyledContent = styled.div`
  ul {
    ${tw` pl-2 mb-6 flex flex-col space-y-0.5`}
  }
  ol {
    ${tw`list-decimal pl-7 mb-6 flex flex-col space-y-0.5`}
  }
`;

;


function InsurancePost(props) {
  const {
    siteMetadata,
    _rawBody,
    _rawBodySecond,
    _rawBodyThird,
    author,
    slug,
    nav,
    categories,
    title,
    titleSecond,
    titleThird,
    image,
    imageSecond,
    publishedAt,
  } = props;

  return (
    <>
      <section className="pt-0 mb-20 lg:pt-8 md:mb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0 lg:gap-x-24 items-center">
            <div className="row-start-2 lg:row-start-1">
              <h1>{title}</h1>
              <p className="mb-0">
                {_rawBody && <PortableText blocks={_rawBody} />}
              </p>
            </div>

            <div className="row-start-1 lg:row-start-1 relative">
              <GatsbyImage
                image={props.image.asset.gatsbyImageData}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section two */}
      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-24 items-center">
            <div className="md:col-start-1 md:col-end-7">
              <GatsbyImage
                image={props.imageSecond.asset.gatsbyImageData}
                className="w-full"
              />
            </div>
            <div className="md:col-end-13 md:col-span-6">
              <h2>{titleSecond}</h2>
              <p className="mb-0">
                <StyledContent className="styled-list">
                  {_rawBodySecond && <PortableText blocks={_rawBodySecond} />}
                </StyledContent>
              </p>
              {/* <ul className="styled-list">
                <li>
                  Insurance for non-emergency medical transportation companies
                </li>
                <li>Mistakes or Negligence</li>
                <li>Misrepresentation</li>
                <li>Copyright Infringement</li>
                <li>Breach of Contract</li>
                <li>Failure to Deliver a Promised Service On Timet</li>
                <li>Personal Injury</li>
                <li>And more…</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
      {/* secton three */}
      <div className="container">
        <section className="wrapper bg-gray-100 pt-24 pb-20 md:py-32 px-6 rounded-xl md:rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <p className="decorative-text">Custom Solutions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <div>
                <h2>{titleThird}</h2>
              </div>
              <div>
                <p className="mb-0">
                  {_rawBodyThird && <PortableText blocks={_rawBodyThird} />}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default InsurancePost;

