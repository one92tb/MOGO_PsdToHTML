import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { TitleStyle, HeadlineStyle } from "../../css/style.js"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 108px 0 70.5px 0;
`

const Title = styled.span`
  padding-bottom: 13.5px;

  ${TitleStyle}
`

const Headline = styled.span`
  ::after {
    margin: 36.5px auto 47px auto;
  }

  ${HeadlineStyle}
`

const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`

const BlogBox = styled.div`
  margin-bottom: 40px;
  width: 380px;

  @media all and (max-width: 480px) {
    width: 266px;
  }
`

const Rectangle = styled.div`
  position: relative;
  background: #000;
  width: 380px;
  height: 240px;

  @media all and (max-width: 480px) {
    width: 266px;
    height: 168px;
  }
`

const DateRectangle = styled.div`
  width: 60px;
  height: 70px;
  background: #95e1d3;
  position: absolute;
  bottom: 10px;
  left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Image = styled.img`
  width: 382px;
  height: 242px;
  position: relative;
  bottom: 1px;
  right: 1px;

  @media all and (max-width: 480px) {
    width: 268px;
    height: 170px;
  }
`

const BlogTitle = styled.span`
  display: block;
  font-family: "Montserrat-Regular";
  color: rgba(51, 51, 51, 255);
  text-align: left;
  text-transform: uppercase;
  padding: 16px 0 11.5px 0;
`

const Description = styled.span`
  font-family: "Roboto-Regular";
  max-width: 380px;
  display: block;
  color: rgba(153, 153, 153, 255);
  text-align: left;
  line-height: 24px;

  ::after {
    content: "";
    display: block;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    margin: 15.5px 0 14.5px 0;
  }
`

const Statistics = styled.div`
  display: flex;
  align-items: center;
  width: 105px;
  justify-content: space-between;
`

const Viewers = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Comments = styled.div`
  width: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ViewerIcon = styled.i`
  color: #95e1d3;

  ::before {
    font-size: 20px;
  }
`

const CommentIcon = styled.i`
  color: #95e1d3;
  ::before {
    font-size: 16px;
  }
`

const Amount = styled.span`
  font-size: 15px;
  color: rgba(153, 153, 153, 255);
  font-family: "Roboto-LightItalic";
`

const Month = styled.span`
  font-size: 12px;
  font-family: "Roboto-LightItalic";
  display: block;
  color: rgba(255, 255, 255, 255);
`

const Day = styled.span`
  font-family: "Montserrat-Bold";
  font-size: 30px;
  color: rgba(255, 255, 255, 255);
  display: block;
`

const Blog = props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlog {
          edges {
            node {
              order
              name
              description
              month
              day
              viewers
              comments
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
    render={data => {
      const { edges } = data.allContentfulBlog
      console.log(edges)
      return (
        <Wrapper name="blog" ref={props.setRef}>
          <Title>happy client</Title>
          <Headline>what people say</Headline>
          <BlogWrapper>
            {edges
              .sort((a, b) => a.node.order - b.node.order)
              .map((blog, id) => (
                <BlogBox key={id}>
                  <Rectangle>
                    <Image
                      data-src={blog.node.image.fixed.src}
                      alt={blog.node.image.name}
                      className="lazyload"
                    />
                    <DateRectangle>
                      <Day>{blog.node.day}</Day>
                      <Month>{blog.node.month}</Month>
                    </DateRectangle>
                  </Rectangle>
                  <BlogTitle>{blog.node.name}</BlogTitle>
                  <Description>{blog.node.description}</Description>
                  <Statistics>
                    <Viewers>
                      <ViewerIcon className="flaticon-eye" />
                      <Amount> {blog.node.viewers}</Amount>
                    </Viewers>
                    <Comments>
                      <CommentIcon className="flaticon-comment" />
                      <Amount>{blog.node.comments}</Amount>
                    </Comments>
                  </Statistics>
                </BlogBox>
              ))}
          </BlogWrapper>
        </Wrapper>
      )
    }}
  />
)

export default Blog
