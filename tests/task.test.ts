import { test, expect } from '@jest/globals';
import Clockify from "../src/Clockify";
import {clockifyApiKey, testProjectId, testTaskId, testWorkspaceId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Find tasks on project", async () => {
  const tasks = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.get();
  expect(tasks.length).toBeGreaterThanOrEqual(1);
  const taskIds = tasks.map(task => task.id);
  expect(taskIds).toContain(testTaskId);
})

test("Find task on project by ID", async () => {
  const task = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(testTaskId).get();
  expect(task.id).toBe(testTaskId);
})
