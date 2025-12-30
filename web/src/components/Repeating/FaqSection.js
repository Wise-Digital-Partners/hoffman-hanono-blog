import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import PortableText from "../insurance/portableText";

const FaqSection = ({ className, faqGroup, isHardcoded }) => {
  const [activeFaq, setActiveFaq] = React.useState(null);

  return (
    <div>
      <section className={`wrapper ${className}`}>
        <div className="container flex flex-col items-center">
          <h2>{faqGroup.title}</h2>
          <div className="w-full max-w-[800px] border-t-[1px] pt-5 gap-y-5 flex flex-col">
            {faqGroup.faqs.map((faq, index) => (
              <div key={index} className="w-full border-b-[1px] pb-5">
                <div
                  className="flex gap-y-2 justify-between w-full items-start cursor-pointer"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <h4 className="!capitalize font-normal">{faq.title}</h4>
                  <img
                    src="/images/faq-chevron-down.svg"
                    alt="chevron-icon"
                    className={`${
                      activeFaq === index ? "rotate-180" : ""
                    } transition-all ease-linear duration-200`}
                  />
                </div>
                {isHardcoded ? (
                  <p className={activeFaq === index ? "" : "hidden"}>
                    {faq.body}
                  </p>
                ) : (
                  <p className="mb-0">
                    {faq._rawBody && <PortableText blocks={faq._rawBody} />}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
