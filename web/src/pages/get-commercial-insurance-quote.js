import React from "react";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

const Page = () => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Get a Commercial Insurance Quote in San Diego"
        description="Do you need to get a good commercial insurance quote in San Diego County? Hoffman Hanono Insurance Services can help. Get a free quote today!"
        openGraphImage=""
        twitterOpenGraphImage=""
      />

      <div className="container">
        <section className="wrapper bg-gray-100 pt-16 pb-12 px-6 md:py-24 mb-10 md:mb-24 rounded-xl md:rounded-3xl">
          <header className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="heading-three">Get a Commercial Insurance Quote</h1>
            <p>
              Get the right coverage for the right price! Call us or fill out
              the form for your free commercial insurance quote. Need a quote
              for personal insurance? Click{" "}
              <button data-modal-open="modal-personal-insurance">here.</button>
            </p>
            <p className="mb-0 text-medium">
              <i>
                *Don't see your business type below?{" "}
                <button data-modal-open="modal-contact">Contact us</button>{" "}
                directly for a personalized quote.
              </i>
            </p>
          </header>
          <div className="bg-white shadow-xl rounded-md max-w-2xl mx-auto">
            <iframe
              src="https://smallbizquote.thehartford.com/app/index.html#?prcd=72160140&Tcode=RE650003&lob=pr-gl-wc-ca-pl"
              title="Commercial Insurance Quote"
              width="100%"
              height="695"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Page;
