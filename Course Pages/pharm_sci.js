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
  createData('Pharmaceutical Science', 'AAA/A', 'AAA/A', '$3,528', 85),
];

export default function Pharm_sci() {
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
      Pharmaceutical Science belongs to a branch of science that comprises a range of scientific subjects that deal with various aspects of pharmaceutical substances that are used to manufacture the medicinal products. Therefore, Pharmaceutical Science forms the foundational scientific basis of the physical, chemical, biological and the biomedical aspects of drug properties and actions.
Some examples of subjects that are classified under Pharmaceutical Science include Medicinal Chemistry, Pharmaceutics, Pharmaceutical Technology, Pharmaceutical Analysis, Pharmacokinetics, Pharmaceutical Biotechnology, Pharmacoeconomics and Pharmacogenetics. Advancements achieved in Pharmaceutical Science will impact drug discovery, drug formulation as well as the regulation and practice of Pharmacy.

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://pharmacy.nus.edu.sg/study/undergraduate/bachelor-of-science-pharmaceutical-science/
      </div>
    </TableContainer>
  );
}