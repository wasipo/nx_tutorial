import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  WeekView,
  Toolbar,
  Appointments,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import {FormatterFn, ViewState} from '@devexpress/dx-react-scheduler';
import moment from 'moment';


const currentDate = moment().format('YYYY-MM-DD');
const schedulerData = [
  { startDate: '2021-03-25T09:45', endDate: '2021-03-25T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];


const Calendar : React.FC = () => {




  return (<>
      <Paper>
        <Scheduler
          data={schedulerData}
          locale='ja-JP'
          firstDayOfWeek={1}
        >
          <ViewState
            defaultCurrentDate={currentDate}
          />
          <WeekView
            startDayHour={9}
            endDayHour={14} 
            excludedDays={[0,1]}
          />
          <Toolbar />
          <DateNavigator
          />
          <Appointments />
        </Scheduler>
      </Paper>
  </>)

}

export default Calendar;