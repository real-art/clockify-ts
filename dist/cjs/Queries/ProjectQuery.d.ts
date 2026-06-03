import { Query } from "./Query";
export default interface ProjectQuery extends Query {
    "hydrated"?: boolean;
}
