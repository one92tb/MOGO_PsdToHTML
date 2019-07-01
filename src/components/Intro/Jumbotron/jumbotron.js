import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 106.5px;
  padding-bottom: 30px;

  @media all and (max-width: 1280px) {
    margin-top: 66.5px;
  }
`

const Tittle = styled.span`
  font-family: "KaushanScript-Regular";
  font-size: 72px;
  line-height: 87px;
  color: #ffffff;
  text-align: center;
  display: block;
  text-transform: capitalize;

  @media all and (max-width: 1280px) {
    font-size: 64px;
    line-height: 72px;
  }

  @media all and (max-width: 980px) {
    font-size: 52px;
    line-height: 64px;
  }

  @media all and (max-width: 768px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media all and (max-width: 480px) {
    font-size: 36px;
    line-height: 42px;
  }
`

const Content = styled.span`
  font-size: 150px;
  line-height: 140px;
  color: #ffffff;
  font-family: "Montserrat-Bold";
  text-align: center;
  text-transform: uppercase;
  display: block;
  margin-top: 34px;

  ::after {
    content: "";
    display: block;
    border: 1.5px solid #fff;
    width: 60px;
    margin: 47px auto 50px auto;
  }

  @media all and (max-width: 1280px) {
    font-size: 120px;
    line-height: 110px;
  }

  @media all and (max-width: 980px) {
    font-size: 100px;
    line-height: 90px;
  }

  @media all and (max-width: 768px) {
    font-size: 70px;
    line-height: 60px;
  }

  @media all and (max-width: 480px) {
    font-size: 44px;
    line-height: 40px;
  }
`

const Button = styled.button`
  color: #fff;
  font-size: 14px;
  font-family: "Montserrat-Bold";
  text-align: center;
  text-transform: uppercase;
  background-color: transparent;
  border: 3px solid #fff;
  width: 160px;
  height: 40px;
  display: block;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }

  @media all and (max-width: 768px) {
    font-size: 12px;
    width: 120px;
    height: 30px;
  }
`

const Jumbotron = props => (
  <Wrapper>
    <Tittle>creative template</Tittle>
    <Content>
      welcome <br /> to mogo
    </Content>
    <Button
      onClick={() => {
        window.scrollTo(0, props.aboutRef.offsetTop)
      }}
    >
      learn more
    </Button>
  </Wrapper>
)

export default Jumbotron
