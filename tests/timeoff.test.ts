import Clockify from "../src/Clockify";
import {clockifyApiKey, testWorkspaceId} from "./utils";
import {TimeOffRequestStatusEnum} from "../src/Types/TimeOffType";

const clockify = new Clockify(clockifyApiKey);

test("Get all time off for a user", async () => {
  // 30 days ago
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);
  // 30 days in the future
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);
  const query = {
    end: endDate.toISOString(), // Jan 1 of current year
    page: 1,
    pageSize: 10,
    start: startDate.toISOString(), // 365 days ago
    statuses: [TimeOffRequestStatusEnum.all],
    userGroups: [],
    users: [],
  };
  const requests = await clockify.workspace.withId(testWorkspaceId).timeOff.post(query);
  console.log(query);
  // console.log("Time Off:", requests);
  expect(requests.count).toBeGreaterThanOrEqual(1);
})
