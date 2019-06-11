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
  padding: 70px 0 69px 0;
  display: flex;
  align-items: center;
`

const ArrowLeft = styled.img`
  display: flex;
  align-items: center;
  margin-left: 23px;
  margin-right: 75px;

  &:hover {
    cursor: pointer;
  }
`
const ArrowRight = styled.img`
  margin: 0 15px 0 72px;

  &:hover {
    cursor: pointer;
  }
`
const Text = styled.span`
  font-size: 24px;
  text-align: left;
  font-family: "Roboto-LightItalic";
  display: block;
  line-height: 36px;
  margin: 4px 0 12px 0;
  color: rgba(153, 153, 153, 255);

  ::before {
    content: '"';
  }

  ::after {
    content: '"';
  }
`
const Icon = styled.img``

const IconWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid #95e1d3;
  margin-right: 61px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextWrapper = styled.div`
  width: 770px;
`

const Signature = styled.span`
  font-size: 24px;
  position: relative;
  font-family: "KaushanScript-Regular";
  padding-left: 70px;
  display: block;

  ::first-line {
    text-transform: capitalize;
  }

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    border-top: 3px solid red;
    left: 0px;

    width: 60px;
  }
`

const Quote = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulQuote {
          edges {
            node {
              order
              quote
              signature
            }
          }
        }
        allContentfulQuoteImg {
          edges {
            node {
              order
              name
              icon {
                title
                fixed {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <Wrapper>
          <Inner>
            <ArrowLeft
              height={22}
              width={12}
              src={data.allContentfulQuoteImg.edges[2].node.icon.fixed.src}
            />
            <IconWrapper>
              <Icon
                src={data.allContentfulQuoteImg.edges[0].node.icon.fixed.src}
              />
            </IconWrapper>
            <TextWrapper>
              <Text> {data.allContentfulQuote.edges[0].node.quote}</Text>
              <Signature>
                {data.allContentfulQuote.edges[0].node.signature}
              </Signature>
            </TextWrapper>
            <ArrowRight
              height={22}
              width={12}
              src={data.allContentfulQuoteImg.edges[1].node.icon.fixed.src}
            />
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Quote
