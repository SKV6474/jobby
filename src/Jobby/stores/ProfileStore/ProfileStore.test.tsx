import ProfileStore from ".";

describe("For Profile Store", () => {
  it("When a new Profile Store is made", async () => {
    const store = new ProfileStore();
    expect(store.ApiStatus).toEqual("loading");
    expect(store.ProfileDetail).toEqual({
      profile_details: { name: "", profile_image_url: "", short_bio: "" },
    });
  });

  it("Fixture Data Fetching", () => {
    const store = new ProfileStore();
    store.fetchFixtureData();

    expect(store.ProfileDetail).toBeDefined();
    expect(store.ApiStatus).toBe("success");
  });
});
