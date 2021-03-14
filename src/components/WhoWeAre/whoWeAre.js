import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { TitleStyle, HeadlineStyle, DescriptionStyle } from "../../css/style.js"

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 97px auto 94px auto;
`

const Title = styled.span`
  ${TitleStyle}
`
const Headline = styled.span`
  margin-top: 15.5px;

  ::after {
    margin: 36.5px auto 41.5px auto;
  }

  ${HeadlineStyle}
`

const Description = styled.span`
  margin: 0 auto;
  margin-bottom: 87.5px;

  ${DescriptionStyle}
`

const Name = styled.span`
  font-size: 14px;
  text-align: center;
  display: block;
  color: #333;
  font-family: "Montserrat-Regular";
  text-transform: uppercase;
  margin: 28px 0 8px 0;
`

const Profession = styled.span`
  font-size: 15px;
  display: block;
  text-align: center;
  line-height: 24px;
  font-family: "Roboto-LightItalic";
  color: rgba(153, 153, 153, 255);
  margin-bottom: 19px;
`

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`

const TeamMate = styled.div``

const IconWrapper = styled.div`
  height: 56px;
  width: 224px;
  background: #f38181;
  display: flex;
  opacity: 0;
`
const Icon = styled.i`
  color: #f38181;

  ::before {
    font-size: 26px;
    margin-left: 0;
  }
`

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background: #fce38a;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:not(:first-child) {
    border-left: 1px solid #f38181;
  }

  &:hover {
    transition: 1s ease;
    background: #f38181;
  }

  &:hover ${Icon} {
    transition: 1s ease;
    color: #fff;
  }
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -1px;
  left: -1px;
  width: 382px;
  height: 472px;
  background: url(${props => props.bgUrl});

  &:hover {
    transition: 1s ease;
    top: -11px;
    left: -11px;
    background: linear-gradient(
        to bottom,
        rgba(230, 129, 130, 0.8),
        rgba(251, 227, 137, 0.8)
      ),
      url(${props => props.bgUrl});
  }

  &:hover ${IconWrapper} {
    transition: 1s ease;
    opacity: 1;
  }

  @media all and (max-width: 480px) {
    width: 262px;
    height: 324px;
  }
`

const Rectangle = styled.div`
  width: 380px;
  height: 470px;
  background: #95e1d3;
  position: relative;

  @media all and (max-width: 480px) {
    width: 260px;
    height: 322px;
  }
`

const WhoWeAre = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulWhoWeAre {
          edges {
            node {
              order
              name
              profession
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
        allContentfulWhoWeAreDescription {
          edges {
            node {
              order
              name
              description {
                description
              }
            }
          }
        }
      }
    `}
    render={data => {
      const teamMates = data.allContentfulWhoWeAre.edges
      return (
        <Wrapper>
          <Title>who we are</Title>
          <Headline>meet our team</Headline>
          <Description>
            {
              data.allContentfulWhoWeAreDescription.edges[0].node.description
                .description
            }
          </Description>
          <TeamWrapper>
            {teamMates.map((mate, id) => {
              return (
                <TeamMate key={mate.node.name}>
                  <Rectangle bgUrl={mate.node.image.fixed.src}>
                    <ImageBox bgUrl={mate.node.image.fixed.src}>
                      <IconWrapper>
                        <IconBox>
                          <Icon className="flaticon-facebook" />
                        </IconBox>
                        <IconBox>
                          <Icon className="flaticon-twitter" />
                        </IconBox>
                        <IconBox>
                          <Icon className="flaticon-pinterest" />
                        </IconBox>
                        <IconBox>
                          <Icon className="flaticon-instagram" />
                        </IconBox>
                      </IconWrapper>
                    </ImageBox>
                  </Rectangle>
                  <Name>{mate.node.name}</Name>
                  <Profession>{mate.node.profession}</Profession>
                </TeamMate>
              )
            })}
          </TeamWrapper>
        </Wrapper>
      )
    }}
  />
)

export default WhoWeAre
