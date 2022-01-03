import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const WhyUs = ({className}) => {

    const data = useStaticQuery(graphql`
        {
            yearsExperience: file(relativePath: {eq: "repeating/50+-years-experience.svg"}) {
                publicURL
            }
            linesOfInsurance: file(relativePath: {eq: "repeating/all-lines-of-insurance.svg"}) {
                publicURL
            }
            qualityService: file(relativePath: {eq: "repeating/quality-service.svg"}) {
                publicURL
            }  
        }
    `)   

    return (
        <section className={`wrapper text-center ${className}`}>
            <div className="container">
                <header className="max-w-2xl mx-auto mb-12 md:mb-20">
                    <h2>Trusted & Time-Tested Solutions</h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div>
                        <img className="mx-auto mb-5" src={data.yearsExperience.publicURL} alt="50+ Years Experience" />
                        <div>
                            <p className="text-large font-heading font-bold text-gray-800 mb-4">50+ Years Experience</p>
                            <p className="m-0">Serving San Diego since 1959. We’re still family-owned and customer-focused.</p>
                        </div>
                    </div>
                    <div>
                        <img className="mx-auto mb-5" src={data.linesOfInsurance.publicURL} alt="All Lines of Insurance" />
                        <div>
                            <p className="text-large font-heading font-bold text-gray-800 mb-4">All Lines of Insurance</p>
                            <p className="m-0">We provide you with the most comprehensive coverage at a competitive cost.</p>
                        </div>
                    </div>
                    <div>
                        <img className="mx-auto mb-5" src={data.qualityService.publicURL} alt="Quality Service" />
                        <div>
                            <p className="text-large font-heading font-bold text-gray-800 mb-4">Quality Service</p>
                            <p className="m-0">We are dedicated to bringing you reliable and top-notch customer service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;