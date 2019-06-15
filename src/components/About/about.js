import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
`

const Title = styled.span`
  font-family: KaushanScript-Regular;
  font-size: 24px;
  text-align: center;
  color: #333;
  display: block;
  padding: 89px 0 15.5px 0;

  @media all and (max-width: 480px) {
    font-size: 20px;
  }
`

const Header = styled.span`
  font-family: Montserrat-Bold;
  font-size: 30px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  display: block;

  ::after {
    content: "";
    display: block;
    border: 1.5px solid #f38181;
    width: 60px;
    margin: 34.5px auto 42.5px auto;
  }

  @media all and (max-width: 480px) {
    font-size: 24px;

    ::after {
      content: "";
      display: block;
      border: 1.5px solid #f38181;
      width: 40px;
      margin: 28px auto 32px auto;
    }
  }
`

const Description = styled.span`
  font-family: "Roboto-Regular";
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  margin: 0 auto;
  display: block;
  padding: 0 123px;
  margin-bottom: 96.5px;
  color: rgba(153, 153, 153, 255);
  text-transform: capitalize

  &:first-letter {
    text-transform: uppercase;
  }

  @media all and (max-width: 980px) {
    padding: 0 80px;
  }

  @media all and (max-width: 768px) {
    padding: 0 50px;
  }

  @media all and (max-width: 480px) {
    padding: 0 30px;
  }
`

const Rectangle = styled.div`
  width: 380px;
  height: 250px;
  background-color: #95e1d3;
  margin-bottom: 30px;

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

const Image = styled.img`
  position: relative;
  top: -1px;
  left: -1px;
  width: 382px;
  height: 252px;

  &:hover {
    top: -11px;
    left: -11px;
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

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media all and (max-width: 1280px) {
    flex-direction: column;
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
      render={data => <AboutComponent data={data} {...props} />}
    />
  )
}

const AboutComponent = props => {
  const { description } = props.data.allContentfulAbout.edges[0].node
  const { edges } = props.data.allContentfulAboutImg
  const { setRef } = props
  return (
    <Wrapper name="about" ref={setRef}>
      <Title>What we do</Title>
      <Header>story about us</Header>
      <Description>{description}</Description>
      <ImgWrapper>
        {edges
          .sort((a, b) => a.node.order - b.node.order)
          .map(element => (
            <Rectangle key={element.node.name}>
              <Image
                alt={element.node.name}
                src={element.node.image.fixed.src}
              />
            </Rectangle>
          ))}
      </ImgWrapper>
    </Wrapper>
  )
}

export default About
