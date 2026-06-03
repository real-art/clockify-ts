import { test, expect } from '@jest/globals';
import Clockify from "../src/Clockify";
import {
  clockifyApiKey,
  testProjectId,
  testWorkspaceId
} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Get all projects on workspace", async () => {
  const projects = await clockify.workspace.withId(testWorkspaceId).projects.get();
  expect(projects.length).toBeGreaterThanOrEqual(1);

  const projectIds = projects.map(project => project.id);
  expect(projectIds).toContain(testProjectId);
})

test("Find project by ID", async () => {
  const project = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).get();
  expect(project.id).toBe(testProjectId);
})

