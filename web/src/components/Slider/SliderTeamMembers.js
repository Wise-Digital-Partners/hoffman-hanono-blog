import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-dots {
    ${tw`mt-6`}
  }
  .slick-list {
    ${tw``}
  }
  .slick-track {
    @media (min-width: 768px) {
      ${tw`flex items-center`}
    }
  }
  .slick-slide {
    @media (max-width: 767px) {
      ${tw`px-2`}
    }
    div {
      ${tw`outline-none`}
    }
  }
  .slick-prev,
  .slick-next {
    ${tw`top-auto bottom-0 transform translate-y-0 bg-white w-12 h-12 border border-solid border-gray-200 rounded-full transition-all duration-300 ease-linear z-10`}
    &:before {
      ${tw`hidden`}
    }
    i {
      ${tw`text-primary_600 text-sm transition-all duration-300 ease-linear`}
    }
    &:hover {
      ${tw`bg-primary_600 border-primary_600`}
      i {
        ${tw`text-white`}
      }
    }
    @media (max-width: 767px) {
      ${tw`translate-y-24`}
    }
  }
  .slick-prev {
    @media (min-width: 768px) {
      ${tw`left-auto right-0 mr-16`}
    }
    @media (max-width: 767px) {
      ${tw`left-0`}
    }
  }
  .slick-next {
    ${tw`right-0`}
  }
`;
const Slider = ({ slideIndex }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Previous Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-chevron-left"></i>
      </button>
    );
  }

  // Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slick-next" aria-label="Next Slide">
        <i className="far fa-chevron-right"></i>
      </button>
    );
  }

  const data = useStaticQuery(graphql`
    {
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
  `);

  return (
    <StyledSlider>
      <div className="container p-0">
        <Slick {...sliderSettings} ref={slider}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-12">
              <div>
                <Img
                  fluid={data.davidHoffman.childImageSharp.fluid}
                  alt="David Hoffman"
                />
              </div>
              <div className="md:mt-6">
                <header className="mb-8 md:mb-12">
                  <p className="heading-three mb-2">David Hoffman</p>
                  <p className="text-gray-900 opacity-50 text-large md:text-xl mb-0">
                    President
                  </p>
                </header>
                <p className="mb-0">
                  David was born and raised in San Diego. A graduate of Hilltop
                  High School, he attended San Diego State University and
                  University of Phoenix earning a degree in Business Management.
                  He has been with Hoffman Hanono Insurance since 1995 and
                  became President in 2006, the third generation to do so. David
                  and his wife have three children. In his spare time, he enjoys
                  fly fishing, traveling, and playing golf.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-12">
              <div>
                <Img
                  fluid={data.ezraHanono.childImageSharp.fluid}
                  alt="Ezra Hanono"
                />
              </div>
              <div className="md:mt-6">
                <header className="mb-8 md:mb-12">
                  <p className="heading-three mb-2">Ezra Hanono</p>
                  <p className="text-gray-900 opacity-50 text-large md:text-xl mb-0">
                    Partner
                  </p>
                </header>
                <p className="mb-0">
                  Ezra has been with Hoffman Hanono Insurance since 1976 and has
                  been a partner since 1985. He believes that family is always
                  first and this philosophy transitions to his clients–he treats
                  all of his clients like family. Ezra has been married for 46
                  years and he has three children and one grandchild. In his
                  free time he enjoys backyard BBQs with family and friends,
                  traveling on cruises, and snow skiing. His favorite activity
                  as of late has been swimming with his 18 month old grandson.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-12">
              <div>
                <Img
                  fluid={data.michelleTorres.childImageSharp.fluid}
                  alt="Michelle Torres"
                />
              </div>
              <div className="md:mt-6">
                <header className="mb-8 md:mb-12">
                  <p className="heading-three mb-2">Michelle Torres</p>
                  <p className="text-gray-900 opacity-50 text-large md:text-xl mb-0">
                    Operations Manager
                  </p>
                </header>
                <p className="mb-0">
                  Michelle has been with Hoffman Hanono Insurance since 2005.
                  She began her career at an entry-level position and has worked
                  as a Commercial & Personal Lines Account Manager. She joined
                  the management team in 2017. Michelle is a natural leader and
                  is a great coach to her team. She works directly with our
                  Agency System and Account Managers to try and streamline our
                  procedures. Michelle’s number one goal is to be sure that our
                  clients receive the highest level of customer service. In her
                  free time, she enjoys reading, and spending time with her
                  family.{" "}
                </p>
              </div>
            </div>
          </div>
        </Slick>
      </div>

      <div className="slider-count"></div>
    </StyledSlider>
  );
};

export default Slider;
