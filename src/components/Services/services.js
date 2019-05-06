import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  padding: 0 18.645833vw 0 18.8541667vw;
  margin-bottom: 121px;
`

const Title = styled.span`
  font-family: KaushanScript-Regular;
  font-size: 24px;
  text-align: center;
  display: block;
  padding: 107px 0 14.5px 0;
  color: #333;
`

const Header = styled.span`
  font-family: Montserrat-Bold;
  font-size: 30px;
  text-transform: uppercase;
  display: block;
  text-align: center;
  color: #333;

  ::after {
    content: "";
    display: block;
    border: 1.5px solid #f38181;
    width: 60px;
    margin: 36.5px auto 49px auto;
  }
`
/*

*/
const Image = styled.img``

const Service = styled.div`
  display: flex;
`

const ServicesBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Name = styled.span`
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #333;
  text-transform: uppercase;
  display: block;
  padding-bottom: 12.5px;
`

const Description = styled.span`
  color: #999;
  display: block;
  text-align: left;
  width: 290px;
  font-size: 15px;
  line-height: 24px;
  color: #999;
  font-family: "Roboto-Regular";
`

const Shape = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 51px 0 47px 0;
`

const ImageWrapper = styled.div``

const TextWrapper = styled.div`
  padding-left: 29px;
`

const Services = () => (
  <StaticQuery
    query={graphql`
      query Services {
        allContentfulServices {
          edges {
            node {
              order
              title
              description
            }
          }
        }
        service1: file(relativePath: { eq: "service1.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service2: file(relativePath: { eq: "service2.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service3: file(relativePath: { eq: "service3.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service4: file(relativePath: { eq: "service4.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service5: file(relativePath: { eq: "service5.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service6: file(relativePath: { eq: "service6.png" }) {
          childImageSharp {
            fluid(maxWidth: 32) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const services = data.allContentfulServices.edges

      return (
        <Wrapper>
          <Title>We work with</Title>
          <Header>amazing services</Header>
          <ServicesBox>
            {services
              .sort((a, b) => a.node.order - b.node.order)
              .slice(0, 3)
              .map(({ node }) => (
                <Service key={node.order}>
                  <Image
                    src={data[`service${node.order}`].childImageSharp.fluid.src}
                    width={32}
                    height={31}
                  />
                  <TextWrapper>
                    <Name>{node.title}</Name>
                    <Description>{node.description}</Description>
                  </TextWrapper>
                </Service>
              ))}
          </ServicesBox>
          <Shape />
          <ServicesBox>
            {services
              .sort((a, b) => a.node.order - b.node.order)
              .slice(3, 6)
              .map(({ node }) => (
                <Service key={node.order}>
                  <Image
                    src={data[`service${node.order}`].childImageSharp.fluid.src}
                    width={32}
                    height={31}
                  />
                  <TextWrapper>
                    <Name>{node.title}</Name>
                    <Description>{node.description}</Description>
                  </TextWrapper>
                </Service>
              ))}
          </ServicesBox>
        </Wrapper>
      )
    }}
  />
)

export default Services
