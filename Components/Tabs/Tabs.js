import styles from './Tabs.module.scss';

export default function Tabs(){
  return(
    <div className={styles.tab}>
      <ul>
        <li className={styles.list}>
          <input type="radio" className={styles.rd} checked ></input>
          <label className={styles.tab1} >tab 1</label>
          <div className={styles.content}> 
          
          </div>
        </li>
      </ul>
      <ul>
        <li className={styles.list}>
          <input type="radio" className={styles.rd}></input>
          <label className={styles.tab1} >tab 2</label>
          <div className={styles.content}> 
          
          </div>
        </li>
      </ul>
      <ul>
        <li className={styles.list}>
          <input type="radio" className={styles.rd}></input>
          <label className={styles.tab1} >tab 3</label>
          <div className={styles.content}> 
          
          </div>
        </li>
      </ul>
    </div>
  )
}



// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Montagem Móvel" {...a11yProps(0)} />
//           <Tab label="Entregar e montar em um centro de montagem" {...a11yProps(1)} />
//           <Tab label="Entregar no meu endereço" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
        
//       </TabPanel>
//       <TabPanel value={value} index={1}>
        
//       </TabPanel>
//       <TabPanel value={value} index={2}>
        
//       </TabPanel>
//     </Box>
//   );
// }
