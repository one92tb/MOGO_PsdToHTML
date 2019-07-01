import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 127px 0 21px 0;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`

const ListItem = styled.li`
  list-style-type: none;
  color: #fff;
  font-family: "Montserrat-Regular";
  display: inline-block;
  margin: 0;
  font-size: 24px;
  text-transform: uppercase;
  width: 280px;

  ::before {
    content: "";
    display: block;
    border-top: 3px solid #fff;
    width: 100%
    margin-bottom: 17px;

  }

  ::after {
    content: "";
    display: block;
    border-bottom: 3px solid red;
    width: 25%;
    position: relative;
    bottom: 49px;
  }

  &:not(:first-child) {
    ::after {
      content: none;
    }
  }


  @media all and (max-width: 1200px) {
    margin-bottom: 20px;
  }

  @media all and (max-width: 480px) {
    width: 220px;
    font-size: 18px;
    ::after{
      bottom: 41px;
    }
  }
`

const Number = styled.span`
  font-family: "Montserrat-Bold";
`

const Slider = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Number>01</Number>&nbsp;intro
      </ListItem>
      <ListItem>
        <Number>02</Number>&nbsp;work
      </ListItem>
      <ListItem>
        <Number>03</Number>&nbsp;about
      </ListItem>
      <ListItem>
        <Number>04</Number>&nbsp;contacts
      </ListItem>
    </List>
  </Wrapper>
)

export default Slider
