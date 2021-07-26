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
  createData('Statistics', 'AAA/C', 'AAA/A', '$3,528', 82.5),
];

export default function Stats() {
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
      Professors in the department prepare students in this four-year direct Honours programme for the workplace by teaching them how to collect, analyse and present data. Students learn how to extract information from surveys, databases and carefully designed experiments, in order to obtain understanding of the underlying phenomenon, or to decide on a suitable course of action. They learn programming, problem solving and data visualization skills, and they become sensitive to the applications at hand.
Students have the option to pursue specialisations in data science or/and finance and business statistics. Data science focuses on computing concepts and skills to manage the collection, storage and analysis of voluminous data while finance and business statistics focuses on the application of statistics to the areas of investment and financial analysis, insurance, marketing research and management. You fulfill the specialisation requirements by reading five additional elective modules from a prescribed list on top of the statistics major.
    
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.stat.nus.edu.sg/
      </div>
    </TableContainer>
  );
}