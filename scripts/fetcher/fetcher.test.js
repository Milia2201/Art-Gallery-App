import fetcher from "./fetcher";

describe("fetcher", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("fetches data from the given URL and returns JSON", async () => {
    const mockData = { foo: "bar" };
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await fetcher("https://example.com/api/data");
    expect(global.fetch).toHaveBeenCalledWith("https://example.com/api/data");
    expect(result).toEqual(mockData);
  });
});
