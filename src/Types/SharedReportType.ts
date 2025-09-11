type SharedReportType = {
  id: string,
  name: string,
  created: Date,
  users: {
    id: string,
    name: string,
  }[],
  projects: {
    id: string,
    name: string,
    clientName: string,
  }[],
  clients: {
    id: string,
    name: string,
  }[],
  timeEntries: {
    id: string,
    description: string,
    start: Date,
    end: Date,
    billable: boolean,
    projectId: string,
    taskId?: string,
    userId: string,
    tagIds: string[],
  }[],
  totals: {
    totalTime: number,
    totalBillableTime: number,
    entriesCount: number,
    totalAmount: number,
  },
}

export {
  SharedReportType,
}