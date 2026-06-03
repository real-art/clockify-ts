type ExpenseType = {
    expenses: {
        count: number;
        expenses: ExpenseDetailType[];
    };
    dailyTotals: {
        "date"?: Date;
        "total"?: number;
        "dateAsInstant"?: Date;
    };
    weeklyTotals: {
        "date"?: Date;
        "total"?: number;
    };
};
declare type ExpenseDetailType = {
    id?: string;
    workspaceId?: string;
    userId?: string;
    "date"?: Date;
    "project"?: {
        "id": string;
        "name": string;
        "color": string;
        "clientId": string;
        "clientName": string;
    };
    "category"?: {
        "id": string;
        "name": string;
        "hasUnitPrice": boolean;
        "priceInCents": number;
        "unit": string;
        "workspaceId": string;
        "archived": boolean;
    };
    "notes"?: string;
    "quantity"?: number;
    "billable"?: boolean;
    "fileId"?: string;
    "fileName"?: string;
    "total"?: number;
    "locked"?: boolean;
};
export { ExpenseType, ExpenseDetailType };
