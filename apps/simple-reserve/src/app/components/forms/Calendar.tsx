import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  WeekView,
  Toolbar,
  Appointments,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import {AppointmentForm, FormatterFn, ViewState} from '@devexpress/dx-react-scheduler';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';

moment.locale('ja');



const formatDayScaleDate = (date, options) => {
  const momentDate = moment(date);
  const { weekday } = options;

  return momentDate.format(weekday ? 'dddd' : 'D');
};

const formatTimeScaleDate = date => moment(date).format('hh:mm');

const styles = {
  dayScaleCell: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

// const DayScaleCell = withStyles(styles, 'DayScaleCell')((
//   { formatDate, classes, ...restProps }
//   ,) => (
//       <WeekView.DayScaleCell
//         {...restProps}
//         formatDate={formatDayScaleDate}
//         className={classes.dayScaleCell}
//       />
// ));

const TimeScaleLabel = (
  { formatDate, ...restProps },
) => <WeekView.TimeScaleLabel {...restProps} formatDate={formatTimeScaleDate} />;

const d = moment().format('YYYY-MM-DD');
const t = moment().add(7,'days').format('YYYY-MM-DD');

const DayScaleCell = (
  {formatDate,d,t,...restProps },
  ) => (
      <WeekView.DayScaleCell
        {
          ...restProps
        }
        startDate={d}
        formatDate={formatDayScaleDate}
      />
);

const Calendar : React.FC = () => {


  const [currentDate, setCurrentDate] = React.useState(d);



  const Root = useCallback(
      (props) => {
        console.log(currentDate);
        return <Toolbar.Root {...props} style={{ background: "#eee" }} />;
      },
      [currentDate]
  )


  return (<>
      <Paper>
        <Scheduler
          // data={schedulerData}
          firstDayOfWeek={1}
        >
          <ViewState
            defaultCurrentDate={currentDate}
          />
          <WeekView
            startDayHour={9}
            endDayHour={14} 
            excludedDays={[0,1]}
            dayScaleCellComponent={DayScaleCell}
            timeScaleLabelComponent={TimeScaleLabel}
          />
          <Toolbar rootComponent={Root} />
          <DateNavigator
          />
          <Appointments />
        </Scheduler>
      </Paper>
  </>)

}

export default Calendar;