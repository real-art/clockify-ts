import { test, expect } from '@jest/globals';
import Clockify from "../src/Clockify";
import {clockifyApiKey, testTagId, testWorkspaceId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Find tags on workspace", async () => {
  const tags = await clockify.workspace.withId(testWorkspaceId).tags.get();
  expect(tags.length).toBeGreaterThanOrEqual(1);

  // NOTE: we don't use tags so this should be empty always
  // const tag_ids = tags.map(tag => tag.id);
  // expect(tag_ids).toContain(testTagId);
})
