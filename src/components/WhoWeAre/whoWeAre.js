import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 97px auto 94px auto;
`

const Title = styled.span`
  font-size: 24px;
  text-align: center;
  font-family: "KaushanScript-Regular";
  display: block;
`
const Header = styled.span`
  font-family: "Montserrat-Bold";
  font-size: 30px;
  text-align: center;
  display: block;
  text-transform: uppercase;
  margin-top: 15.5px;

  ::after {
    content: "";
    border-bottom: 3px solid #f38181;
    width: 60px;
    display: block;
    margin: 36.5px auto 41.5px auto;
  }
`

const Description = styled.span`
  font-size: 15px;
  font-family: "Roboto-Regular";
  line-height: 24px;
  display: block;
  text-align: center;
  width: 960px;
  margin: 0 auto;
  margin-bottom: 87.5px;
  color: rgba(153, 153, 153, 255);
`

const ImageWrapper = styled.div`
  width: 380px;
  height: 470px;
  background: #95e1d3;
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
`

const TeamMate = styled.div``

const IconWrapper = styled.div`
  height: 56px;
  width: 224px;
  background: #f38181;
  display: none;
`
const Icon = styled.i`
  color: #f38181;
`

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background: #fce38a;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;

  &:not(:first-child) {
    border-left: 1px solid #f38181;
  }

  &:hover {
    background: #f38181;
  }

  &:hover ${Icon} {
    color: #fff;
  }
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -1px;
  left: -1px;
  width: 382px;
  height: 472px;
  background-image: url(${props => props.imageSrc});
  background-repeat: no-repeat;

  &:hover {
    top: -11px;
    left: -11px;
    background: linear-gradient(
        to bottom,
        rgba(243, 138, 129, 0.8),
        rgba(251, 227, 137, 0.8)
      ),
      url(${props => props.imageSrc});
  }

  &:hover ${IconWrapper} {
    display: flex;
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
      console.log(data)
      const teamMates = data.allContentfulWhoWeAre.edges
      console.log(teamMates)
      return (
        <Wrapper>
          <Title>who we are</Title>
          <Header>meet our team</Header>
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
                  <ImageWrapper>
                    <Image imageSrc={mate.node.image.fixed.src}>
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
                    </Image>
                  </ImageWrapper>
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
//
