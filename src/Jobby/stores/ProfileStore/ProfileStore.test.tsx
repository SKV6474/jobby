import ProfileStore from ".";

describe("For Profile Store", () => {
  it("When a new Profile Store is made", async () => {
    const store = new ProfileStore();
    expect(store.ApiStatus).toEqual("loading");
    expect(store.ProfileDetail).toEqual({
      profile_details: { name: "", profile_image_url: "", short_bio: "" },
    });
  });

  it("For Fetching", async () => {
    const store = new ProfileStore();
    try {
      await store.fetchProfile();
      expect(store.ApiStatus).toBe("success");
    } catch (e) {
      expect(store.ApiStatus).toBe("failure");
    }
  });
});
