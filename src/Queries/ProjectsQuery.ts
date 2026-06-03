import {Query} from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";
export enum ProjectsQueryClientStatusEnum {
  active = "ACTIVE",
  archived = "ARCHIVED",
}
export enum ProjectsQueryUserStatusEnum {
  active = "ACTIVE",
  inactive = "INACTIVE",
}
export enum ProjectsQueryAccessEnum {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}
export default interface ProjectsQuery extends Query, MultiItemsQuery {
  /**
   * If true, you'll get only archived projects. If false, you'll get only active projects.
   */
  archived?: boolean,
  name?: string,
  /**
   * If provided, projects will be filtered by billable status.
   */
  billable?: boolean,
  /**
   * If provided, projects will be filtered by client ID(s).
   */
  clients?: Array<string>,
  /**
   * If provided, projects will be filtered by whether they have a client.
   */
  "contains-client"?: boolean,
  "client-status"?: ProjectsQueryClientStatusEnum,
  /**
   * If provided, projects will be filtered by user ID(s) who have access.
   */
  users?: Array<string>,
  /**
   * If provided, projects will be filtered by whether they have users.
   */
  "contains-users"?: boolean,
  "user-status"?: ProjectsQueryUserStatusEnum,
  /**
   * If provided, projects will be filtered by whether they are used as a template.
   */
  "is-template"?: boolean,
  /**
   * If set to true, results will contain additional information about the project.
   */
  "hydrated"?: boolean;
  /**
   * Enum: "PUBLIC" "PRIVATE"
   * Example: access=PUBLIC
   * Valid set of string(s). If provided, you'll get a filtered list of projects that matches the provided access.
   */
  access?: ProjectsQueryAccessEnum;
  /**
   * Default: "20"
   * Example: expense-limit=10
   * Represents maximum number of expenses to fetch.
   */
  "expense-limit"?: number;
  /**
   * Example: expense-date=2024-12-31
   * If provided, you will get expenses dated before the provided value in yyyy-MM-dd format.
   */
  "expense-date"?: string;
}
