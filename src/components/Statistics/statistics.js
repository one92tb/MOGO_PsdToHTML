import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  background: #95e1d3;
  height: 270px;
  width: 100%;
`

const Inner = styled.div`
  padding: 0 18.645833vw 0 18.8541667vw;
  display: flex;
  justify-conent: space-between;
  height: 100%;
`

const Rectangle = styled.div`
  width: 239px;
  height: 100%;

  border-right: 1px solid #fff;
  border-left: 1px solid #fff;

  &:not(:first-child) {
    border-left: none;
  }
`

const Number = styled.span`
  font-family: Montserrat-Bold;
  font-size: 72px;
  color: #fff;
  text-align: center;
  display: block;
  margin: 72px 0 15px;
`

const Name = styled.span`
  font-family: Montserrat-Regular;
  font-size: 14px;
  text-align: center;
  display: block;
  color: #fff;
  text-transform: uppercase;
`

const Statistics = () => (
  <StaticQuery
    query={graphql`
      query Statistic {
        allContentfulStatistics {
          edges {
            node {
              order
              name
              amount
            }
          }
        }
      }
    `}
    render={data => {
      const statistic = data.allContentfulStatistics.edges
      return (
        <Wrapper>
          <Inner>
            {statistic
              .sort((a, b) => a.node.order - b.node.order)
              .map(({ node }) => (
                <Rectangle key={node.order}>
                  <Number>{node.amount}</Number>
                  <Name>{node.name}</Name>
                </Rectangle>
              ))}
          </Inner>
        </Wrapper>
      )
    }}
  />
)

/*
<Rectangle>
  <Number>42</Number>
  <Name>web desing projects</Name>
</Rectangle>
<Rectangle>
  <Number>42</Number>
  <Name>web desing projects</Name>
</Rectangle>
<Rectangle>
  <Number>42</Number>
  <Name>web desing projects</Name>
</Rectangle>
<Rectangle>
  <Number>42</Number>
  <Name>web desing projects</Name>
</Rectangle>
<Rectangle>
  <Number>42</Number>
  <Name>web desing projects</Name>
</Rectangle>
*/

export default Statistics
