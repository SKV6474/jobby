import JobListStore from "./index";
import JobListService from "../../services/JobListServices/index.api";

describe("JobListStore", () => {
  it("When new JobListStore is Created", () => {
    const store = new JobListStore(new JobListService());

    expect(store.ApiStatus).toEqual("loading");
    expect(store.jobList).toHaveLength(0);
    expect(store.coustomApi).toHaveLength(0);
    expect(store.EmploymentType).toHaveLength(0);
  });

  it("Fixture Data Fetching", () => {
    const store = new JobListStore(new JobListService());
    store.fetchFixtureData();

    expect(store.jobList.length).toBe(60);
    expect(store.ApiStatus).toBe("success");
  });
});
