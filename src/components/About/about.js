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
const Image = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media all and (max-width: 1280px) {
    justify-content: space-evenly;
  }
`

const ImageBox = styled.div`
  display: none;

  justify-content: center;
  align-items: center;
  position: relative;
  top: -11px;
  left: -11px;
  width: 382px;
  height: 252px;
  flex-direction: column;
  text-transform: uppercase;

  &:hover {
    top: -11px;
    left: -11px;
    background: linear-gradient(
      to bottom,
      rgba(230, 129, 130, 0.8),
      rgba(251, 227, 137, 0.8)
    );
  }

  @media all and (max-width: 768px) {
    width: 306px;
    height: 202px;
  }

  @media all and (max-width: 480px) {
    width: 230px;
    height: 152px;
  }
`

const Rectangle = styled.div`
  width: 380px;
  height: 250px;
  background-color: #95e1d3;
  margin-bottom: 30px;
  position: relative;

  &:hover ${Image} {
    top: -11px;
    left: -11px;
  }

  &:hover ${ImageBox} {
    display: flex;
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

const ImageTitle = styled.span`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-family: "Montserrat-Bold";
  display: block;
  margin-top: 8px;
`

const ImageIcon = styled.img``

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
      <ImgWrapper>
        {edges
          .sort((a, b) => a.node.order - b.node.order)
          .map(element => (
            <Rectangle key={element.node.name}>
              <Image
                alt={element.node.name}
                data-src={element.node.image.fixed.src}
                className="lazyload"
              />
              <ImageBox>
                <ImageIcon data-src={src} className="lazyload" />
                <ImageTitle>super team</ImageTitle>
              </ImageBox>
            </Rectangle>
          ))}
      </ImgWrapper>
    </Wrapper>
  )
}

export default About
