import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  padding: 0 18.645833vw 0 18.8541667vw;
  margin-bottom: 109px;
`

const Title = styled.span`
  font-family: KaushanScript-Regular;
  font-size: 24px;
  text-align: center;
  color: #333;
  display: block;
  padding: 89px 0 21px 0;
`

const Header = styled.span`
  font-family: Montserrat-Bold;
  font-size: 30px;
  line-height: 23px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  display: block;

  ::after {
    content: "";
    display: block;
    border: 1.5px solid #f38181;
    width: 60px;
    margin: 40px auto 42.5px auto;
  }
`

const Description = styled.span`
  font-family: Roboto-Regular;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  margin: 0 auto;
  display: block;
  width: 960px;
  margin-bottom: 95.5px;
`

const Rectangle = styled.div`
  width: 380px;
  height: 250px;
  background-color: #95e1d3;
`

const Image = styled.img`
  &:hover {
    position: relative;
    top: -10px;
    left: -10px;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 109px;
`

const About = () => (
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
        about1: file(relativePath: { eq: "about_1.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about2: file(relativePath: { eq: "about_2.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about3: file(relativePath: { eq: "about_3.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const { description } = data.allContentfulAbout.edges[0].node

      return (
        <Wrapper>
          <Title>What we do</Title>
          <Header>story about us</Header>
          <Description>{description}</Description>
          <ImgWrapper>
            {Object.values(data)
              .slice(1, 4)
              .map((element, id) => (
                <Rectangle key={id}>
                  <Image
                    src={element.childImageSharp.fluid.src}
                    width={382}
                    height={252}
                  />
                </Rectangle>
              ))}
          </ImgWrapper>
        </Wrapper>
      )
    }}
  />
)
export default About
