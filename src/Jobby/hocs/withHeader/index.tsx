import React from "react";

import Header from "../../components/Header";

import { Props } from "../../interface";

import { MaxWidthDiv, WrappedComponentContainer } from "./styledComponents";

const WithHeader = (WrappedComponent: React.ComponentType<any>) => {
  const EnhancedComponent = (props: Props) => {
    return (
      <>
        <Header {...props} />
        <WrappedComponentContainer>
          <MaxWidthDiv>
            <WrappedComponent {...props} />
          </MaxWidthDiv>
        </WrappedComponentContainer>
      </>
    );
  };

  return EnhancedComponent;
};

export default WithHeader;
