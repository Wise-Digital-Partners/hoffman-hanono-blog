import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-slide {
    ${tw`text-center`}
    div {
      ${tw`outline-none`}
    }
  }
  .slick-prev,
  .slick-next {
    ${tw`bg-white border border-solid border-gray-200 rounded-full transition-all duration-300 ease-linear z-10`}
    height: 57px;
    width: 57px;
    &:before {
      ${tw`hidden`}
    }
    i {
      ${tw`text-primary_600 text-base transition-all duration-300 ease-linear`}
    }
    &:hover {
      ${tw`bg-primary_600 border-primary_600`}
      i {
        ${tw`text-white`}
      }
    }
    @media (max-width: 767px) {
      ${tw`hidden`}
    }
  }
  .slick-prev {
    ${tw`left-0`}
  }
  .slick-next {
    ${tw`right-0`}
  }
  .slider-nav {
    ${tw`mx-auto`}
    max-width: 225px;
    .slick-slide {
      ${tw`transition-opacity duration-300 ease-linear`}
      &:not(.slick-current) {
        ${tw`opacity-25`}
      }
    }
  }
  blockquote {
    ${tw`max-w-4xl mx-auto`}
  }
  q {
    ${tw`block text-xl leading-8 text-gray-900 mb-12`}
  }
  footer {
    @media (min-width: 768px) {
      ${tw`opacity-75`}
    }
  }
`;
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
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

    function NextArrow(props) {
      const { onClick } = props;
      return (
        <button
          onClick={onClick}
          className="slick-next"
          aria-label="Next Slide"
        >
          <i className="far fa-chevron-right"></i>
        </button>
      );
    }

    return (
      <StyledSlider className={`wrapper`}>
        <StaticQuery
          query={graphql`
            {
              quotationMark: file(
                relativePath: { eq: "repeating/quotation-mark.svg" }
              ) {
                publicURL
              }
              ireDevelopment: file(
                relativePath: { eq: "repeating/IRE-Development.png" }
              ) {
                childImageSharp {
                  fixed(width: 40) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              kimbleCo: file(
                relativePath: { eq: "repeating/Kimble-+-Co.png" }
              ) {
                childImageSharp {
                  fixed(width: 49) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              wlInvestments: file(
                relativePath: { eq: "repeating/WL-Investments.png" }
              ) {
                childImageSharp {
                  fixed(width: 51) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          `}
          render={(data) => (
            <div className="container">
              <img
                className="mx-auto mb-12 md:mb-24"
                src={data.quotationMark.publicURL}
                alt="Quotation mark"
              />
              <Slick
                dots={false}
                arrows={true}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
                speed={750}
                autoplay={true}
                autoplaySpeed={7500}
                slidesToShow={1}
                slidesToScroll={1}
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
              >
                <div>
                  <blockquote>
                    <q>
                      I have been with Hoffman and Hanono for over 20 years and
                      have always appreciated the professional service I receive
                      from the entire staff. They are always courteous and very
                      professional. I would highly recommend them to anyone who
                      needs either personal or commercial insurance.
                    </q>
                    <footer>Maty Adato | WL Investments</footer>
                  </blockquote>
                </div>

                <div>
                  <blockquote>
                    <q>
                      Hoffman Hanono Insurance Services is so proactive and
                      attentive to our insurance needs; always marketing our
                      bids way ahead of policy expiration dates. The company
                      provides professional, fantastic services! We couldn’t be
                      happier!
                    </q>
                    <footer>Chinh Do | Controller, IRE Development</footer>
                  </blockquote>
                </div>

                <div>
                  <blockquote>
                    <q>
                      Osmar has been working on our account for a number of
                      years. He has shown the ability to understand our
                      insurance needs, and he’s been able to provide us with the
                      best policies for our company given our financial
                      resources. He’s always been very responsive when dealing
                      with any issues. We’ve been extremely satisfied with the
                      level of service from the entire Hoffman Hanono Insurance
                      team.
                    </q>
                    <footer>Mike Nobe | CFO At Kimble & Company Inc</footer>
                  </blockquote>
                </div>
              </Slick>

              <Slick
                className="slider-nav mt-10 md:mt-12"
                slidesToShow={3}
                arrows={false}
                dots={false}
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
              >
                <div>
                  <Img
                    fixed={data.wlInvestments.childImageSharp.fixed}
                    alt="WL Investments"
                  />
                </div>
                <div>
                  <Img
                    fixed={data.ireDevelopment.childImageSharp.fixed}
                    alt="IRE Development"
                  />
                </div>
                <div>
                  <Img
                    fixed={data.kimbleCo.childImageSharp.fixed}
                    alt="Kimble + Co"
                  />
                </div>
              </Slick>
            </div>
          )}
        />
      </StyledSlider>
    );
  }
}
