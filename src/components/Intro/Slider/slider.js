import React from "react"
import styled from "styled-components"

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 157px;
`

const ListItem = styled.li`
  list-style-type: none;
  font-family: "Montserrat-Regular";
  text-transform: uppercase;

  color: #fff;

  ::before {
    content: "";
    display: block;
    border: 1.5px solid #fff;
    width: 280px;
    margin-bottom: 25px;
  }

  ::after {
    content: "";
    display: block;
    border: 1.5px solid red;
    width: 70px;
    position: relative;
    top: -55px;
  }

  &:not(:first-child) {
    ::after {
      content: none;
    }
  }
`

const Number = styled.p`
  font-family: "Montserrat-Bold";
  display: inline-block;
`

const Slider = () => (
  <List>
    <ListItem>
      <Number>01&nbsp;</Number>intro
    </ListItem>
    <ListItem>
      <Number>02&nbsp;</Number>work
    </ListItem>
    <ListItem>
      <Number>03&nbsp;</Number>about
    </ListItem>
    <ListItem>
      <Number>04&nbsp;</Number>contacts
    </ListItem>
  </List>
)

export default Slider
