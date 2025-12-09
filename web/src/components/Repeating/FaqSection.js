import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";

const FaqSection = ({ className, faqGroup }) => {
  const [activeFaq, setActiveFaq] = React.useState(null);

  return (
    <div>
      <section className={`wrapper ${className}`}>
        <div className="container flex flex-col items-center">
          <h2>FAQ</h2>
          <div className="w-full max-w-[800px] border-t-[1px] pt-5 gap-y-5 flex flex-col">
            {faqGroup.faqs.map((faq, index) => (
              <div key={index} className="w-full border-b-[1px] pb-5">
                <div
                  className="flex gap-y-2 justify-between w-full items-start cursor-pointer"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <h4>{faq.title}</h4>
                  <img
                    src="/images/faq-chevron-down.svg"
                    alt="chevron-icon"
                    className={`${
                      activeFaq === index ? "rotate-180" : ""
                    } transition-all ease-linear duration-200`}
                  />
                </div>
                <p className={activeFaq === index ? "" : "hidden"}>
                  {faq.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
