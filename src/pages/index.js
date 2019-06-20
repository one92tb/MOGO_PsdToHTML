import React from "react"
import Layout from "../components/layout"
import loadable from "@loadable/component"
import styled from "styled-components"

const Intro = loadable(() => import("../components/Intro/intro"))
const About = loadable(() => import("../components/About/about"))
const Statistics = loadable(() => import("../components/Statistics/statistics"))
const Services = loadable(() => import("../components/Services/services"))
const Feature = loadable(() => import("../components/Feature/feature"))
const WhatWeDo = loadable(() => import("../components/WhatWeDo/whatWeDo"))
const Quote = loadable(() => import("../components/Quote/quote"))
const WhoWeAre = loadable(() => import("../components/WhoWeAre/whoWeAre"))

const Container = styled.div`
  width: 100%;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.references = {}
    this.ref = React.createRef()
  }

  setRef = ref => {
    this.references[ref.attributes.name.nodeValue] = ref
  }

  render() {
    return (
      <Layout>
        <Container>
          <Intro references={this.references} setRef={this.setRef} />
          <About setRef={this.setRef} />
          <Statistics />
          <Services setRef={this.setRef} />
          <Feature />
          <WhatWeDo />
          <Quote />
          <WhoWeAre />
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
