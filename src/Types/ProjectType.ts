import type {MembershipStatusEnum, MembershipTypeEnum} from "./MembershipType";
import {
  BudgetEstimateResetOptionEnum,
  BudgetEstimateTypeEnum, EstimateTypeEnum,
  TimeEstimateResetOptionEnum,
  TimeEstimateTypeEnum
} from "./EstimateType";
import {ClientType} from "./ClientType";

type ProjectType = {
  "id": string,
  "name": string,
  "hourlyRate": null | {amount:number,currency:string},
  "clientId": string,
  "workspaceId": string,
  "billable": boolean,
  "memberships": Array<{
    userId: string,
    "hourlyRate": {
      "amount": number,
      "currency": string
    },
    targetId: string,
    "membershipStatus": MembershipStatusEnum,
    "membershipType": MembershipTypeEnum,
  }>,
  "color": string,
  "archived": boolean,
  "duration": string,
  "client": ClientType | undefined,
  "clientName": string | undefined,
  "note": string,
  "template": boolean,
  "public": boolean,
  "costRate": null | number,
  "estimate":
    {
      estimate: string,
      type: EstimateTypeEnum
    },
  "timeEstimate": {
    "estimate": string,
    "type": TimeEstimateTypeEnum,
    "resetOption": null | TimeEstimateResetOptionEnum,
    "active": boolean
  } | null,
  "budgetEstimate": {
    "estimate": number,
    "type": BudgetEstimateTypeEnum,
    "resetOption": null | BudgetEstimateResetOptionEnum,
    "active": boolean,
  } | null,
  "expenses": Array<{
    id: string
    workspaceId: string
    userId: string
    date: string
    projectId: string
    categoryId: string
    notes: string
    quantity: number
    billable: boolean
    fileId: string
    total: number
    locked: boolean
  }>,
  "customFields":
    {
      "customFieldId": string,
      "customFieldName": string,
      "customFieldType": string,
      "userId": string,
      "value": string,
    }[],
}
export {
  ProjectType,
}
