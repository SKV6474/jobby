import JobListStore from "./index";

describe("JobListStore", () => {
  it("When new JobListStore is Created", () => {
    const store = new JobListStore();

    expect(store.ApiStatus).toEqual("loading");
    expect(store.jobList).toHaveLength(0);
    expect(store.coustomApi).toHaveLength(0);
    expect(store.EmploymentType).toHaveLength(0);
  });

  it("Fixture Data Fetching", () => {
    const store = new JobListStore();
    store.fetchFixtureData();

    expect(store.jobList.length).toBe(60);
    expect(store.ApiStatus).toBe("success");
  });
});
