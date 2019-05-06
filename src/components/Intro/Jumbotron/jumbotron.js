import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 106.5px;
`

const Tittle = styled.span`
  font-family: "KaushanScript-Regular";
  font-size: 72px;
  line-height: 87px;
  color: #ffffff;
  text-align: center;
  display: block;
  text-transform: capitalize;
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
`

const Jumbotron = () => (
  <Wrapper>
    <Tittle>creative template</Tittle>
    <Content>
      welcome <br /> to mogo
    </Content>
    <Button>learn more</Button>
  </Wrapper>
)

export default Jumbotron
