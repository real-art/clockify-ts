import Clockify from "../src/Clockify";
import {clockifyApiKey, testProjectId, testWorkspaceId} from "./utils";
import {
  RequestExpenseReportContainsFilterEnum, RequestExpenseReportProjectStatusFilterEnum,
  RequestExpenseReportType
} from "../src/Types/RequestExpenseReportType";

const clockify = new Clockify(clockifyApiKey);

test("Expense report", async () => {
  const expenseReportQuery: RequestExpenseReportType = {
    dateRangeStart: new Date(Date.UTC(2024, 0, 1)),
    dateRangeEnd: new Date(Date.UTC(2024, 6, 31, 23, 59, 59, 999)),
    pageSize: 1000,
    projects: {
      contains: RequestExpenseReportContainsFilterEnum.contains,
      ids: [testProjectId],
      status: RequestExpenseReportProjectStatusFilterEnum.all
    }
  };
  const report = await clockify.workspaces.withId(testWorkspaceId).reports.expenses.post(expenseReportQuery);
  expect(report).toBeDefined();
  expect(report.expenses.length).toBeGreaterThanOrEqual(1);
  expect(report.expenses.length).toEqual(report.totals.expensesCount);

  const totalAmount = report.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  expect(report.totals.totalAmount).toBeCloseTo(totalAmount);
});
