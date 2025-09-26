import Clockify from "../src/Clockify";
import {clockifyApiKey, testWorkspaceId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Get all time off for a user", async () => {
  // 30 days ago
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);
  // 30 days in the future
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);
  const requests = await clockify.workspace.withId(testWorkspaceId).timeOff.post({
    end: endDate.toISOString(), // now
    page: 1,
    pageSize: 10,
    start: startDate.toISOString(), // 30 days ago
    statuses: ["ALL"],
    userGroups: [],
    users: [],
  });
  // console.log(requests);
  expect(requests.count).toBeGreaterThanOrEqual(1);
})
