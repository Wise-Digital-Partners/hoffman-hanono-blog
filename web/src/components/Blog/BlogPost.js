import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { differenceInDays, formatDistance, format } from "date-fns";
import PortableText from "./portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

// import RecentBlogPosts from "../Repeating/RecentBlogPosts";
// import Newsletter from "../Form/Newsletter";

const StyledContent = styled.div`
  /* p,
  span,
  li {
    ${tw``}
  } */
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
`;

function BlogPost(props) {
  const {
    siteMetadata,
    _rawBody,
    author,
    slug,
    // categories,
    title,
    image,
    publishedAt,
  } = props;
  return (
    <article className="pt-12 md:pt-16 pb-20 md:pb-32">
      <div className="container">
        <div className="max-w-[800px] mx-auto mb-10">
          <header>
            <h1>{title}</h1>
          </header>

          <div className="flex justify-between items-end mb-8 md:mb-10">
            <div className="flex">
              {author && author.image && (
                <div className="mr-3">
                  <GatsbyImage
                    image={author.image.asset.gatsbyImageData}
                    className="w-12 h-12 rounded-full z-0"
                  />
                </div>
              )}

              <div>
                {author && (
                  <div className="text-primary_600 font-heading font-semibold flex items-center space-x-1">
                    <span>{author.name}</span>
                  </div>
                )}

                {publishedAt && (
                  <div className="text-sm text-gray-900 font-normal">
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                      ? formatDistance(new Date(publishedAt), new Date())
                      : format(new Date(publishedAt), "MMMM d, yyyy")}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-7">
              <FacebookShareButton
                url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
                quote={title}
              >
                <i className="fab fa-facebook-f text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
              </FacebookShareButton>

              <LinkedinShareButton
                url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
                title={title}
              >
                <i className="fab fa-linkedin-in text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
              </LinkedinShareButton>

              <TwitterShareButton
                url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
                title={title}
              >
                <i className="fab fa-twitter text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
              </TwitterShareButton>

              <EmailShareButton
                url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
                subject={title}
              >
                <i className="fas fa-envelope text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
              </EmailShareButton>
            </div>
          </div>
          {/* {categories && (
            <div className="mb-8">
              <ul>
                {categories.map((category) => (
                  <li
                    className="text-primary-500 font-bold tracking-widest uppercase"
                    key={category._id}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>

        {image && image.asset && (
          <div className="mb-16 md:mb-20">
            <GatsbyImage
              image={props.image.asset.gatsbyImageData}
              className="w-full"
            />
          </div>
        )}

        <StyledContent className="max-w-[800px] mx-auto mb-16 md:mb-20">
          {_rawBody && <PortableText blocks={_rawBody} />}
        </StyledContent>

        <div className="flex items-center justify-center space-x-7 mb-20 md:mb-30">
          <FacebookShareButton
            url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
            quote={title}
          >
            <i className="fab fa-facebook-f text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
          </FacebookShareButton>

          <LinkedinShareButton
            url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
            title={title}
          >
            <i className="fab fa-linkedin-in text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
          </LinkedinShareButton>

          <TwitterShareButton
            url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
            title={title}
          >
            <i className="fab fa-twitter text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
          </TwitterShareButton>

          <EmailShareButton
            url={`${siteMetadata.siteUrl}/blog/${slug.current}/`}
            subject={title}
          >
            <i className="fas fa-envelope text-primary_600 hover:text-primary_400 text-xl transition-colors duration-300 ease-linear"></i>
          </EmailShareButton>
        </div>

        {/* <div className="max-w-[800px] mx-auto mb-20 md:mb-28 border border-gray-200 px-6 py-10 md:p-10 lg:p-20 text-center">
          <div className="max-w-[480px] mx-auto">
            <p className="heading-four">Subscribe Heading</p>
            <p>
              15-20 words lorem ipsum dolor sit amet, consectetur adipiscing
              elit ut aliquam, purus sit amet luctus venenatis
            </p>
            <Newsletter />
          </div>
        </div> */}
      </div>

      {/* <RecentBlogPosts heading={false} className="mb-16 md:mb-32" /> */}
    </article>
  );
}

export default BlogPost;
