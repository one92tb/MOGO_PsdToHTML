import React from "react"
import Layout from "../components/layout"
import Intro from "../components/Intro/intro"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Intro />
    </Container>
  </Layout>
)

export default IndexPage
