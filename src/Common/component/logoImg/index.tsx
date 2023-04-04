import "styled-components/macro";

import { LOGO_IMG } from "../../constants/Images";

import { ImgDiv, Logoimg } from "./styledComponents";

const LogoImg = () => {
  return (
    <ImgDiv>
      <Logoimg src={LOGO_IMG} alt="logo"></Logoimg>
    </ImgDiv>
  );
};

export default LogoImg;
