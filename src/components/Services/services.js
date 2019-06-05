import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 70.5px;
`

const Title = styled.span`
  font-family: KaushanScript-Regular;
  font-size: 24px;
  text-align: center;
  display: block;
  padding: 107.5px 0 15px 0;
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
    margin: 36.5px auto 15.5px auto;
  }
`

const Image = styled.img``

const Service = styled.div`
  display: flex;
  margin: 46.75px 0;
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

/*const Shape = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 51px 0 47px 0;
  top: 40px;
`

const ImageWrapper = styled.div``
*/
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
      const services = data.allContentfulServices.edges

      return (
        <Wrapper>
          <Title>We work with</Title>
          <Header>amazing services</Header>
          <ServicesBox>
            {services
              .sort((a, b) => a.node.order - b.node.order)
              .map(({ node }) => (
                <Service key={node.order}>
                  <Image src={node.icon.fixed.src} width={32} height={31} />
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
