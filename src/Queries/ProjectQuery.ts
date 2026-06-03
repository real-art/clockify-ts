import {Query} from "./Query";

export default interface ProjectQuery extends Query {
  /**
   * If set to true, results will contain additional information about the project
   */
  "hydrated"?: boolean,
}
