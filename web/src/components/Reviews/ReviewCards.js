import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Masonry from "react-masonry-component";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ReviewCards = ({ className }) => {
  const StyledReviews = styled.div`
    .grid-item {
      ${tw`
                border
                border-solid
                rounded-xl
                px-6
                py-8
                mx-6
                mb-12
            `}
      width: calc(50% - 3rem);
      border-color: #d4d4d4;
      @media (max-width: 767px) {
        ${tw`
                    py-6
                    mb-10
                `}
        width: calc(100% - 3rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "testimonials/Yelp.png" }) {
        childImageSharp {
          fixed(width: 49) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      google: file(relativePath: { eq: "testimonials/Google.png" }) {
        childImageSharp {
          fixed(width: 76) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook: file(relativePath: { eq: "testimonials/linkedin.png" }) {
        childImageSharp {
          fixed(width: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      headshot: file(relativePath: { eq: "testimonials/User.svg" }) {
        publicURL
      }
      stars5: file(relativePath: { eq: "testimonials/Stars.svg" }) {
        publicURL
      }
    }
  `);

  const masonryOptions = {
    itemSelector: ".grid-item",
  };

  const reviews = [
    {
      name: "Eyobe Mengistu",
      review: " ",
      platform: data.google.childImageSharp.fixed,
      },	
      {		
      name: "Cynthia Meinhardt",
      review: "Johanna was a great help in shopping for us a new insurance company. She kept me posted and I got her the information that the company had requested. Communication was great and all turned out well.",
      headshot: "https://lh3.googleusercontent.com/a-/AD_cMMSmAOZNL3pRimYjPmpSlw2_a1Y7ZafmzVjuj9QKEoj8BUk=w60-h60-p-rp-mo-br100",
      platform: data.google.childImageSharp.fixed,
      },
      {	
      name: "Jackie J",
      review: "I've had Hoffman Hanono as my insurance agent since buying my rental 4-plex back in 2004. They're prompt and responsive - they take care of things without my having to keep on checking. Lisa Preisler has been helping me and she's very good about making sure all my questions are answered - so I can feel secure that the property is well covered.",
      headshot: "https://lh3.googleusercontent.com/a-/AD_cMMRosTI10uqEbysH9Q7RO7tDA0gF_pH-d966RFJegew9sg=w60-h60-p-rp-mo-br100",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Antonia Vasquez",
      review: "I have been a customer of the most professional insurance broker in Southern California, Hoffman Hanono Insurance, for 15 years. I have received advice, reference, and assistance in getting the right coverage for all my business, residential and personal needs with the most professional/personal attention. They always provide reminders of important dates and updates. For the right insurance coverage for your needs, I highly recommend HHI in Chula Vista, California.",
      headshot: "https://lh3.googleusercontent.com/a-/AD_cMMRkbK-GVNutwMcs-kwxJZKFE2eK60OxL2BXmpyIpxJbApo=w60-h60-p-rp-mo-br100",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Emily Le-Han",
      review: "We’ve been with Hoffman Ins. for nearly 14 years, initially for our business insurance and, most recently, for our personal policy. Love the personal attention from Ben Antl for our business policies and now with Lisa Preisley for our personal policy.",
      headshot: "https://lh3.googleusercontent.com/a-/AD_cMMT29OS8zzgYZ_zNi70lZslg5W-uSBm4Ayy9jppxIx5gSg=w60-h60-p-rp-mo-br100",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Patrick Kachi",
      review: "Excellent customer service and even better pricing!",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Stephanie Frid",
      review: " ",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Jasmine Lopez",
      review: "For starters, Johanna has been simply amazing to work with! She goes above and beyond to ensure that clients are well taken care of. Johanna has been nothing but helpful when I have had such difficulty with my business matter. She is amazing! Thank you!",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "David Roth",
      review: "Great service and communicate very well with exceptional turnaround times - highly recommended.",	
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Keflu Aereha",
      review: "I have been with Hoffman Hanono Insurance for over 5 years. Johanna is so helpful and knowledgeable on commercial Auto and GL insurance. I would highly recommend her to get your commercial policy.",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Amir	Zarasvandi",
      review: "Very organized and structured! Been working with them for over 5 years. Keep up the good work. Thanks again.",
      headshot: "https://lh3.googleusercontent.com/a-/AD_cMMRFgUZQpmMXzXE1hDr7zuWmm27Ta8Zh6JvkYFVzU7chLjw=w60-h60-p-rp-mo-br100",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Anastasia Rechif",
      review: "Professional, responsible, courteous.",
      platform: data.google.childImageSharp.fixed,
      },
      {
      name: "Dubai Transportation LLC",
      review: "The best customer service and is very professional. Definitely recommended, and 5 stars.",
      platform: data.google.childImageSharp.fixed,
      },
    {
      name: "Peter Schwarz",
      review:
        "I recently had my homeowner's provider raise our rate by 50% for next year despite no claims or change in status of any kind.  Lisa, at Hoffman Hanono, worked tirelessly with me to find me a new carrier and get me a quote that was almost exactly what I paid last year for even better coverage!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Mimi	Allen",
      review:
        "I was referred to Ezra/ Lisa by a close friend of mine after having called on quite a few referred companies and all the obvious ones, as well. Lisa came through immediately and found the best quote with even more coverage than my previous provider. She worked within a short timeframe and was super responsive, as well. I’d highly recommend this group and thank you!!!!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Ilan Bielas",
      review:
        "The Hoffman Hanono Insurance team is top notch and extremely responsive.  Would recommend to all.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Thomas Webb",
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14Ggi8YXg4jiBsAi0oC0AVBjbnuqX-0T84w9Tq-YBZA=w120-h120-p-rp-mo-br100",
      review:
        "I have been with Hoffman Hanono for over 10 years.  The company has been professional, responsive (special thanks to Lisa Preisler) and cost competitive.  Makes for a good combination of attributes.  I would recommend Hoffman Hanono for your Homeowners insurance needs",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "DLSD DLSD",
      review:
        "Been working with them for many years . The lady who helps me usually is Lisa which was always super nice very helpful and always on top of my needs . Thank you for great service and top level of customer service",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Corvette Garage",
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GjbTrwnFLRzclzdB19tD5JH7f6jpOWV5T4GYMYBUSk=w120-h120-p-rp-mo-ba3-br100",
      review:
        "Lisa has been an excellent help in making our experience with Hoffman Hanono a painless one. They are very responsive and know how to treat people. They have made my life much easier knowing they are handling our insurance needs.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Matt Klicsu",
      review:
        "Wanted you to know that Lisa, at Hono Insurance has taken good care of me on all my properties, and given advice to best protect me with my insurances, including umbrella policies and auto pay.  In addition, always personable and friendly.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Alejandro 	Krongold",
      review:
        "I've been working with Hanono Insurance for more than 10 years and they excel in service and professionalism. They have great customer service and always ready and willing to help you.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Fire	Force",
      review: "Elias is always there to help. Great customer service",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "John	A.",
      review:
        "Hoffman Hanono Insurance representative Erica, has always given my Company great Customer Service! This is a local (San Diego) company and their yearly commercial vehicle quotes are competitive and always lower than other companies and brokers.",
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Dana	A.",
      review:
        "I took my time to sign on with Hoffman Hanon Insurance. I talk with Osmar quarterly to talk about our insurance needs for a small to medium business. I am very impressed with Osmar, his patience, knowledge of policies and necessities for our business. He earned our business. I would 100% recommend Osmar at Hoffman Hanon Insurance. His office responds to any requested STAT. I really appreciate that business ethic",
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Anna	Hamann",
      review:
        "I am grateful to Johanna Guedes at Hoffman and Hanono. She has followed through with every phone call and every email. I am fortunate that Johanna is an excellent listener. She takes the time to understand the problem. Then she offers solutions. She also does everything she says she will do- then checks back with you. I have a new appreciation for this insurance firm based on my recent interactions with Johanna.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Faith",
      review:
        "We use Hoffman Hanono for all of our California insurance needs. Everyone is always very professional and friendly anytime we need help or to update or change insurance. Would wholeheartedly recommend!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Vincent	Ferrer",
      review:
        "Great personal service and guidance from the entire crew, especially Lisa Preisler, on my homeowner's insurance policy.  Not all policies are the same. Lisa helped us compare and make sure coverages are adequate in this economy where replacement costs are far greater than before.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Western Hills Service Requests",
      review:
        "We contacted Hoffman Hanono insurance in early January 2020 and have had the pleasure of working with Judy Schwartz, Rosanne Fuentes, and more recently, Lisa Preisly. They are very responsive and helpful when clarification was needed and made changes quickly and efficiently. The prices are very competitive and we look forward to working with them for other properties in our portfolio. A special Thank you! to Lisa in assisting me with our latest transaction. Customer service is A★★★★★!!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Samuel	Waisbord",
      review:
        "It's been great to work with Hoffman Hanon Insurance. Lisa Preisler has been great. She always returns my calls and e-mails promptly and resolves any questions and/or concerns I have. Thank you for the services you provide me.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Tyler Churchill",
      review:
        "Lisa has been helping me with my insurance for years! She’s always responsive and helpful when I need clarification on my policy. She can always translate insurance lingo into basic English, since I’m novice in my general insurance knowledge. Heavily recommend her and the entire team at Hoffman Hanono!!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Leonardo Ibarra",
      review:
        "Great place! I had the pleasure of working with Erica Duran and she was awesome in helping me find the right insurance policy for commercial vans. She is always professional and fast with her work, not to mention she is also a Spanish speaker. Will continue doing business with this agency for sure.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Adde Officail",
      review:
        "Good Insurance company for business and personal I would Recommend for family and friends thanking !!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Yanli Wu",
      review:
        "Hoffman Hanono has been nothing but a stellar group of individuals working to produce affordable policies tailored to protect our business. We have been working with Mr. Ben Antl for over five years and would describe his care for customer service as exemplary. HH Insurance has distinguished itself as the finest insurance company in San Diego and we wholeheartedly recommend them.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Amir	Zarasvandi",
      review:
        "Very organized and structured! Been working with them over 5 years. Keep up the good work. Thanks again",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Lizbeth Gonzalez",
      review:
        "Excellent treatment and service, I have been with Hoffman Hanono Insurance for 3 years and I am very happy because their attention to the public is unmatched. Excellent prices. Thanks",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Susan Hallak",
      review:
        "I am so happy to work with this company.  Osmar and his team are so responsive and amazing to work with.  Osmar takes his time to explain everything to me in such an easy way to understand. He even explains things to me over and over as if its the first time he has ever explained it!  I have gone through many insurance and workers comp company and this by far is a VIP experience and I plan to stick with Hoffman Honono and Osmar as long as I am in business!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Mark	Begula",
      review:
        "I have been a customer for over twenty years, because the service is polite, prompt and consistent.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Melissa	Lavenart",
      review:
        "Hoffman Hanono Insurance team, is efficient, reliable and very professional. I'm really happy to know that All Around Fence Inc. & G&M Construction Inc. can rely with their professional insurance services.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Nate	Ruben",
      review:
        "Hoffman Hanono Insurance will go to bat for you in getting you the best coverage at the best possible price. But that's only part of it. The friendly staff at Hoffman Hanono are extremely responsive and professional. We've been doing business with them for over 30 years!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Maty	Adato",
      review:
        "I have been with Hoffman Hanono for over 20 years and would never change.  Their customer service goes over and above.  They have always been awesome in finding the best carrier for any of my commercial properties.  They always have answers for any of my questions and if they do not they get them immediately from the carrier.  It is a pleasure to work with them.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Daniel Schwarz",
      review: "Best service from Mr. Hanono and his team!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Advantage Dirty Blinds",
      review:
        "Very friendly staff help us soon Thank you very much for help all staff.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "P/M Machining LLC",
      review:
        "Ben Antl and his staff have given my company excellent service over the years that we have been working with them. Whenever I had a questions, or a concern or needed further explanation on my policy, they helped me immediately. I would recommend Hoffman Hanover Insurance to anyone. Five Stars!!!!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Lee & Dana	Austin",
      review:
        "took my time to sign on with Hoffman Hanon Insurance. I talk with Osmar quarterly to talk about our insurance needs for a small to medium business. I am very impressed with Osmar, his patience, knowledge of policies and necessities for our business. He earned our business. I would 100% recommend Osmar at Hoffman Hanon Insurance. His office responds to any requested STAT. I really appreciate that business ethic.",
      platform: data.google.childImageSharp.fixed,
    },

    {
      name: "Eran	Mizan",
      review:
        "The team at Hoffman is awesome!! Always so professional and responsive, they are always willing to help and answer any questions, they will do so with lots of patience. I have been a happy client for over 6 years. Great Job Team!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Exclusive Limousine",
      review:
        "For many years HH insurance company is the provider of the commercial insurance for my business. I appreciated their assistance each and every time! But during the pandemic of 2020 as I was just trying to find a way to keep the status of my business active; It was then, that Erica Duran and her team went out of their way in assisting me with extra care and attention needed. My business survived the hard time. And that made me realize, I will never be able to appreciate their work enough as my agent! I wanted the world to know about HH insurance Company!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Albert Aguilera",
      review:
        "David and his team have given me outstanding service! I called their office recently because I had several questions regarding our commercial and auto policies. They answered everything really well, the staff was really nice, and they gave me a better price then what I was paying. Thank you to the Hoffman Hanono team!!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Kimberly Marshall",
      review:
        "David and his team are responsive and professional. As any business will attest to its important to partner with companies that will help you and your business to succeed. Hoffman Hanono Insurance has been that partner.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Aposcar C.",
      review:
        "I found myself deeply in need, the need for speed! We found ourselves in a dire situation and were in a scramble to rent commercial space (the week between Christmas and New Year's, during Covid of all things - how's that for timing?), and needed things to happen quickly - including securing commercial insurance - to rent out a unit for our new business. Trying a very reputable referral through my bank (whom I trust wholeheartedly) proved frustrating and fruitless... an hour on the phone with a representative, answering a slew of questions pertaining to our company, industry and business, and some questionable questions that seemed a bit invasive, only to be turned away and referred to another third party insurance company. Suffice it to say, it wasn't pleasant, and I was not pleased. Then, at the recommendation and behest of a personal referral (which I should have originally done), I contacted David with Hoffman Insurance directly, and WOW, within 5 minutes I was well on my way to a policy and documents needed to fulfill my rental requirements - it was quick, easy, painless. Aside from that, and more importantly, I now have excellent coverage for my business, at a great rate, and am truly a satisfied customer!! Definitely call them first for your commercial insurance needs!",
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Joe W.",
      review:
        "We are involved in commercial real estate both here in California and out of state. We have been working with Hoffman Hanono for over 15 years on all of our insurance needs, business and personal. We have on occasion contacted other brokers to compare pricing and we always wind up staying with Hoffman Hanono because other brokers have not been able to beat their coverages and pricing. Over the years we have also had many claims arise, ranging from very minor slip and falls to catastrophic roof damage from thunderstorms. While these claims can be very stressful situations, the strongest aspect of working with Hoffman Hanono was knowing they were there on our side to advocate for our interests and obtain the best resolution possible for us on these claims and complex issues. I would highly recommend Hoffman Hanono to anyone regarding all insurance questions and issues.",
      headshot: "",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Dan F.",
      review:
        "Amazing service , attention to detail , very professional and most important thing they always answer the phone and give you a solution. Work with them on my personal/family and business insurance policies. I personally recommend them. Had a claim on one of my properties and it literally was a joy working with them. Thank you Ezra",
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Janitorial Building Service Long Beach",
      review:
        "Had a wonderful experience working with Hoffman Hanono recently. We needed to get new commercial insurance for our business in Long Beach. We looked at a few small business insurance brokers before we decided to go with HH Insurance for our general liability and worker's comp insurance. Their attention to detail and hands on support was top notch. Thank you for all the help.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "JD",
      review:
        "Osmar provided quick and prompt service, I will be working with him on a business BOP next year.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Jackie S.",
      review:
        "Hoffman Hanono has insured my rental property since purchase in 2004. They are dependable and helpful. Easy to reach, and good about responding quickly to questions and doing research to ensure I have the right/enough coverage.",
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Gwen S.",
      review: (
        <>
          <span>
            Hoffman-Hanono Insurance gets an outstanding rating from me for
            offering excellent personal service ( so hard to find these days!)
            They have handled my home insurance for over 30 years, and they have
            never failed me. How much do I like them? This is the first Yelp
            review I have ever written. I wanted to share how great they are.
          </span>
          <br />
          <br />
          <span>
            Recently, I phoned on a Sunday, intending to leave a message on an
            answering machine, and Phil Hoffman, Agency Principal/Owner,
            answered the phone and my questions with patience and good humor,
            even though I had intruded on his weekend. This is typical of the
            service I have received for years.
          </span>
          <br />
          <br />
          <span>
            Account Manager, Lisa Preisler, is always patient, helpful and
            prompt in following up. She is a resourceful problem solver. When I
            called recently to see if she could do anything to improve my auto
            insurance rates, she promptly found ways to save me over $100 off my
            annual premium.
          </span>
          <br />
          <br />
          <span>
            If you are dissatisfied with your current insurance Hoffman Hanono
            will comparison shop for you to find the best deal, or you can show
            them your current insurance coverage and ask them if they can beat
            it. When AAA would not provide homeowners coverage on my condo
            because it was in a ""fire zone"", Lisa found a good company that
            would cover my condo and my car, saving me money and giving me peace
            of mind.
          </span>
        </>
      ),
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Maty A.",
      review:
        "I have been with Hoffman and Hanono for over 20 years and have always appreciated the professional service I receive from the entire staff. They are always courteous and very professional. I would highly recommend them to anyone who needs either personal or commercial insurance.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Selhadin M.",
      review:
        "I'm a very satisfied customer. I've used them for over 2 years and is recommend to anyone. Great service from matt and Erica. Thank you so much guys",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Moh W.",
      review:
        "The most easiest & Convenient commercial car insurance I ever dealt with. My business is running legally for whatever coverage I needed Mr. Mathew was always there to assist me with my needs. All the associates with the company are friendly & reliable! I already referred couple of my business partners to Hoffman Hanono Insu & you should too! Please go see it for yourself! And ask for Mr. Mathew!",
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/5Mbqk_1l3Dgnn9Srpfe9Gg/60s.jpg",
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Nate R.",
      review:
        "I've been doing business with this company for, at least, 25 years. They insure multiple businesses I own and also insure me and my family. They are knowledgable, professional and very friendly to do business with. They have grown substantially over the years, which is a testament to their ethics and proffesionalism. If they don't believe that they have an insurance product that meets your needs, they won't try to sell you something else. They'll be up front with you and that says a lot. I would highly recommend this agency to anyone, something i don't normally do.",
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/9Za-qZ2bAPMxteJAwAqGdA/60s.jpg",
      platform: data.yelp.childImageSharp.fixed,
    },
    {
      name: "Chinh Do",
      review:
        "Hoffman Hanono Insurance Services is so proactive and attentive to our insurance needs; always marketing our bids way ahead of policy expiration dates. The company provides professional, fantastic services! We couldn’t be happier!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Dr. Israel Ismaj",
      review:
        "Hoffman Hanono Insurance has insured my home, auto, and rentals for many years. It is always a pleasure working with Sharon Royal - she is professional, knowledgeable, and extremely attentive to detail.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Ken Aker",
      review:
        "Our company has worked with Osmar and his team at Hoffman Hanono for years. They really go above and beyond to help their clients by maintaining open communication and offering quick resolutions to problems. We appreciate their efforts and it is why we remain a loyal long term client!",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Norma Luna",
      review:
        "I have been extremely pleased with the quality of service I receive from Ben Antl at Hoffman Hanono Insurance. Whenever I call and for whatever reason, I am greeted by Ben's dedication to making my job less stressful. He is always genuinely interested in addressing my questions and concerns, or simply helping me through the claim process and anticipating any issues that might arise. Simply put, Ben at Hoffman Hanono Insurance is the best choice to have in your corner when navigating through the Workers Compensation process.",
      platform: data.google.childImageSharp.fixed,
    },
    {
      name: "Mike Nobe",
      review:
        "Osmar has been working on our account for a number of years. He has shown the ability to understand our insurance needs, and he has been able to provide us with the best policies for our company given our financial resources. He has always been very responsive when dealing with any insurance issues. We have been extremely satisfied with the level of service from the entire Hoffman Hanono Insurance team.",
      platform: data.google.childImageSharp.fixed,
    },
  ];

  return (
    <StyledReviews className={className}>
      <div className="container">
        <Masonry className="-mx-6" options={masonryOptions}>
          {reviews.map((review, i) => {
            return (
              <div
                className={`w-full bg-white border border-solid border-primary-600 rounded-lg mb-8 md:mb-10 p-6 md:pt-8 md:px-7 grid-item`}
                key={i}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <img
                      className="rounded-full"
                      src={review.headshot || data.headshot.publicURL}
                      alt="User Headshot"
                      width="40"
                    />
                    <div className="ml-3">
                      <div className="text-black font-bold mb-1">
                        {review.name}
                      </div>
                      <img src={data.stars5.publicURL} alt="User 5 Stars" />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Img fixed={review.platform} />
                  </div>
                </div>
                <blockquote>
                  <q className="block mb-6 md:mb-0">{review.review}</q>
                </blockquote>
                <div className="block md:hidden">
                  <Img fixed={review.platform} />
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>
    </StyledReviews>
  );
};

export default ReviewCards;
