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
  createData('Chemistry & Biological Sciences', 'BBC/B', 'AAA/A', '$3,245', 73.75),
];

export default function chem_bio_sci() {
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
      
      A rigorous undergraduate programme providing broad exposure to multiple chemistry disiplines and training in modern laboratory techniques.

The programme begins with the fundamentals of modern chemistry, including organic and biological chemistry, inorganic chemistry, analytical chemistry, physical chemistry, and forensic science. Students go on to study advanced and industrially-relevant topics including organometallic chemistry, spectroscopy, green chemistry, and drug design. In each year of study, students have the opportunity to do a research project to hone their creativity and explore the latest in chemistry research.

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-science-in-chemistry-and-biological-chemistry
      </div>
    </TableContainer>
  );
}