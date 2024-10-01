/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Fragment, FunctionComponent, useState } from 'react';

import { BryntumGantt } from '@bryntum/gantt-react';
import { addCalendar, getGanttConfig } from './GanttConfig';
import '@bryntum/gantt/gantt.classic.css';

const GanttApp: FunctionComponent = () => {
    const [isTrue, setIsTrue] = useState(false);

    return (
        <Fragment>
            <div className='AppPanel'>
              <button onClick={() => { setIsTrue(!isTrue); }} style={{ width: "10em" }}>Re-render</button>
            </div>
            <BryntumGantt key={isTrue + ""} {...getGanttConfig()} ref={(ref) => {

                // Calendar information is loaded async - simulate this
                // behaviour by applying calendar once gantt is created.

                (window as any).gantt = ref;
                if (ref?.instance) {
                  addCalendar(ref.instance)
                }
            }} />
        </Fragment>
    );
};

export default GanttApp;