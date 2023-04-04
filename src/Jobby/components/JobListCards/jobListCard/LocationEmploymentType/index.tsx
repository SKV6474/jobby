import React from "react";

import { LocationEmploymentTypeProps } from "../../../../interface";

import { Icons, LocationEType } from "./styledComponents";

const LocationEmploymentType = (props: LocationEmploymentTypeProps) => {
  const { EmploymentType, Location } = props;

  return (
    <div>
      <LocationEType>
        <div style={{ marginRight: "20px" }}>
          <Icons className="fa-solid fa-location-dot"></Icons>
          {Location}
        </div>
        <div>
          <Icons className="fa-solid fa-briefcase"></Icons>
          {EmploymentType}
        </div>
      </LocationEType>
    </div>
  );
};

export default LocationEmploymentType;
