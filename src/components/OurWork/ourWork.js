import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { TitleStyle, HeadlineStyle, DescriptionStyle } from "../../css/style.js"

const Wrapper = styled.div`
  padding-top: 108px;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.span`
  ${TitleStyle}
`

const Headline = styled.span`
  margin: 14px 0 0 0;

  ::after {
    margin: 38px auto 0 auto;
  }

  ${HeadlineStyle}
`

const Descripton = styled.span`
  margin: 41.5px auto 96.5px auto;

  ${DescriptionStyle}
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media all and (max-width: 1919px) {
    justify-content: space-evenly;
  }
`

const Image = styled.img`
  width: 480px;
  height: ${props => (props.name === "ourWork_5" ? "784px" : "392px")};
  top: 0;
  z-index: -1;
  position: ${props => {
      console.log(props.name)
      return props.name === "ourWork_4" ? "absolute" : "relative"
    }}
    @media all and (min-width: 960px) and (max-width: 1919px) {
    height: ${props => (props.name === "ourWork_5" ? "804px" : "392px")};
  }

  @media all and (max-width: 1919px) {
    margin-bottom: 20px;
  }

  @media all and (max-width: 768px) {
    width: 384px;
    height: ${props => (props.name === "ourWork_5" ? "627px" : "314px")};
  }

  @media all and (max-width: 480px) {
    width: 288px;
    height: ${props => (props.name === "ourWork_5" ? "470px" : "235px")};
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageBox = styled.div`
  width: 480px;
  height: 392px;
  background: linear-gradient(
    to bottom,
    rgba(230, 129, 130, 0.8),
    rgba(251, 227, 137, 1)
  );

  padding-top: 161px;
  box-sizing: border-box;
  position: relative;

  @media all and (max-width: 1919px) {
    margin-bottom: 20px;
  }

  @media all and (max-width: 768px) {
    width: 384px;
    height: 314px;
    padding-top: 100px;
  }

  @media all and (max-width: 480px) {
    width: 288px;
    height: 235px;
    padding-top: 62px;
  }
`

const Icon = styled.img`
  margin: 0 auto;
  display: block;
`

const ImageHeadline = styled.span`
  font-family: "Montserrat-Bold";
  font-size: 14pt;
  color: #fff
  text-transform: capitalize;
  display: block;
  margin: 13.5px 0 6px 0;
  text-align: center;

`

const ImageText = styled.span`
  font-family: "Roboto-LightItalic";
  font-size: 15pt;
  color: #fff;
  display: block;
  text-align: center;
`

const OurWork = props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulOurWork {
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
        allContentfulOurWorkImg {
          edges {
            node {
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
      }
    `}
    render={data => {
      const { setRef } = props
      const edges = data.allContentfulOurWork.edges.sort(
        (a, b) => a.node.order - b.node.order
      )
      return (
        <Wrapper ref={setRef} name="work">
          <Title>what we do</Title>
          <Headline>some of our work</Headline>
          <Descripton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Descripton>
          <ImagesWrapper>
            <Column>
              <Image src={edges[0].node.image.fixed.src} />
              <Image src={edges[1].node.image.fixed.src} />
            </Column>
            <Column>
              <Image src={edges[2].node.image.fixed.src} />
              <ImageBox>
                <Image
                  name={edges[3].node.name}
                  src={edges[3].node.image.fixed.src}
                />
                <Icon
                  src={
                    data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
                  }
                />
                <ImageHeadline>creatively designed</ImageHeadline>
                <ImageText>lorem ipsum dolor sit</ImageText>
              </ImageBox>
            </Column>
            <Column>
              <Image
                src={edges[4].node.image.fixed.src}
                name={edges[4].node.name}
              />
            </Column>
            <Column>
              <Image src={edges[5].node.image.fixed.src} />
              <Image src={edges[6].node.image.fixed.src} />
            </Column>
          </ImagesWrapper>
        </Wrapper>
      )
    }}
  />
)

export default OurWork
