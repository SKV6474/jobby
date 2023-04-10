export const profileObjectFixtureData = {
  data: {
    profile_details: {
      profile_image_url:
        "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
      name: "Rahul Attluri",
      short_bio: "Lead Software Developer and AI-ML expert",
    },
  },
  ApiStatus: "success",
};

export const profileObjectFixtureDataForFailure = {
  data: "none",
  ApiStatus: "failure",
};

export const ProfileFixtureApi = () => {
  return profileObjectFixtureData;
};
