/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';

import { BryntumGantt } from '@bryntum/gantt-react';
import { addCalendar, getGanttConfig } from './GanttConfig';
import '@bryntum/gantt/gantt.classic.css';

const GanttApp: FunctionComponent = () => {
    const [isTrue, setIsTrue] = useState(false);
    const ganttRef = React.createRef<BryntumGantt>();

    useEffect(() => {
      if (ganttRef.current?.instance) {
        addCalendar(ganttRef.current.instance);
      }
    }, [ganttRef]);

    return (
        <Fragment>
            <div className='AppPanel'>
              <button onClick={() => { setIsTrue(!isTrue); }} style={{ width: "10em" }}>Re-render</button>
            </div>
            <BryntumGantt key={isTrue + ""} {...getGanttConfig()} ref={ganttRef} />
        </Fragment>
    );
};

export default GanttApp;