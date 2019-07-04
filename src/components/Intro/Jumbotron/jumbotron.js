import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-bottom: 30px;
`

const Slider = styled.div`
  height: 607.5px;
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;

  @media all and (max-width: 1200px) {
    height: 450px;
  }

  @media all and (max-width: 980px) {
    height: 430px;
  }

  @media all and (max-width: 768px) {
    height: 370px;
  }

  @media all and (max-width: 480px) {
    height: 300px;
  }
`

const SliderInner = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.currentPosition};
  width: 400%;
  height: 100%;
  -webkit-transition: left 0.4s;
  transition: left 0.4s;
  display: flex;
  flex-flow: row nowrap;
`

const SliderContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const Tittle = styled.span`
  font-family: "KaushanScript-Regular";
  font-size: 72px;
  line-height: 87px;
  color: #ffffff;
  text-align: center;
  display: block;
  text-transform: capitalize;
  padding-top: 106.5px;

  @media all and (max-width: 1280px) {
    font-size: 64px;
    line-height: 72px;
    padding-top: 80px;
  }

  @media all and (max-width: 980px) {
    font-size: 52px;
    line-height: 64px;
    padding-top: 60px;
  }

  @media all and (max-width: 768px) {
    font-size: 42px;
    line-height: 52px;
    padding-top: 50px;
  }

  @media all and (max-width: 480px) {
    font-size: 36px;
    line-height: 42px;
    padding-top: 40px;
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

const Box = styled.div`
  width: 100%;
  background: green;
`
const Input = styled.input`
  width: 12px;
  height: 12px;
  margin: 2rem 12px;
  border-radius: 50%;
  z-index: 10;
  outline: 6px solid #ccc;
  outline-offset: -6px;
  box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const List = styled.ul`
  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
  }
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 127px 0 21px 0;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
    padding-top: 100px;
  }

  @media all and (max-width: 980px) {
    padding-top: 80px;
  }

  @media all and (max-width: 768px) {
    padding-top: 80px;
  }

  @media all and (max-width: 480px) {
    padding-top: 60px;
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
  cursor: pointer;

  ::before {
    content: "";
    display: block;
    border-top: 3px solid #fff;
    width: 100%;
    margin-bottom: 17px;
  }

  ::after {
    content: "";
    display: block;
    border-bottom: 3px solid red;
    transition: 1s ease;
    width: ${props => (props.name === props.currentSlider ? " 25%" : "0")};
    position: relative;
    bottom: 49px;
  }

  @media all and (max-width: 1200px) {
    margin-bottom: 20px;
    padding-left: 2px;
    padding-right: 2px;
  }

  @media all and (max-width: 480px) {
    width: 220px;
    font-size: 18px;
    ::after {
      bottom: 41px;
    }
  }
`

const Number = styled.span`
  font-family: "Montserrat-Bold";
`
const sliders = [
  {
    name: "intro",
    titleContent: "creative template",
    headerContent: ["welcome", "to mogo"],
    navigation: "about",
  },
  {
    name: "work",
    titleContent: "what we do",
    headerContent: ["some of", "our work"],
    navigation: "work",
  },
  {
    name: "about",
    titleContent: "happy clients",
    headerContent: ["what", "people say"],
    navigation: "people",
  },
  {
    name: "contacts",
    titleContent: "our stories",
    headerContent: ["latest", " blog"],
    navigation: "blog",
  },
]

class Jumbotron extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slider: "intro",
      position: 0,
      navigation: "about",
    }
  }

  handleSlider = (name, id, navigation) => {
    this.setState({
      slider: name,
      position: `-${id * 100}%`,
      navigation: navigation,
    })
  }

  scrollTo = () => {
    this.props.references[this.state.navigation].focus()
    console.log(this.props.references[this.state.navigation].offsetTop)
    window.scrollTo(0, this.props.references[this.state.navigation].offsetTop)
  }

  render() {
    return (
      <Wrapper>
        <Slider>
          <SliderInner
            currentName={this.state.slider}
            currentPosition={this.state.position}
          >
            {sliders.map((slider, id) => {
              console.log(slider)
              return (
                <SliderContent key={id}>
                  <Tittle>{slider.titleContent}</Tittle>
                  <Content>
                    {slider.headerContent[0]}
                    <br />
                    {slider.headerContent[1]}
                  </Content>
                </SliderContent>
              )
            })}
          </SliderInner>
        </Slider>
        <Button onClick={() => this.scrollTo()}>learn more</Button>
        <List>
          {sliders.map((slider, id) => {
            console.log(slider)
            return (
              <ListItem
                key={id}
                name={slider.name}
                currentSlider={this.state.slider}
                onClick={() =>
                  this.handleSlider(slider.name, id, slider.navigation)
                }
              >
                <Number>0{id}</Number>&nbsp;{slider.name}
              </ListItem>
            )
          })}
        </List>
      </Wrapper>
    )
  }
}

export default Jumbotron
