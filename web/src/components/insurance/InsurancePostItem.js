import React from "react"
import { StaticQuery, graphql } from "gatsby"

const InsurancePost = () => (
    <StaticQuery
        query={graphql`
      query {
        allSanityInsurance {
          edges {
            node {
              nav
              slug {
                current
              }
            }
          }
        }
      }
    `}
        render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    ></StaticQuery>
)

export default InsurancePost