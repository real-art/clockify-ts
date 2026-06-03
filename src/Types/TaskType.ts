export enum TaskStatusEnum {
  active = "ACTIVE",
  done = "DONE",
}
type TaskType = {
  "assigneeIds": Array<string>,
  "userGroupIds": Array<string>,
  "estimate": string,
  "id": string,
  "name": string,
  "projectId": string,
  "billable": boolean,
  "budgetEstimate": number,
  "duration": string,
  "hourlyRate": {
    "amount": null | number,
    "currency": string
  },
  "costRate": {
    "amount": null | number,
    "currency": string
  },
  "status": TaskStatusEnum
}
export {
  TaskType,
}
