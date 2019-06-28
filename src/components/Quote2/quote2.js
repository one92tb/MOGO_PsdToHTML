import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 98px 25px 128px 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and (max-width: 1199px) {
    justify-content: space-evenly;
  }

  @media all and (max-width: 480px) {
    padding: 60px 12px 80px 12px;
  }
`

const ArrowLeft = styled.img`
  display: flex;
  align-items: center;
  margin-right: 44px

  &:hover {
    cursor: pointer;
  }

  @media all and (max-width: 480px) {
    margin-right: 12px;
  }
`
const ArrowRight = styled.img`
  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.img`
  width: 212px;
  height: 212px;
  border-radius: 50%;

  @media all and (max-width: 768px) {
    display: none;
  }
`

const TextWrapper = styled.div`
  max-width: 767px;
  padding: 35px 75px 29px 0;
  margin-left: 28px;

  @media all and (max-width: 1199px) {
    padding: 35px 28px 29px 0;
  }

  @media all and (max-width: 480px) {
    margin-left: 12px;
  }
`

const Text = styled.span`
  font-size: 24px;
  text-align: left;
  font-family: "Roboto-LightItalic";
  display: block;
  line-height: 36px;
  color: rgba(153, 153, 153, 255);
  margin-bottom: 13px;

  @media all and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  ::before {
    content: '"';
  }

  ::after {
    content: '"';
  }
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

  @media all and (max-width: 768px) {
    font-size: 18px;
    padding-left: 50px;

    ::before {
      width: 40px;
    }
  }
`

const Quote = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulQuote2Img {
          edges {
            node {
              order
              name
              image {
                title
                fixed(quality: 100) {
                  width
                  height
                  src
                  srcSet
                }
              }
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
                fixed(quality: 100) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
        allContentfulQuote2 {
          edges {
            node {
              order
              quote
              signature
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Wrapper>
          <Inner>
            <ArrowLeft
              height={22}
              width={12}
              src={data.allContentfulQuoteImg.edges[2].node.icon.fixed.src}
            />
            <Icon
              className="lazyload"
              data-src={
                data.allContentfulQuote2Img.edges[0].node.image.fixed.src
              }
            />
            <TextWrapper>
              <Text>{data.allContentfulQuote2.edges[0].node.quote}</Text>
              <Signature>
                {data.allContentfulQuote2.edges[0].node.signature}
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
