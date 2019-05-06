import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Intro from "../components/Intro/intro"
import About from "../components/About/about"
import Statistics from "../components/Statistics/statistics"
import Services from "../components/Services/services"

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Intro />
      <About />
      <Statistics />
      <Services />
    </Container>
  </Layout>
)

export default IndexPage
