import ClockifyAPI, {IDeletable, IGettable, IPuttable} from "../../../../../Api/ClockifyApi";
import UpdateClientQuery from "../../../../../Queries/UpdateClientQuery";
import type { UpdateClientType } from "../../../../../Types/UpdateClientType";
import type { ClientType } from "../../../../../Types/ClientType";
import ProjectsQuery from "../../../../../Queries/ProjectsQuery";
import {ProjectType} from "../../../../../Types/ProjectType";

export default class Client extends ClockifyAPI implements IPuttable<ClientType>, IGettable<ClientType>, IDeletable<ClientType> {

  workspaceId: string;
  clientId: string;

  constructor(apiKey: string, workspaceId: string, clientId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.clientId = clientId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/clients/${this.clientId}`;
  }

  /**
   * Update client
   */
  put(data: UpdateClientType, query: UpdateClientQuery = {}): Promise<ClientType> {
    return this.axiosPut<ClientType>(data, query);
  }

  /**
   * Find client by ID
   */
  get(): Promise<ClientType> {
    return this.axiosGet<ClientType>({});
  }

  /**
   * Delete client
   */
  delete(): Promise<ClientType> {
    return this.axiosDelete<ClientType>({});
  }

}
