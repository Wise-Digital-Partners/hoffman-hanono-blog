// import React from "react";
// import { graphql } from "gatsby";
// import PortableText from "../components/Blog/portableText";
// import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

// import Layout from "../components/Layout";
// import SearchEngineOptimization from "../components/SEO";
// import CallToAction from "../components/Repeating/CTA";
// import ButtonSolid from "../components/Button/ButtonSolid";

// export const query = graphql`
//   query TeamMemberTemplateQuery($id: String!) {
//     teamMember: sanityTeamMember(id: { eq: $id }) {
//       id
//       name
//       seoTitle
//       metaDescription
//       headshot {
//         asset {
//           gatsbyImageData(layout: CONSTRAINED, width: 160)
//         }
//       }
//       title
//       emailAddress
//       applyLink
//       phoneNumber
//       location
//       nmls
//       dreLicense
//       _rawBio
//     }
//   }
// `;

// const StyledContent = styled.div`
//   p,
//   span,
//   b,
//   li {
//     ${tw`md:text-xl`}
//   }
//   ul {
//     ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
//   }
//   ol {
//     ${tw`list-decimal pl-7 mb-6 flex flex-col space-y-0.5`}
//   }
// `;

// const Template = ({ data }) => {
//   return (
//     <Layout>
//       <SearchEngineOptimization
//         title={data.teamMember.seoTitle && data.teamMember.seoTitle}
//         description={
//           data.teamMember.metaDescription && data.teamMember.metaDescription
//         }
//         // openGraphImage={data.teamMember.openGraphImage && data.teamMember.openGraphImage.asset.url}
//         // twitterOpenGraphImage={
//         //   data.teamMember.twitterCardImage && data.teamMember.twitterCardImage.asset.url
//         // }
//       />

//       <section className="relative h-[96px] overflow-hidden md:h-[200px]">
//         <div className="absolute top-0 left-0 h-full w-full">
//           <StaticImage
//             src="../images/4.0 About/Hero.jpg"
//             loading="eager"
//             className="h-full"
//           />
//         </div>
//       </section>

//       <section className="-mt-20 pt-7 md:-mt-36 md:pt-16">
//         <div className="container">
//           {data.teamMember.headshot && (
//             <div className="mb-4 text-center md:mb-8">
//               <GatsbyImage
//                 image={data.teamMember.headshot.asset.gatsbyImageData}
//                 alt={data.teamMember.name}
//                 loading="eager"
//                 className="z-0 w-[104px] rounded-full border-4 border-white md:w-[160px]"
//               />
//             </div>
//           )}

//           <div>
//             <h1 className="mb-4 text-center">{data.teamMember.name}</h1>

//             {data.teamMember.title && (
//               <div className="mb-1.5 flex justify-center md:mb-3.5">
//                 <div className="font-heading text-xl font-bold text-typography-heading">
//                   {data.teamMember.title}
//                 </div>
//               </div>
//             )}

//             {data.teamMember.emailAddress && (
//               <div className="mb-4 text-center md:mb-6">
//                 <a
//                   href={`mailto:${data.teamMember.emailAddress}`}
//                   className="font-normal text-gray-600 no-underline"
//                 >
//                   {data.teamMember.emailAddress}
//                 </a>
//               </div>
//             )}

//             {data.teamMember.applyLink && (
//               <div className="mb-8 flex justify-center md:mb-10">
//                 <ButtonSolid
//                   href={data.teamMember.applyLink}
//                   outboundLink={true}
//                   text="Apply Now"
//                 />
//               </div>
//             )}

//             {(data.teamMember.phoneNumber ||
//               data.teamMember.location ||
//               data.teamMember.nmls) && (
//               <div className="mx-auto mb-12 flex max-w-[960px] flex-wrap rounded-lg border border-gray-200 bg-white text-center md:mb-14 md:flex-nowrap md:rounded-lg">
//                 {data.teamMember.phoneNumber && (
//                   <div
//                     className={`w-full px-4 py-7 md:w-auto md:flex-1 md:pt-9 md:pb-4`}
//                   >
//                     <a
//                       href={`tel:${data.teamMember.phoneNumber
//                         .replace(/[()]/g, "")
//                         .replace(/ /g, "-")}`}
//                       className="mb-2 font-heading text-xl font-bold text-gray-900 no-underline md:mb-1"
//                     >
//                       {data.teamMember.phoneNumber}
//                     </a>
//                     <div className="text-sm font-bold uppercase tracking-wide text-gray-400">
//                       Phone
//                     </div>
//                   </div>
//                 )}

//                 {data.teamMember.location && (
//                   <div
//                     className={`w-full border-t border-gray-200 px-4 py-7 md:w-auto md:flex-1 md:border-t-0 md:border-l md:pt-9 md:pb-4`}
//                   >
//                     <div className="mb-2 font-heading text-xl font-bold text-gray-900 md:mb-1">
//                       {data.teamMember.location}
//                     </div>
//                     <div className="text-sm font-bold uppercase tracking-wide text-gray-400">
//                       Location
//                     </div>
//                   </div>
//                 )}

//                 {data.teamMember.nmls && (
//                   <div
//                     className={`w-full border-t border-gray-200 px-4 py-7 md:w-auto md:flex-1 md:border-t-0 md:border-l md:pt-9 md:pb-4`}
//                   >
//                     <div className="mb-2 font-heading text-xl font-bold text-gray-900 md:mb-1">
//                       #{data.teamMember.nmls}
//                     </div>
//                     <div className="text-sm font-bold uppercase tracking-wide text-gray-400">
//                       NMLS
//                     </div>
//                   </div>
//                 )}

//                 {data.teamMember.dreLicense && (
//                   <div
//                     className={`w-full border-t border-gray-200 px-4 py-7 md:w-auto md:flex-1 md:border-t-0 md:border-l md:pt-9 md:pb-4`}
//                   >
//                     <div className="mb-2 font-heading text-xl font-bold text-gray-900 md:mb-1">
//                       #{data.teamMember.dreLicense}
//                     </div>
//                     <div className="text-sm font-bold uppercase tracking-wide text-gray-400">
//                       CA DRE Salesperson License
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {data.teamMember._rawBio && (
//               <div className="mx-auto mb-20 mt-12 max-w-[720px] md:mb-32 md:mt-14">
//                 <StyledContent>
//                   <PortableText blocks={data.teamMember._rawBio} />
//                 </StyledContent>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       <CallToAction />
//     </Layout>
//   );
// };

// export default Template;
