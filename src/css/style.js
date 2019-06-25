import { css } from "styled-components"

const TitleStyle = css`
  font-family: "KaushanScript-Regular";
  font-size: 24px;
  color: #333;
  text-align: center;
  display: block;

  ::first-letter {
    text-transform: capitalize;
  }

  @media all and (max-width: 480px) {
    font-size: 20px;
  }
`

const HeadlineStyle = css`
  font-family: "Montserrat-Bold";
  color: #333;
  font-size: 30px;
  display: block;
  text-transform: uppercase;
  text-align: center;

  ::after {
    content: "";
    display: block;
    border-top: 3px solid #f38181;
    width: 60px;
  }

  @media all and (max-width: 480px) {
    font-size: 24px;

    ::after {
      width: 40px;
      margin: 28px auto 32px auto;
    }
  }
`

const DescriptionStyle = css`
  font-family: "Roboto-Regular";
  font-size: 15px;
  line-height: 24px;
  color: rgba(153, 153, 153, 255);
  text-align: center;
  display: block;
  max-width: 954px;

  @media all and (max-width: 1200px) {
    padding: 0 30px;
  }
`

export { TitleStyle, HeadlineStyle, DescriptionStyle }
