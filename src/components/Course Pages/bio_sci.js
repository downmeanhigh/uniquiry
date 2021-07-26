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
  createData('Biological Sciences', 'AAA/C', 'AAA/A', '$3,325', 82.5),
];

export default function Bio_sci() {
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
      
      This 4-year degree offers broad-based training in biological sciences and prepares graduates for challenging careers in Life Sciences research and industry. It provides a strong foundation in biological sciences that can include technology and business elements.
The study of biology is highly relevant to everyday life. At some point, we discovered that we are fascinated by living systems. As the knowledge base in the biological sciences grows exponentially and technology becomes ever more sophisticated, the ability to think broadly about biology and to apply your knowledge across boundaries of disciplines will inevitably become a very valuable and powerful asset both in the scientific environment and many walks of life.    

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-science-in-biological-sciences
      </div>
    </TableContainer>
  );
}