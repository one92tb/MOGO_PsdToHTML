import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { TitleStyle, HeadlineStyle, DescriptionStyle } from "../../css/style.js"

const Wrapper = styled.div`
  padding-top: 108px;
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
  width: 100%;
  height: auto;
  background-size: cover;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media all and (max-width: 1200px) {
    width: 50%;
  }

  @media all and (max-width: 768px) {
    width: 100%;
  }
`

const ImageBox = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(
    to bottom,
    rgba(230, 129, 130, 0.8),
    rgba(251, 227, 137, 1)
  );
  background-size: cover;

  padding-top: 161px;
  box-sizing: border-box;
  position: relative;

  @media all and (max-width: 1919px) {
    width: 100%;
    height: auto;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
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

const Rectangle = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(
        243,
        138,
        129,
        ${props => (props.alt === "ourWork_4" ? "0.8" : "0")}
      ),
      rgba(251, 227, 137, ${props => (props.alt === "ourWork_4" ? "0.8" : "0")})
    ),
    url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;

  ::before {
    content: "";
    display: block;
    padding-top: ${props => (props.alt === "ourWork_5" ? "162.5%" : "81.25%")};
  }
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
              <Rectangle
                imageSrc={edges[0].node.image.fixed.src}
                alt={edges[0].node.name}
              ></Rectangle>
              <Rectangle
                imageSrc={edges[1].node.image.fixed.src}
                alt={edges[1].node.name}
              ></Rectangle>
            </Column>
            <Column>
              <Rectangle
                imageSrc={edges[2].node.image.fixed.src}
                alt={edges[2].node.name}
              ></Rectangle>
              <Rectangle
                imageSrc={edges[3].node.image.fixed.src}
                alt={edges[3].node.name}
              >
                <ContentWrapper>
                  <Icon
                    data-src={
                      data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
                    }
                    className="lazyload"
                  />
                  <ImageHeadline>creatively designed</ImageHeadline>
                  <ImageText>lorem ipsum dolor sit</ImageText>
                </ContentWrapper>
              </Rectangle>
            </Column>
            <Column>
              <Rectangle
                imageSrc={edges[4].node.image.fixed.src}
                alt={edges[4].node.name}
              ></Rectangle>
            </Column>
            <Column>
              <Rectangle
                imageSrc={edges[5].node.image.fixed.src}
                alt={edges[5].node.name}
              ></Rectangle>
              <Rectangle
                imageSrc={edges[6].node.image.fixed.src}
                alt={edges[6].node.name}
              ></Rectangle>
            </Column>
          </ImagesWrapper>
        </Wrapper>
      )
    }}
  />
)

export default OurWork

/*
<Icon
  data-src={
    data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
  }
  className="lazyload"
/>
<ImageHeadline>creatively designed</ImageHeadline>
<ImageText>lorem ipsum dolor sit</ImageText>
*/
