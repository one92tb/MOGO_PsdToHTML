import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  
`

const Tittle = styled.p`
  font-family: KaushanScript-Regular;
  font-size: 72px;
  color: #ffffff;
  text-align: center;
  text-transform: capitalize;
  padding: 30.5px 0;
  margin-bottom: 42px;
`

const Content = styled.p`
  font-size: 150px;
  line-height: 124px;
  color: #ffffff;
  font-family: "Montserrat-Bold";
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;

  ::after {
    content: "";
    display: block;
    border: 1.5px solid #fff;
    width: 60px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 71px;
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
