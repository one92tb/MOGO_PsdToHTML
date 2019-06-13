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

const IndexPage = () => (
  <Layout>
    <Container>
      <Intro />

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
<WhoWeAre />
*/
