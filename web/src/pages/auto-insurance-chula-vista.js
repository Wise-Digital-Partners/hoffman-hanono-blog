import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// import ButtonGhost from "../components/Button/ButtonGhost"
import About from "../components/Repeating/About";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
import CallToAction from "../components/Repeating/CallToAction";
import HeroAlignEnd from "../components/Hero/HeroAlignEnd";
import HeroSplit from "../components/Hero/HeroSplit";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import SliderTestimonials from "../components/Slider/SliderTestimonials";
import WhyUs from "../components/Repeating/WhyUs";
import FaqSection from "../components/Repeating/FaqSection";

const faqGroup = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      title: "1. What is auto insurance?",
      body: "Auto insurance provides financial protection for you, your vehicle, and your passengers in the event of accidents, theft, vandalism, or other covered events. It also offers liability protection if you cause injury to someone else or damage their property.",
    },
    {
      title:
        "2. What types of auto insurance coverage are available in Chula Vista?",
      body: "Drivers can choose from several coverage options depending on their needs. Liability insurance protects you financially if you cause bodily injury or property damage to others. Collision coverage pays for repairs to your own vehicle after an accident. Comprehensive coverage safeguards against theft, natural disasters, or other unexpected events. Additionally, MedPay, or Personal Injury Protection, covers medical bills and funeral expenses for you and your passengers regardless of fault.",
    },
    {
      title: "3. What are California's minimum auto insurance requirements?",
      body: "As of January 1, 2025, California requires $30,000 for bodily injury or death per person, $60,000 for bodily injury or death per accident, and $15,000 for property damage per accident. These limits have increased from previous minimums and ensure that all drivers carry a baseline level of financial protection.",
    },
    {
      title: "4. Who needs collision and comprehensive coverage?",
      body: "Collision coverage is generally required if you are financing or leasing your vehicle, while comprehensive coverage protects against theft, vandalism, and weather-related damage. Even for fully paid-off vehicles, many drivers opt for both collision and comprehensive coverage to maintain peace of mind and protect their investment.",
    },
    {
      title: "5. How do I choose the right auto insurance in Chula Vista?",
      body: "Choosing the right policy depends on your driving habits, lifestyle, and the type of vehicle you own. Daily commuters may need higher liability and full coverage to account for frequent travel. Remote workers might qualify for low-mileage discounts but still need sufficient liability protection. Families with new drivers should consider increased coverage limits along with collision and MedPay. Luxury vehicle owners often benefit from both collision and comprehensive coverage to protect their investment. Budget-conscious drivers can balance cost with coverage to ensure essential protection is maintained.",
    },
    {
      title: "6. Why choose Hoffman Hanono for auto insurance?",
      body: "Hoffman Hanono has served San Diego and Chula Vista since 1959, offering personalized insurance solutions with a focus on quality service and trusted carriers. Their family-owned, customer-focused approach ensures each policy is tailored to the driver's unique needs at a competitive price.",
    },
    {
      title: "7. How do I get a quote for auto insurance?",
      body: "You can request a quote online, by phone at (619) 420-1861, or via email at info@hhinsurance.com. Hoffman Hanono's agents guide you through selecting the coverage that best fits your lifestyle, driving habits, and financial goals.",
    },
  ],
};

const Page = ({ data }) => {
  const newHeroImages = [
    data.newHeroDesktop.childImageSharp.fixed,
    {
      ...data.newHeroMobile.childImageSharp.fixed,
      media: `(max-width: 767px)`,
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Auto Insurance Chula Vista | Hoffman Hanono"
        description="When you need auto insurance in Chula Vista & beyond, go with the best. Hoffman Hanono brings you the right coverage for your needs. Get a free quote!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <HeroAlignEnd
        images={newHeroImages}
        position="50% 50%"
        maxHeightDesktop="600px"
        maxHeightMobile="580px"
      >
        <div className="max-w-2xl">
          <p className="text-white font-heading text-mobile6xl md:text-6xl leading-tight font-bold mb-6">
            Beyond Coverage
          </p>
          <p className="text-white font-display text-mobile4xl md:text-2xl leading-tight mb-10">
            Your Peace of Mind is Our Business
          </p>
          <ButtonSolid data="modal-quote" text="Get a Quote" />
        </div>
      </HeroAlignEnd>

      <section className="mt-16 mb-12 md:mt-32 md:mb-24">
        <div className="container">
          <p className="decorative-text">Established in 1959</p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
            <div>
              <h1>Chula Vista Auto Insurance</h1>
            </div>
            <div>
              <p className="mb-0">
                Whether your car is parked or on the move, make sure you’re
                covered at all times. While we try to keep our vehicles safe,
                there’s no guarantee that others around us will do the same. At
                Hoffman Hanono, we match you with the right auto insurance that
                goes beyond just accident coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 items-center">
            <div className="md:col-start-1 md:col-end-8">
              <Img fluid={data.introDesktop.childImageSharp.fluid} />
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <h2>The Best Premiums for Your Needs</h2>
              <p>
                Account for all risks and choose the most comprehensive coverage
                for you, your vehicle and your passengers. Our partner carriers
                provide the following:
              </p>
              <ul className="styled-list">
                <li>
                  Liability coverage for bodily injury and property damage
                </li>
                <li>Personal injury protection</li>
                <li>Collision coverage</li>
                <li>Comprehensive coverage for vehicle theft or vandalism</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 items-center">
            <div className="md:col-start-1 md:col-end-5 row-start-2 md:row-start-1">
              <h2>The Best Premiums for Your Needs</h2>
              <p>
                Account for all risks and choose the most comprehensive coverage
                for you, your vehicle and your passengers. Our partner carriers
                provide the following:
              </p>
              <ul className="styled-list">
                <li>
                  Liability coverage for bodily injury and property damage
                </li>
                <li>Personal injury protection</li>
                <li>Collision coverage</li>
                <li>Comprehensive coverage for vehicle theft or vandalism</li>
              </ul>
              {/* <ButtonWithIcon
                href="/personal-insurance-agency/"
                text={[
                  "View Products",
                  <i className="far fa-arrow-right ml-2"></i>,
                ]}
              /> */}
            </div>
            <div className="md:col-span-7 md:col-end-13 row-start-1">
              <Img fluid={data.whatsIncluded.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 items-center">
            <div className="">
              <h2>Comprehensive Auto Insurance Coverage in Chula Vista</h2>
              <p>
                Finding the right auto insurance in Chula Vista isn’t just about
                meeting California’s minimum requirements—it’s about
                personalizing your policy to fit your lifestyle, driving habits,
                and personal risk tolerance. At Hoffman & Hanono, we offer auto
                insurance packages for Chula Vista drivers who need policies
                tailored to their exact needs:
              </p>
              <h3>Liability Insurance</h3>
              <p>
                Required by California law, liability insurance protects your
                finances if you cause bodily injury or property damage. You
                should know that as of January 1, 2025, California’s minimum
                liability limits for auto insurance policies have increased:
              </p>
              <ul className="styled-list">
                <li>
                  $30,000 for bodily injury or death per person (up from
                  $15,000)
                </li>
                <li>
                  $60,000 for bodily injury or death per accident (up from
                  $30,000)
                </li>
                <li>
                  $15,000 for property damage per accident (up from $5,000)
                </li>
              </ul>
              <p>
                This means that if you’re carrying the old minimum coverage
                limits, you’ll need to update your policy to comply with the new
                California law.
              </p>
              <p>
                While these increased limits provide more robust protection,
                many Chula Vista auto insurance policyholders need increased
                protection.
              </p>
              <h3>Personal Injury Protection (MedPay)</h3>
              <p>
                In other states, drivers may carry personal injury protection
                (PIP) insurance, a “no-fault” policy that protects policyholders
                regardless of who causes the injury or property damage. While
                PIP insurance is not available in “at-fault” states like
                California, Chula Vista car insurance policyholders may choose
                to carry MedPay insurance, an optional policy that:
              </p>
              <ul className="styled-list">
                <li>
                  Covers medical bills and funeral expenses for you and
                  passengers, regardless of fault
                </li>
                <li>
                  Provides coverage if you are injured as a pedestrian,
                  passenger, or while using public transportation
                </li>
                <li>Pays out quickly, without a deductible or copay</li>
              </ul>
              <p>
                MedPay can be a smart investment, particularly for drivers who
                do not have health insurance coverage or need more robust
                protection.
              </p>
              <h3>Collision Coverage</h3>
              <p>
                Limited liability insurance covers damage to others, but it does
                not pay for repairs to your vehicle. This is where collision
                coverage kicks in.
              </p>
              <p>
                In California, collision coverage is optional—unless you are
                financing or leasing a vehicle. In such cases, most lenders
                require you to carry it. Many Chula Vista auto insurance
                policyholders choose collision coverage for peace of mind,
                knowing they are protected against costly repairs after an
                accident.
              </p>
              <h3>Comprehensive Coverage</h3>
              <p>
                Comprehensive coverage protects Chula Vista car insurance
                policyholders against unexpected events—whether it's theft, a
                fallen tree, or damage caused by a weather-related event. If you
                lease or finance your vehicle, lenders will likely require you
                to carry comprehensive coverage.
              </p>
              <p>
                However, many Chula Vista car insurance policyholders opt for
                comprehensive coverage even if their vehicle is paid off. Not
                only does it provide peace of mind, but it also protects your
                investment when life throws you an unexpected challenge.
              </p>
              <h2>Finding the Right Auto Insurance in Chula Vista, CA</h2>
              <p>
                Every driver in Chula Vista has unique auto insurance needs. If
                you’re unsure which coverage options best suit your lifestyle
                and risk tolerance, consider the following:
              </p>
              <ul className="styled-list">
                <li className="!inline-block">
                  <strong>Daily commuters:</strong> If you travel Chula Vista's
                  busy roads and highways every day, consider higher liability
                  limits beyond California requirements. That, along with
                  comprehensive and collision coverage, gives you peace of mind,
                  knowing you're protected from unexpected events.
                </li>
                <li className="!inline-block">
                  <strong>Remote workers:</strong> If you spend most of the week
                  at home, you may qualify for low-mileage discounts on your
                  auto insurance in Chula Vista. However, it is still important
                  to maintain adequate liability coverage, even if you are an
                  occasional driver.
                </li>
                <li className="!inline-block">
                  <strong>Families with new drivers:</strong> Whether you are a
                  new driver or have a child who is learning to drive, we
                  recommend increasing limits on basic liability auto insurance
                  in Chula Vista. Also, consider combining basic coverage with
                  collision and MedPay to maximize protection.
                </li>
                <li className="!inline-block">
                  <strong>Luxury vehicle drivers:</strong> Protect your valuable
                  investment with comprehensive and collision coverage to
                  maximize protection against theft, vandalism, and accidents.
                </li>
                <li className="!inline-block">
                  <strong>Budget-conscious drivers:</strong> While you are
                  legally required to carry limited liability auto insurance in
                  Chula Vista, our agents will work with you to balance
                  liability limits with your budget—without compromising your
                  essential protection.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <SliderTestimonials />
      <FaqSection faqGroup={faqGroup} isHardcoded={true} />
      <About />
      <CallToAction />
    </Layout>
  );
};

export default Page;

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/auto-FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/auto-twitter.jpg" }
    ) {
      publicURL
    }
    newHeroDesktop: file(
      relativePath: { eq: "personal-insurance/auto-insurance/hero-desktop.jpg" }
    ) {
      childImageSharp {
        fixed(width: 2880, height: 1200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    newHeroMobile: file(
      relativePath: { eq: "personal-insurance/auto-insurance/hero-mobile.jpg" }
    ) {
      childImageSharp {
        fixed(width: 748, height: 748) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    personalInsurance: file(
      relativePath: { eq: "home/personal-insurance.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1392) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    introDesktop: file(
      relativePath: {
        eq: "personal-insurance/auto-insurance/auto-hero-desktop.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1392) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    whatsIncluded: file(
      relativePath: {
        eq: "personal-insurance/auto-insurance/whats-included.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
