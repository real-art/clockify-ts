export type ExpenseReportType = {
    totals: Totals;
    expenses: Expense[];
    reportName: any;
    exportFields: string[];
    customFields: any;
};
export type Totals = {
    _id: string;
    expensesCount: number;
    totalAmount: number;
    totalAmountBillable: number;
    totalAmountByCurrency: TotalAmountByCurrency[];
    totalAmountBillableByCurrency: TotalAmountBillableByCurrency[];
    workspaceCurrencies: WorkspaceCurrency[];
    numOfCurrencies: number;
};
export type TotalAmountByCurrency = {
    currency: string;
    amount: number;
};
export type TotalAmountBillableByCurrency = {
    currency: string;
    amount: number;
};
export type WorkspaceCurrency = {
    _id: Id;
    workspaceId: WorkspaceId;
    code: string;
};
export type Id = {
    timestamp: number;
    date: number;
};
export type WorkspaceId = {
    timestamp: number;
    date: number;
};
export type Expense = {
    _id: string;
    workspaceId: string;
    userId: string;
    date: string;
    projectId: string;
    categoryId: string;
    notes: string;
    billable: boolean;
    fileId: string;
    quantity: number;
    approvalRequestId: any;
    userName: string;
    userEmail: string;
    userStatus: string;
    projectName: string;
    clientName: string;
    projectColor: string;
    categoryName: string;
    categoryUnit: string;
    categoryHasUnitPrice: boolean;
    amount: number;
    isLocked: boolean;
    fileName: string;
    currency: string;
    userCustomFields: UserCustomField[];
};
export type UserCustomField = {
    customFieldId: string;
    value: any;
};
