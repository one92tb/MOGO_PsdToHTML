import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { TitleStyle, HeadlineStyle, DescriptionStyle } from "../../css/style.js"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 107.5px auto 120px auto;
`
const CardWrapper = styled.div`
  margin-top: 40px;
`

const Title = styled.span`
  margin-bottom: 14px;

  ${TitleStyle}
`

const Headline = styled.span`
  ::after {
    margin: 36.5px auto 41.5px auto;
  }

  ${HeadlineStyle}
`

const Description = styled.span`
  margin: 0 auto 47.5px auto;

  ${DescriptionStyle}
`

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (max-width: 1280px) {
    justify-content: center;
  }
`
const ImageWrapper = styled.div`
  width: 570px;
  height: 380px;
  position: relative;
  margin-top: 40px;

  @media all and (max-width: 768px) {
    width: 429px;
    height: 285px;
  }

  @media all and (max-width: 480px) {
    width: 285px;
    height: 190px;
  }
`

const Image = styled.img`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 572px;
  heigh: 382px;

  @media all and (max-width: 768px) {
    width: 431px;
    height: 287px;
  }

  @media all and (max-width: 480px) {
    width: 287px;
    height: 192px;
  }
`

const Card = styled.div`
  width: 600px;
  padding: 0;
  margin: 0 0 10px 0;

  @media all and (max-width: 768px) {
    width: 450px;
  }

  @media all and (max-width: 480px) {
    width: 300px;
  }
`

const CardHeader = styled.div`
  display: flex;
  height: 30px;
  border: 1px solid #e5e5e5;
  height: 60px;
  align-items: center;
  padding: 0 20px 0 16px;
  justify-content: space-between;
  box-sizing: border-box;

  @media all and (max-width: 480px) {
    height: 45px;
  }
`

const CardHeaderInner = styled.div`
  display: flex;
  align-items: center;
`

const CardBody = styled.div`
  opacity: ${props => (props.name === props.activeStatus ? "1" : "0")};
  height: ${props => (props.name === props.activeStatus ? "181px" : "0")};

  transition: all 0.5s ease;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  border-top: none;
  box-sizing: border-box;
`
const CardDescription = styled.span`
  color: rgba(153, 153, 153, 255);
  display: block;
  font-size: 15px;
  font-family: "Roboto-LightItalic";
  line-height: 24px;
  margin: 17px 25px 24px 20px;
  width: 525px;
  height: 140px;
  overflow-y: scroll;
  padding-right: 25px;

  @media all and (max-width: 768px) {
    width: 394px;
  }

  @media all and (max-width: 480px) {
    width: 230px;
    font-size: 12px;
  }

  &::-webkit-scrollbar {
    background-color: #f5f5f5;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border: 5px solid #93e1d3;
    border-radius: 16px;
    margin-left: 20px;
  }
`

const Icon = styled.img`
  @media all and (max-width: 480px) {
    width: 16px;
    heigh: 16px;
  }
`

const ArrowIcon = styled.img`
  width: 22px;
  heigh: 12px;

  &:hover {
    cursor: pointer;
  }

  @media all and (max-width: 480px) {
    width: 18px;
    heigh: 10px;
  }
`

const Name = styled.span`
  font-size: 14px;
  font-family: "Montserrat-Regular";
  text-transform: capitalize;
  color: #333;
  margin-left: 15px;

  @media all and (max-width: 480px) {
    font-size: 12px;
    margin-left: 10px;
  }
`

const WhatWeDo = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulWhatWeDo {
          edges {
            node {
              order
              name
              description {
                description
              }
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
        allContentfulWhatWeDoImg {
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
    render={data => <WhatWeDoComponent data={data} />}
  />
)

class WhatWeDoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: "photography",
    }
  }

  handleActive = e => {
    this.setState({
      active: e.target.alt,
    })
  }

  render() {
    const { data } = this.props
    return (
      <Wrapper>
        <Title>service</Title>
        <Headline>what we do</Headline>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Description>
        <Article>
          <ImageWrapper>
            <Image
              data-src={
                data.allContentfulWhatWeDoImg.edges[2].node.image.fixed.src
              }
              className="lazyload"
            />
          </ImageWrapper>
          <CardWrapper>
            {data.allContentfulWhatWeDo.edges.map((element, id, arr) => {
              const { node } = element
              return (
                <Card key={id}>
                  <CardHeader>
                    <CardHeaderInner>
                      <Icon src={node.image.fixed.src} />
                      <Name>{node.name}</Name>
                    </CardHeaderInner>
                    <ArrowIcon
                      data-src={
                        node.name === this.state.active
                          ? this.props.data.allContentfulWhatWeDoImg.edges[1]
                              .node.image.fixed.src
                          : this.props.data.allContentfulWhatWeDoImg.edges[0]
                              .node.image.fixed.src
                      }
                      className="lazyload"
                      alt={element.node.name}
                      onClick={e => this.handleActive(e)}
                    />
                  </CardHeader>
                  <CardBody name={node.name} activeStatus={this.state.active}>
                    <CardDescription>
                      {node.description.description} <br /> <br />{" "}
                      {node.description.description}
                    </CardDescription>
                  </CardBody>
                </Card>
              )
            })}
          </CardWrapper>
        </Article>
      </Wrapper>
    )
  }
}

export default WhatWeDo
