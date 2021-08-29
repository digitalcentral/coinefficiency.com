import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
// import Testimonial from "../components/testimonial"
// import Team from "../components/team"
import Efficiency from "../components/efficiency"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Seo
        title="Transfer cryptocurrency with greater efficiency by selecting the best exchange and protocol"
        description="Track coin efficiency. Optimise transfers in the cryptocurrency monetary ecosystem. Stop loosing money transfering with the wrong coins. Check before you send cryptocurrency."
      />
      <Hero />

      <Efficiency data={data.fees.nodes} />
      {/* <Testimonial /> */}
      {/* <Team /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    fees: allGraphCmsFee {
      nodes {
        id
        exchange {
          name
          domain
        }
        coin {
          name
          symbol
          coingeckoId
        }
        protocol {
          name
        }
        withdrawFee
        withdrawMin
      }
    }
  }
`
