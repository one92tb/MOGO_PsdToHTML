import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { TitleStyle, HeadlineStyle } from "../../css/style.js"

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 62px;
  position: relative;

  @media all and (max-width: 1200px) {
    background: #f6f6f6;
  }
`

const Background = styled.img`
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 0.15;

  @media all and (max-width: 1200px) {
    display: none;
  }
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
`

const Title = styled.span`
  ${TitleStyle}

  padding: 111.5px 0 12px 0;
`

const Headline = styled.span`
  ${HeadlineStyle}

  ::after {
    margin: 36.5px auto 86px auto;
  }
`
const PeopleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 57px;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`

const PersonWrapper = styled.div`
  display: flex;
  width: 515px;
  margin-bottom: 68px;
`

const PersonImage = styled.img`
  border-radius: 50%;
  margin-right: 29px;
  height: 112px;
  width: 112px;

  @media all and (max-width: 480px) {
    display: none;
  }
`

const DescriptionWrapper = styled.div``

const Name = styled.span`
  font-size: 14px;
  text-align: left;
  font-family: "Montserrat-Regular";
  text-transform: uppercase;
  display: block;
  margin: 10px 0 11.5px 0;
`

const Profession = styled.span`
  font-family: "Roboto-LightItalic";
  font-size: 15px;
  color: rgba(51, 51, 51, 255);
  text-align: left;
  display: block;

  ::after {
    content: "";
    display: block;
    border-bottom: 3px solid #f38181;
    width: 60px;
    margin: 16.5px 0 16px 0;
  }
`

const Description = styled.span`
  font-size: 15px;
  line-height: 24px;
  display: block;
  color: #999999;
  font-family: "Roboto-Regular";
`

const People = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulPeople {
          edges {
            node {
              order
              name
              profession
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
        allContentfulPeopleImg {
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
    render={data => {
      const { edges } = data.allContentfulPeople
      return (
        <Wrapper>
          <Background
            className="lazyload"
            data-src={data.allContentfulPeopleImg.edges[0].node.image.fixed.src}
            alt={data.allContentfulPeopleImg.edges[0].node.name}
          />
          <Inner>
            <Title>Happy Clients</Title>
            <Headline>what people say</Headline>
            <PeopleWrapper>
              {edges
                .sort((a, b) => a.node.order - b.node.order)
                .map((person, id) => (
                  <PersonWrapper key={id}>
                    <PersonImage
                      src={person.node.image.fixed.src}
                      alt={person.node.image.title}
                    />
                    <DescriptionWrapper>
                      <Name>{person.node.name}</Name>
                      <Profession>{person.node.profession}</Profession>
                      <Description>{person.node.description}</Description>
                    </DescriptionWrapper>
                  </PersonWrapper>
                ))}
            </PeopleWrapper>
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default People
