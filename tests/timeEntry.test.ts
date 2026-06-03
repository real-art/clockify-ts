import { test, expect } from '@jest/globals';
import Clockify from "../src/Clockify";
import {
  clockifyApiKey,
  testTimeEntryId,
  testUserId,
  testWorkspaceId
} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Get your time entries on workspace", async () => {
  const timeEntries = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.get();
  expect(timeEntries.length).toBeGreaterThanOrEqual(1);
  const timeEntryIDs = timeEntries.map(timeEntry => timeEntry.id);
  expect(timeEntryIDs).toContain(testTimeEntryId);
})

test("Get a specific time entry on workspace", async () => {
  const timeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).get();
  expect(timeEntry.id).toBe(testTimeEntryId);
})
