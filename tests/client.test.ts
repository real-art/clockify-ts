import { test, expect } from '@jest/globals';
import Clockify from "../src/Clockify";
import {clockifyApiKey, testWorkspaceId, testClientId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Find clients on workspace", async () => {
  const clients = await clockify.workspace.withId(testWorkspaceId).clients.get();
  expect(clients.length).toBeGreaterThanOrEqual(1);
  const client_ids = clients.map(client => client.id);
  expect(client_ids).toContain(testClientId);
})

