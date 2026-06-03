import Clockify from "../src/Clockify";
import {clockifyApiKey, testWorkspaceId, testUserId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Get holidays for a workspace", async () => {
  const holidays = await clockify.workspace.withId(testWorkspaceId).holidays.get({});
  // console.log(holidays);
  expect(holidays.length).toBeGreaterThanOrEqual(1);
})

test("Get holidays for a workspace", async () => {
  // use january 1 of the current year
  const startDate = new Date();
  startDate.setMonth(0);
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  // 1 year in the future
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 365);
  // Get holidays in the next 30 days
  const query = {
    start: startDate.toISOString(),
    end: endDate.toISOString(),
    "assigned-to": testUserId
  }
  // console.log(query);
  const holidays = await clockify.workspace.withId(testWorkspaceId).holidays.withDates.get(query)
  // console.log("Holidays:", holidays);
  expect(holidays.length).toBeGreaterThanOrEqual(1);
})
