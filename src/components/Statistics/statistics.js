import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.section`
  width: 100%;
  background: #95e1d3;
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-left: 1px solid #fff;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
    border: none;
  }
`

const Rectangle = styled.div`
  width: 239px;
  padding-bottom: 87px;
  border-right: 1px solid #fff;

  &:not(:first-child) {
    border-left: none;
  }

  @media all and (max-width: 1200px) {
    border: none;
  }

  @media all and (max-width: 768px) {
    width:150px;
    padding-bottom: 40px;
  }
`

const Number = styled.span`
  font-family: Montserrat-Bold;
  font-size: 72px;
  color: #fff;
  text-align: center;
  display: block;
  margin: 74px 0 11px;

  @media all and (max-width: 768px) {
    font-size: 50px;
  }
`

const Name = styled.span`
  font-family: Montserrat-Regular;
  font-size: 14px;
  text-align: center;
  display: block;
  color: #fff;
  text-transform: uppercase;

    @media all and (max-width: 768px) {
      font-size: 12px;
    }
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

export default Statistics
