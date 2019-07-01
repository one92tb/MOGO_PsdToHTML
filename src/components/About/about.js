import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { TitleStyle, HeadlineStyle, DescriptionStyle } from "../../css/style.js"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
`

const Title = styled.span`
  ${TitleStyle}
  padding: 89px 0 15.5px 0;
`

const Headline = styled.span`
  ::after {
    margin: 34.5px auto 42.5px auto;
  }
  ${HeadlineStyle}
`

const Description = styled.span`
  margin: 0 auto 96.5px auto;
  ${DescriptionStyle}
`

const RectanglesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media all and (max-width: 1280px) {
    justify-content: space-evenly;
  }
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 382px;
  height: 252px;
  top: 0;
  left: 0;
  flex-direction: column;
  text-transform: uppercase;
  background: url(${props => props.bgUrl});

  @media all and (max-width: 768px) {
    width: 306px;
    height: 202px;
  }
  @media all and (max-width: 480px) {
    width: 230px;
    height: 152px;
  }
`

const ImageTitle = styled.span`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-family: "Montserrat-Bold";
  display: block;
  margin-top: 8px;
  opacity: 0;
`

const ImageIcon = styled.img`
  opacity: 0;
`

const Rectangle = styled.div`
  width: 380px;
  height: 250px;
  background-color: #95e1d3;
  margin-bottom: 30px;
  position: relative;

  &:hover ${ImageBox} {
    display: flex;
    transition: 1s ease;
    top: -10px;
    left: -10px;
    background: linear-gradient(
        to bottom,
        rgba(230, 129, 130, 0.8),
        rgba(251, 227, 137, 0.8)
      ),
      url(${props => props.bgUrl});
  }

  &:hover ${ImageTitle} {
    transition: 1s ease;
    opacity: 1;
  }

  &:hover ${ImageIcon} {
    transition: 1s ease;
    opacity: 1;
  }
  @media all and (max-width: 1280px) {
    margin: 0 auto 30px auto;
  }
  @media all and (max-width: 768px) {
    width: 304px;
    height: 200px;
  }
  @media all and (max-width: 480px) {
    width: 228px;
    height: 150px;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 382px;
  height: 252px;

  @media all and (max-width: 768px) {
    width: 306px;
    height: 202px;
  }
  @media all and (max-width: 480px) {
    width: 230px;
    height: 152px;
  }
`

const About = props => {
  return (
    <StaticQuery
      query={graphql`
        query allContentfulpsdToHtml {
          allContentfulAbout {
            edges {
              node {
                order
                description
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
          allContentfulAboutImg {
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
        }
      `}
      render={data => <AboutComponent data={data} {...props} />}
    />
  )
}

const AboutComponent = props => {
  const { description } = props.data.allContentfulAbout.edges[0].node
  const { src } = props.data.allContentfulAbout.edges[0].node.image.fixed
  const { edges } = props.data.allContentfulAboutImg
  const { setRef } = props
  return (
    <Wrapper name="about" ref={setRef}>
      <Title>what we do</Title>
      <Headline>story about us</Headline>
      <Description>{description}</Description>
      <RectanglesWrapper>
        {edges
          .sort((a, b) => a.node.order - b.node.order)
          .map(element => (
            <Rectangle
              key={element.node.name}
              bgUrl={element.node.image.fixed.src}
            >
              <ImageWrapper>
                <ImageBox bgUrl={element.node.image.fixed.src}>
                  <ImageIcon data-src={src} className="lazyload" />
                  <ImageTitle>super team</ImageTitle>
                </ImageBox>
              </ImageWrapper>
            </Rectangle>
          ))}
      </RectanglesWrapper>
    </Wrapper>
  )
}

export default About
