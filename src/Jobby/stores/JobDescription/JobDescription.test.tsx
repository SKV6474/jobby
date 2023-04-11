import JobDescriptionStore from "./index";

describe("For JobDescriptionStore", () => {
  it("When new JobDescriptionStore is  intialized", () => {
    const store = new JobDescriptionStore();
    expect(store.JobDescription).toBeUndefined();
    expect(store.ApiStatus).toEqual("loading");
  });

  it("Fixture Data Fetching", () => {
    const store = new JobDescriptionStore();
    store.fetchFixtureData();

    expect(store.JobDescription).toBeDefined();
    expect(store.JobDescription?.similar_jobs.length).toBe(3);
    expect(store.ApiStatus).toBe("success");
  });
});
