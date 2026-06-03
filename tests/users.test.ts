import { test, expect } from '@jest/globals';
import Clockify from "../src/Clockify";
import {clockifyApiKey, testWorkspaceId, testUserEmail, testUserId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Get currently logged in user's info", async () => {
  const user = await clockify.user.get();
  expect(user.id).toBe(testUserId);
})

test("Find all users on workspace", async () => {
  const members = await clockify.workspace.withId(testWorkspaceId).users.get({
    email: testUserEmail
  });
  expect(members.length).toBe(1);
  expect(members[0].id).toBe(testUserId);
})
