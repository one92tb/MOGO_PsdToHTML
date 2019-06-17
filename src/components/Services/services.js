import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { TitleStyle, HeadlineStyle } from "../../css/style.js"

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 70.5px;
`

const Title = styled.span`
  padding: 107.5px 0 15px 0;

  ${TitleStyle}
`

const Headline = styled.span`
  ::after {
    margin: 36.5px auto 15.5px auto;
  }

  ${HeadlineStyle}
`

const Image = styled.img``

const Service = styled.div`
  display: flex;
  margin: 46.75px 0;

  @media all and (max-width: 768px) {
    margin: 30px 0;
  }
`

const ServicesBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media all and (max-width: 1280px) {
    margin-top: 20px;
    justify-content: space-evenly;
  }
`

const Name = styled.span`
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #333;
  text-transform: uppercase;
  display: block;
  padding-bottom: 12.5px;

  @media all and (max-width: 480px) {
    font-size: 12px;
  }
`

const Description = styled.span`
  color: rgba(153, 153, 153, 255);
  display: block;
  text-align: left;
  font-size: 15px;
  line-height: 24px;

  &:first-letter {
    text-transform: capitalize;
  }

  font-family: "Roboto-Regular";
  max-width: 290px;

  @media all and (max-width: 480px) {
    max-width: 220px;
    font-size: 12px;
    line-heigh: 20px;
  }
`

const TextWrapper = styled.div`
  padding-left: 29px;

  @media all and (max-width: 480px) {
    padding-left: 15px;
  }
`

const Services = props => (
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
    render={data => <ServicesComponent data={data} {...props} />}
  />
)

const ServicesComponent = props => {
  console.log(props)
  const { setRef } = props
  const services = props.data.allContentfulServices.edges

  return (
    <Wrapper name="service" ref={setRef}>
      <Title>we work with</Title>
      <Headline>amazing services</Headline>
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
}

export default Services
