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
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';
import { ModeCommentTwoTone } from '@material-ui/icons';

moment.locale('ja');
const d = moment().format('YYYY-MM-DD');
const t = moment().add(7,'days').format('YYYY-MM-DD');


const formatTimeScaleDate = date => moment(date).format('hh:mm');


const useStyles = makeStyles(theme => ({
  todayCell: {
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.14),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
  },
  weekendCell: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
  },
  today: {
    backgroundColor: fade(theme.palette.primary.main, 0.16),
  },
  weekend: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
  },
}));



const TimeScaleLabel = (
  { formatDate, ...restProps },
) => <WeekView.TimeScaleLabel {...restProps} formatDate={formatTimeScaleDate} />;


const formatDayScaleDate = (date, options) => {
  const momentDate = moment(date);
  const { weekday } = options;
  return momentDate.format(weekday ? 'dddd' : 'D');
};

const DayScaleCell = (props) => {

    const { startDate, today} = props;
    const classes = useStyles();

    if(today) {
      return <WeekView.DayScaleCell {...props} formatDate={formatDayScaleDate} className={classes.today} />;
    }
    if (startDate.getDay() === 0 || startDate.getDay() === 6) {
      return <WeekView.DayScaleCell {...props} formatDate={formatDayScaleDate} className={classes.weekend} />;
    }
    return (<WeekView.DayScaleCell {...props} className="test" formatDate={formatDayScaleDate}
    />)
};


const Calendar : React.FC = () => {


  const [currentDate, setCurrentDate] = React.useState(d);



  const Root = useCallback(
      (props) => {
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
            endDayHour={19} 
            // excludedDays={[0,1]}
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