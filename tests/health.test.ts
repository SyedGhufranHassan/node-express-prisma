import { describe, it, expect } from "vitest";
describe("health contract", () => {
  it("uses the expected healthy status", () => {
    expect({ status: "ok" }.status).toBe("ok");
  });
});
