// import React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import RequestBreakfast from 'components/pages/Request/Breakfast';
// // import RequestLunch from 'components/pages/Request/Lunch';

// function TabContainer({ children, dir }) {
//   return (
//     <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//       {children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

// export default function FullWidthTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   function handleChangeIndex(index) {
//     setValue(index);
//   }

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//         >
//           <Tab label="Café da Manhã" />
//           <Tab label="Almoço ou Janta" />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabContainer dir={theme.direction}>{RequestBreakfast} </TabContainer>
//         <TabContainer dir={theme.direction}> item2 </TabContainer>
//       </SwipeableViews>
//     </div>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import RequestBreakfast from 'components/pages/Request/Breakfast';
import RequestLunch from 'components/pages/Request/Lunch';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    backgroundColor: "#1985A1",
    color:"#fff",
  }
}));

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tab} variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Café de Manhã" href="/breakfast" />
          <LinkTab label="Almoço ou Jantar" href="/lunch" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>item 1</TabContainer>}
      {value === 1 && <TabContainer>item 2</TabContainer>}
    </div>
  );
}

export default NavTabs;