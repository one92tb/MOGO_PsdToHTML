import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { TitleStyle, HeadlineStyle, DescriptionStyle } from "../../css/style.js"

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.span`
  ${TitleStyle}

  padding-top: 108px;
`

const Headline = styled.span`
  margin: 14px 0 0 0;

  ::after {
    margin: 38px auto 0 auto;
  }

  ${HeadlineStyle}
`

const Descripton = styled.span`
  margin: 41.5px auto 96.5px auto;

  ${DescriptionStyle}
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media all and (max-width: 1919px) {
    justify-content: space-evenly;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media all and (max-width: 1200px) {
    width: 50%;
  }

  @media all and (max-width: 768px) {
    width: 100%;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  opacity: 0;
`

const Icon = styled.img`
  margin: 0 auto;
  display: block;
`

const ImageHeadline = styled.span`
  font-family: "Montserrat-Bold";
  font-size: 14pt;
  color: #fff
  text-transform: capitalize;
  display: block;
  margin: 13.5px 0 6px 0;
  text-align: center;

`

const ImageText = styled.span`
  font-family: "Roboto-LightItalic";
  font-size: 15pt;
  color: #fff;
  display: block;
  text-align: center;
`

const Rectangle = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(243, 138, 129, 0.8),
      rgba(251, 227, 137, 0.8)
    ),
    url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;

  &:hover ${ContentWrapper} {
    transition: 1s ease;
    opacity: 1;
  }

  &:hover {
    transition: 1s ease;
    opacity: 1;

    background-size: cover;
    background-repeat: no-repeat;
  }

  &:hover ${Image} {
    transition: 1s ease;
    opacity: 0;
  }

  ::before {
    content: "";
    display: block;
    padding-top: ${props => (props.name === "ourWork_5" ? "162.5%" : "81.25%")};
  }
`

const columns = [[0, 1], [2, 3], [4], [5, 6]]

const OurWork = props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulOurWork {
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
        allContentfulOurWorkImg {
          edges {
            node {
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
      const { setRef } = props
      const edges = data.allContentfulOurWork.edges.sort(
        (a, b) => a.node.order - b.node.order
      )
      return (
        <Wrapper ref={setRef} name="work">
          <Title>what we do</Title>
          <Headline>some of our work</Headline>
          <Descripton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Descripton>
          <ImagesWrapper>
            {columns.map((column_number, id) => (
              <Column key={id}>
                {column_number.map((square_number, id) => (
                  <Rectangle
                    key={id}
                    imageSrc={edges[square_number].node.image.fixed.src}
                    name={edges[square_number].node.name}
                  >
                    <Image
                      data-src={edges[square_number].node.image.fixed.src}
                      className="lazyload"
                    />
                    <ContentWrapper>
                      <Icon
                        data-src={
                          data.allContentfulOurWorkImg.edges[0].node.image.fixed
                            .src
                        }
                        className="lazyload"
                      />
                      <ImageHeadline>creatively designed</ImageHeadline>
                      <ImageText>lorem ipsum dolor sit</ImageText>
                    </ContentWrapper>
                  </Rectangle>
                ))}
              </Column>
            ))}
          </ImagesWrapper>
        </Wrapper>
      )
    }}
  />
)

export default OurWork

/*
<Column>
  <Rectangle
    imageSrc={edges[0].node.image.fixed.src}
    name={edges[0].node.name}
  >
    <Image src={edges[0].node.image.fixed.src} />
    <ContentWrapper>
      <Icon
        data-src={
          data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
        }
        className="lazyload"
      />
      <ImageHeadline>creatively designed</ImageHeadline>
      <ImageText>lorem ipsum dolor sit</ImageText>
    </ContentWrapper>
  </Rectangle>
  <Rectangle
    imageSrc={edges[1].node.image.fixed.src}
    name={edges[1].node.name}
  >
    <Image src={edges[1].node.image.fixed.src} />
    <ContentWrapper>
      <Icon
        data-src={
          data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
        }
        className="lazyload"
      />
      <ImageHeadline>creatively designed</ImageHeadline>
      <ImageText>lorem ipsum dolor sit</ImageText>
    </ContentWrapper>
  </Rectangle>
</Column>
<Column>
  <Rectangle
    imageSrc={edges[2].node.image.fixed.src}
    name={edges[2].node.name}
  >
    <Image src={edges[2].node.image.fixed.src} />
    <ContentWrapper>
      <Icon
        data-src={
          data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
        }
        className="lazyload"
      />
      <ImageHeadline>creatively designed</ImageHeadline>
      <ImageText>lorem ipsum dolor sit</ImageText>
    </ContentWrapper>
  </Rectangle>
  <Rectangle
    imageSrc={edges[3].node.image.fixed.src}
    name={edges[3].node.name}
  >
    <Image src={edges[3].node.image.fixed.src} />
    <ContentWrapper>
      <Icon
        data-src={
          data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
        }
        className="lazyload"
      />
      <ImageHeadline>creatively designed</ImageHeadline>
      <ImageText>lorem ipsum dolor sit</ImageText>
    </ContentWrapper>
  </Rectangle>
</Column>
<Column>
  <Rectangle
    imageSrc={edges[4].node.image.fixed.src}
    name={edges[4].node.name}
  >
    <Image src={edges[4].node.image.fixed.src} />
    <ContentWrapper>
      <Icon
        data-src={
          data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
        }
        className="lazyload"
      />
      <ImageHeadline>creatively designed</ImageHeadline>
      <ImageText>lorem ipsum dolor sit</ImageText>
    </ContentWrapper>
  </Rectangle>
</Column>
<Column>
  <Rectangle
    imageSrc={edges[5].node.image.fixed.src}
    name={edges[5].node.name}
  >
    <Image
      className="lazyload"
      data-src={edges[5].node.image.fixed.src}
    />
    <ContentWrapper>
      <Icon
        data-src={
          data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
        }
        className="lazyload"
      />
      <ImageHeadline>creatively designed</ImageHeadline>
      <ImageText>lorem ipsum dolor sit</ImageText>
    </ContentWrapper>
  </Rectangle>
  <Rectangle
    imageSrc={edges[6].node.image.fixed.src}
    name={edges[6].node.name}
  >
    <Image src={edges[6].node.image.fixed.src} />
    <ContentWrapper>
      <Icon
        data-src={
          data.allContentfulOurWorkImg.edges[0].node.image.fixed.src
        }
        className="lazyload"
      />
      <ImageHeadline>creatively designed</ImageHeadline>
      <ImageText>lorem ipsum dolor sit</ImageText>
    </ContentWrapper>
  </Rectangle>
</Column>
*/
