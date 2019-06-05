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

const Container = styled.div`
  width: 100%;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Intro />
      <About />
      <Statistics />
      <Services />
      <Feature />
      <WhatWeDo />
      <Quote />
    </Container>
  </Layout>
)

export default IndexPage

/*
<About />
<Statistics />
<Services />
<Feature />
<WhatWeDo />
<Quote />
*/
