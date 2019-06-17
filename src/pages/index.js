import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Intro from "../components/Intro/intro"
import About from "../components/About/about"
import Statistics from "../components/Statistics/statistics"
import Services from "../components/Services/services"
import Feature from "../components/Feature/feature"
import WhatWeDo from "../components/WhatWeDo/whatWeDo"
import Quote from "../components/Quote/quote"
import WhoWeAre from "../components/WhoWeAre/whoWeAre"

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
          <Intro references={this.references} setRef={this.setRef}/>
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
