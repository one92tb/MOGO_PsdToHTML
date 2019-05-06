import React from "react"
import styled from "styled-components"

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 157px 0 21px 0;
  padding: 0;
`

const ListItem = styled.li`
  list-style-type: none;
  font-size: 24px;
  color: #fff;
  font-family: "Montserrat-Regular";
  display: inline-block;
  margin: 0;
  font-size: 24px;
  text-transform: uppercase;

  ::before {
    content: "";
    display: block;
    border: 1.5px solid #fff;
    width: 280px;
    margin-bottom: 17px;
  }

  ::after {
    content: "";
    display: block;
    border: 1.5px solid red;
    width: 70px;
    position: relative;
    bottom: 49px;
  }

  &:not(:first-child) {
    ::after {
      content: none;
    }
`

const Number = styled.span`
  font-family: "Montserrat-Bold";
`

const Slider = () => (
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
)

export default Slider
