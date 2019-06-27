import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  background: #f8f8f8;
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding-top: 54px;
`

const ContactRectangle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 69px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const Mogo = styled.div`
  @media all and (max-width: 768px) {
    padding: 0 20px 0 20px;
    margin-bottom: 30px;
  }
`

const Logo = styled.span`
  font-family: "Montserrat-Bold";
  font-size: 46px;
  color: #cccccc;
  display: block;
  padding-top: 10px;
  padding-bottom: 28.5px;

  @media all and (max-width: 768px) {
    font-size: 32px;
  }
`

const Description = styled.span`
  font-family: "Roboto-Regular";
  display: block;
  padding-bottom: 42px;
  max-width: 472px;
  font-size: 15px;
  line-height: 24px;
  color: rgba(153, 153, 153, 255);

  @media all and (max-width: 768px) {
    line-height: 20px;
    font-size: 12px;
  }
`

const Followers = styled.span`
  font-family: "Montserrat-Regular";
  font-size: 12px;
  color: rgba(51, 51, 51, 255);
  text-align: left;
  display: block;

  ::after {
    content: "";
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    display: block;
    margin: 15.5px 0 12px 0;
  }
`
const Amount = styled.span`
  font-family: "Montserrat-Bold";
  font-size: 18px;
`

const Icon = styled.i`
  ::before {
    font-size: 16px;
  }

  @media all and (max-width: 768px) {
    ::before {
      font-size: 12px;
    }
  }
`

const FollowUs = styled.span`
  font-family: "Roboto-LightItalic";
  font-size: 15px;
  color: rgba(153, 153, 153, 255);
  margin-right: 23px;

  @media all and (max-width: 768px) {
    font-size: 12px;
    margin-right: 5px;
  }
`

const IconBox = styled.div`
  margin-bottom: 34px;
  display: flex;
  align-items: center;
`

const Icons = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  color: #95e1d3;

  @media all and (max-width: 768px) {
    width: 150px;
  }
`

const IconText = styled.span``

const InputWrapper = styled.div`
  display: flex;
`

const Input = styled.input`
  width: 230px;
  font-family: "Roboto-LightItalic";
  font-size: 15px;
  color: rgba(204, 204, 204, 255);
  text-align: left;
  padding: 0;
  padding-left: 13px;
  height: 40px;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;

  @media all and (max-width: 480px) {
    width: 150px;
    font-size: 12px;
  }
`

const Button = styled.button`
  font-family: "Montserrat-Bold";
  font-size: 14px;
  color: #fff;
  background: #95e1d3;
  border: none;
  width: 150px;
  height: 40px;
  padding: 0;
  box-sizing: border-box;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media all and (max-width: 480px) {
    width: 80px;
    font-size: 10px;
  }
`

const Blogs = styled.div`
  @media all and (max-width: 768px) {
    padding: 0 20px 0 20px;
    margin-bottom: 30px;
  }
`

const Blog = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 31px;
  }
`

const BlogTextBox = styled.div``

const BlogsTitle = styled.span`
  display: block;
  font-family: "Montserrat-Regular";
  font-size: 14px;
  text-align: left;
  color: rgba(51, 51, 51, 255);
  text-transform: uppercase;
  padding: 22px 0 37px 0;

  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`

const BlogsWrapper = styled.div``

const BlogImage = styled.img`
  margin-right: 20px;
`

const BlogTitle = styled.span`
  font-size: 12px;
  color: rgba(51, 51, 51, 255);
  text-align: left;
  font-family: "Montserrat-Regular";
  text-transform: uppercase;
  display: block;
  line-height: 18px;
  padding: 16.5px 0 6.5px 0;
  max-width: 200px;

  @media all and (max-width: 768px) {
    line-height: 16px;
  }

  @media all and (max-width: 480px) {
    font-size: 10px;
  }
`

const Date = styled.span`
  font-family: "Roboto-LightItalic";
  font-size: 13px;
  color: rgba(153, 153, 153, 255);
  text-align: left;
  display: block;

  @media all and (max-width: 480px) {
    font-size: 10px;
  }
`

const InstaTitle = styled.span`
  font-family: "Montserrat-Regular";
  font-size: 14px;
  color: rgba(51, 51, 51, 255);
  text-align: left;
  display: block;
  text-transform: uppercase;
  padding: 22px 0 37px 0;
`

const Instagram = styled.div`
  @media all and (max-width: 768px) {
    padding: 0 20px 0 20px;
  }
`

const InstaImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 270px;

  @media all and (max-width: 480px) {
    justify-content: space-evenly;
  }
`

const InstaImg = styled.img`
  width: 88px
  height: 88px;
  margin-right: 2px;
  margin-bottom: 2px;
`

const ViewMore = styled.span`
  font-family: "Roboto-LightItalic";
  font-size: 13px;
  text-align: left;
  color: rgba(51, 51, 51, 255);
  display: block;
  padding-top: 19px;
`

const Footer = styled.span`
  text-align: center;
  font-family: "Montserrat-Bold";
  font-size: 14px;
  color: rgba(51, 51, 51, 255);
  display: block;

  ::before {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 22px;
  }
  padding-bottom: 20px;

  @media all and (max-width: 480px) {
    font-size: 10px;
  }
`

const Author = styled.span`
  color: #f38181;
`

const Contact = props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulContact {
          edges {
            node {
              order
              name
              description {
                description
              }
              followers
            }
          }
        }
        allContentfulContactBlog {
          edges {
            node {
              order
              title
              date
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
        allContentfulContactInstagram {
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
      const mogo = data.allContentfulContact.edges[0]
      const blogs = data.allContentfulContactBlog.edges
      const instagram = data.allContentfulContactInstagram.edges
      return (
        <Wrapper name="contact" ref={props.setRef}>
          <Inner>
            <ContactRectangle>
              <Mogo>
                <Logo>MoGo</Logo>
                <Description>{mogo.node.description.description}</Description>
                <Followers>
                  <Amount>{mogo.node.followers}K&nbsp;</Amount>followers
                </Followers>
                <IconBox>
                  <FollowUs>Follow Us:</FollowUs>
                  <Icons>
                    <Icon className="flaticon-facebook" />
                    <Icon className="flaticon-twitter" />
                    <Icon className="flaticon-instagram" />
                    <Icon className="flaticon-pinterest" />
                    <Icon className="flaticon-google-plus" />
                    <Icon className="flaticon-video" />
                    <Icon className="flaticon-ball" />
                    <Icon className="flaticon-text" />
                  </Icons>
                </IconBox>
                <InputWrapper>
                  <Input type="text" placeholder="Your Email" />
                  <Button>subscribe</Button>
                </InputWrapper>
              </Mogo>
              <Blogs>
                <BlogsTitle>blogs</BlogsTitle>
                <BlogsWrapper>
                  {blogs
                    .sort((a, b) => a.node.order - b.node.order)
                    .map((blog, id) => (
                      <Blog key={id}>
                        <BlogImage
                          data-src={blog.node.image.fixed.src}
                          className="lazyload"
                          alt={blog.node.image.name}
                        />
                        <BlogTextBox>
                          <BlogTitle>{blog.node.title}</BlogTitle>
                          <Date>{blog.node.date} </Date>
                        </BlogTextBox>
                      </Blog>
                    ))}
                </BlogsWrapper>
              </Blogs>
              <Instagram>
                <InstaTitle>instagram</InstaTitle>
                <InstaImgWrapper>
                  {instagram
                    .sort((a, b) => a.node.order - b.node.order)
                    .map((insta, id) => (
                      <InstaImg
                        key={id}
                        data-src={insta.node.image.fixed.src}
                        alt={insta.node.image.name}
                        className="lazyload"
                      />
                    ))}
                </InstaImgWrapper>
                <ViewMore>View more photos</ViewMore>
              </Instagram>
            </ContactRectangle>
            <Footer>
              © 2016 MoGo free PSD template by <Author>Laaqiq</Author>
            </Footer>
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Contact
