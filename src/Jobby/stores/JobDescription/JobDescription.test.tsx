import JobDescriptionStore from "./index";

describe("For JobDescriptionStore", () => {
  it("When new JobDescriptionStore is  intialized", () => {
    const store = new JobDescriptionStore();
    expect(store.JobDescription).toBeUndefined();
    expect(store.ApiStatus).toEqual("loading");
  });
});
