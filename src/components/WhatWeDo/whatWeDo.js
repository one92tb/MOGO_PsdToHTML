import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 107.5px auto 120px auto;
`
const CardWrapper = styled.div``

const Title = styled.span`
  color: #333;
  font-size: 24px;
  font-family: KaushanScript-Regular;
  text-align: center;
  display: block;
  margin-bottom: 14px;

  ::first-letter {
    text-transform: capitalize;
  }
`

const Header = styled.span`
  color: #333;
  font-size: 30px;
  font-family: Montserrat-Bold;
  display: block;
  text-align: center;
  text-transform: capitalize;

  ::after {
    content: "";
    display: block;
    border-top: 3px solid red;
    width: 60px;
    margin: 36.5px auto 41.5px auto;
  }
`

const Description = styled.span`
  color: #333;
  font-size: 15px;
  display: block;
  text-align: center;
  font-family: Roboto-Regular;
  line-height: 24px;
  margin-bottom: 87.5px;
  max-width: 954px;
  margin: 0 auto 87.5px auto;
`

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ImageWrapper = styled.div`
  width: 570px;
  height: 380px;
  position: relative;
  margin-right: 30px;
`

const Image = styled.img`
  position: absolute;
  top: -1px;
  left: -1px;
`

const Card = styled.div`
  margin-left: 30px;
  width: 600px;
  padding: 0;
  margin: 0 0 10px 0;
`

const CardHeader = styled.div`
  display: flex;
  height: 30px;
  border: 1px solid #e5e5e5;
  height: 60px;
  align-items: center;
  padding: 0 16px 0 20px;
  justify-content: space-between;
  box-sizing: border-box;
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
  display: block;
  font-size: 15px;
  font-family: "Roboto-LightItalic";
  line-height: 24px;
  margin: 17px 25px 24px 20px;
  width: 525px;
  height: 140px;
  overflow-y: scroll;
  padding-right: 25px;

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

const Icon = styled.img``

const ArrowIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`

const Name = styled.span`
  font-size: 14px;
  font-family: "Montserrat-Regular";
  text-transform: capitalize;
  color: #333;
  margin-left: 15px;
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
        allContentfulWhatWeDoImg {
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
        <Header>what we do</Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Description>
        <Article>
          <ImageWrapper>
            <Image
              src={data.allContentfulWhatWeDoImg.edges[2].node.image.fixed.src}
              width={572}
              height={382}
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
                      src={
                        node.name === this.state.active
                          ? this.props.data.allContentfulWhatWeDoImg.edges[0]
                              .node.image.fixed.src
                          : this.props.data.allContentfulWhatWeDoImg.edges[1]
                              .node.image.fixed.src
                      }
                      width={22}
                      height={12}
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
