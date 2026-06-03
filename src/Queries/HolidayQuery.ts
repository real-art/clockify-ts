import {Query} from "./Query";

export default interface HolidayQuery extends Query {
  "assigned-to"?: string; // If provided, you'll get a filtered list of holidays assigned to user.
  start?: string; // Start date of the range, in ISO-8601 format. Example: 2021-03-01
  end?: string; // End date of the range, in ISO-8601 format. Example: 2021-03-31
}
