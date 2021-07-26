import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, IGP10, IGP90, grad_sal2020, RankPoint) {
  return { name, IGP10, IGP90, grad_sal2020, RankPoint};
}

const rows = [
  createData('Information Systems (NUS)', 'AAA/A', 'AAA/A', '$4,500', 85),
  createData('Information Systems (SMU)', 'BBC/B', 'AAA/A', '$4,542', 80),
];

export default function info_sys() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">IGP(10th Percentile)</TableCell>
            <TableCell align="right">IGP(90th Percentile)</TableCell>
            <TableCell align="right">Median Salary</TableCell>
            <TableCell align="right">Rank Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.IGP10}</TableCell>
              <TableCell align="right">{row.IGP90}</TableCell>
              <TableCell align="right">{row.grad_sal2020}</TableCell>
              <TableCell align="right">{row.RankPoint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{marginLeft: 45, width: '80%'}}>
      In an increasingly networked and connected world, Information Systems professionals have never been more in demand. Information Systems is all about designing, implementing and managing IT. The field is broad and wide-reaching, with potential careers in almost every industry.

With specializations in Financial Technology, Digital Innovation and Electronic Commerce, studying Information systems will allow you to build expertise for your future career.
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.comp.nus.edu.sg/programmes/ug/is/ and https://scis.smu.edu.sg/bsc-information-systems/majors/information-systems
      </div>
    </TableContainer>
  );
}