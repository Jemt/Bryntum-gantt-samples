/**
 * Application configuration
 */
import { BryntumGanttProps } from "@bryntum/gantt-react";

import { data } from "./GanttData";
import { Gantt } from "@bryntum/gantt";

export const getGanttConfig = () => {

  const resp: BryntumGanttProps = {
    infiniteScroll: true,
    minHeight: "calc(100vh - 5em)",
    width: "100vw",
    baselinesFeature: true,
    destroyStore: true,
    //viewPreset: "weekAndDayLetter",
    barMargin: 10,

    project: {
      hoursPerDay: 8,   // BUG: Causes incorrect calculation of duration/days despite use of "8hrs" calendar
      calendar: "8hrs", // "8hrs" calendar registered through addCalendar(..) function when gantt is created
      skipNonWorkingTimeWhenSchedulingManually: true,
      skipNonWorkingTimeInDurationWhenSchedulingManually: true,

      taskStore: {
        useRawData: true,
        fireRemoveEventForMoveAction: false,
      },
      tasks: data.tasks.rows,
      dependencies: data.dependencies.rows,
      
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-12-01"),
    },

    subGridConfigs: {
      locked: { width: 980 },
    },

    // startDate: new Date("2024-06-01"),
    // endDate: new Date("2024-12-01"),

    columns: [
      { id: "cfx-built-in-wbs", text: "WBS", type: "wbs" },
      {
        id: "name",
        type: "name",
        text: "Title",
        field: "name",
        minWidth: 200,
        flex: 1,
        sortable: true,
        managedCellEditing: false,
      },
      {
        id: "manuallyScheduled",
        type: "check",
        text: "Manuel",
        field: "manuallyScheduled",
        width: 100,
        sortable: true,
      },
      {
        id: "startDate",
        type: "date",
        text: "Start date",
        field: "startDate",
        width: 200,
        sortable: true,
        managedCellEditing: false,
        format: "YYYY-MM-DD",
      },
      {
        id: "endDate",
        type: "date",
        text: "End date",
        field: "endDate",
        width: 200,
        sortable: true,
        managedCellEditing: false,
        format: "YYYY-MM-DD",
      },
      {
        id: "duration",
        type: "number",
        text: "Days",
        field: "duration",
        width: 150,
        align: "right",
        sortable: true,
      },
    ],
  };

  return resp;
};

export function addCalendar(gantt: Gantt) {
  gantt.project.calendarManagerStore.add({
    id: "8hrs",
    name: "Sun-Mon 8h/day",
    intervals: [
      {
        recurrentStartDate: "at 16:00",
        recurrentEndDate: "at 08:00",
        isWorking: false,
      },
    ],
  });
}
