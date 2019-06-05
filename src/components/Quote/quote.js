import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Quote = () => (
  <Wrapper>
    <Inner>TEST1</Inner>
  </Wrapper>
)

export default Quote
