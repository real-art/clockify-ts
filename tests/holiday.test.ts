import Clockify from "../src/Clockify";
import {clockifyApiKey, testWorkspaceId, testUserId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Get holidays for a workspace", async () => {
  const holidays = await clockify.workspace.withId(testWorkspaceId).holidays.get({});
  // console.log(holidays);
  expect(holidays.length).toBeGreaterThanOrEqual(1);
})

test("Get holidays for a workspace", async () => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);
  // Get holidays in the next 30 days
  const query = {
    start: startDate.toISOString(),
    end: endDate.toISOString(),
    "assigned-to": testUserId
  }
  // console.log(query);
  const holidays = await clockify.workspace.withId(testWorkspaceId).holidays.withDates.get(query)
  // console.log(holidays);
  expect(holidays.length).toBeGreaterThanOrEqual(1);
})
