import React from "react"
import styled from "styled-components"
import { css } from "styled-components"

const Wrapper = styled.div`
  transition: all 0.5 ease;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 22.5px 0 60px 0;
  position: relative;
  height: 40px;

  @media all and (max-width: 980px) {
    background: ${props => (props.isChecked ? " #f7a090" : "transparent")};
  }
`
const ToggleStyle = css`
  width: 100%;
  height: 5px;
  background: #fff;
  margin: 4px auto;
  transition: all 0.3s;
  backface-visibility: hidden;
`

const ToggleOne = styled.div`
  ${ToggleStyle}

  transform: ${props => props.isChecked && "rotate(45deg) translate(5px, 5px)"}
`
const ToggleTwo = styled.div`
  ${ToggleStyle}
  opacity: ${props => props.isChecked && "0"}
`
const ToggleThree = styled.div`
  ${ToggleStyle}
    transform: ${props =>
      props.isChecked && "rotate(-45deg) translate(8px, -8px)"}
`

const Logo = styled.p`
  font-size: 30px;
  color: #ffffff;
  font-family: "Montserrat-Bold";
  margin: 0;
  padding-left: 2px;

  @media all and (max-width: 1280px) {
    padding-left: 15px;
  }
`

const Nav = styled.ul`
  width: 620px;
  display: flex;
  justify-content: space-evenly;
  margin: 8.5px 0 0 0;
  padding: 0 8px 0 0;

  @media all and (max-width: 1280px) {
    padding: 0 15px 0 0;
    width: 500px;
  }

  @media all and (max-width: 980px) {
    background: #f7a090;
    position: absolute;
    width: 100%;
    top: 65px;
    opacity: ${props => (props.isChecked ? "1" : "0")};
    max-height: ${props => (props.isChecked ? "280px" : "0")};
    overflow: hidden;
    transition: all 0.5s ease;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
`

const NavLink = styled.a`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat-Bold";
  text-decoration: none;

  @media all and (max-width: 980px) {
    font-size: 24px;
  }
`

const Icon = styled.i`
  color: #fff;

  ::before {
    font-size: 18px;
  }
`

const NavItem = styled.li`
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }

  &:hover ${NavLink} {
    color: #fce38a;

    ::after {
      content: "";
      display: block;
      width: calc(100% - 1px);
      border-top: 3px solid #fce38a;
      margin-top: 10px;
    }
  }

  &:hover ${Icon} {
    color: #fce38a;
  }

  @media all and (max-width: 980px) {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid #fce38a;;
    }

    &:hover ${NavLink} {
        ::after {
          content: none;
        }
    }

`

const Label = styled.label`
  width: 28px;
  height: 30px;
  padding-right: 15px;
  display: none;

  @media all and (max-width: 980px) {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover > div {
    background: #fce38a;
  }
`

const Input = styled.input`
  display: none;
`

const NavIcon = styled.i`
  width: 100px;
  height: 100px;
  display: flex;
  opacity: ${props => (props.appear ? "1" : "0")};
  height: ${props => (props.appear ? "100px" : "0")};
  z-index: ${props => (props.appear ? "1" : "-1")}
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;
  border: 7px solid #cccccc
  border-radius: 50%;
  position: fixed;
  bottom: 2%;
  right: 2%;
  cursor: pointer;
  color: #cccccc;

  ::before {
    margin: 0;
    font-size: 40px;
  }

  @media all and (max-width: 1200px) {
    width: 70px;
    height: 70px;

    ::before {

      font-size: 30px;

    }
  }

  @media all and (max-width: 480px) {
    width: 50px;
    height: 50px;

    ::before {

      font-size: 20px;

    }
  }
`

const links = ["about", "service", "work", "blog", "contact"]

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      navAppear: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollToTopAppear)
  }

  handleScrollToTopAppear = event => {
    if (window.scrollY > 400) {
      this.setState({
        navAppear: true,
      })
    } else {
      this.setState({
        navAppear: false,
      })
    }
  }

  handleCheckBox = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  scrollToRef = pos => {
    this.setState({
      checked: !this.state.checked,
    })
    window.scrollTo(0, pos)
  }

  render() {
    return (
      <Wrapper isChecked={this.state.checked}>
        <Logo>MoGo</Logo>
        <Label htmlFor="toggle">
          <ToggleOne isChecked={this.state.checked} />
          <ToggleTwo isChecked={this.state.checked} />
          <ToggleThree isChecked={this.state.checked} />
        </Label>
        <Input type="checkbox" id="toggle" onClick={this.handleCheckBox} />
        <Nav isChecked={this.state.checked}>
          {links.map((link, id) => (
            <NavItem
              key={id}
              onClick={() =>
                this.scrollToRef(this.props.references[link].offsetTop)
              }
            >
              <NavLink>{link}</NavLink>
            </NavItem>
          ))}
          <NavItem>
            <Icon className="flaticon-shopper" />
          </NavItem>
          <NavItem>
            <Icon className="flaticon-search" />
          </NavItem>
        </Nav>
        <NavIcon
          className="flaticon-chevron-1"
          appear={this.state.navAppear}
          onClick={() => this.scrollToRef(0)}
        />
      </Wrapper>
    )
  }
}

export default Header
