import { ImgDiv, Logoimg } from "./styledComponents";
import "styled-components/macro";

const LogoImg = () => {
  return (
    <ImgDiv>
      <Logoimg
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="logo"
      ></Logoimg>
    </ImgDiv>
  );
};

export default LogoImg;
