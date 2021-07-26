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
  createData('Information Engineering & Media', 'BCC/D', 'AAA/B', '$4,000', 68.75),
];

export default function Iem() {
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
      

      Technology is witnessing a new revolution. By merging art and creativity with information, communications and digital media technology, new breakthroughs have been achieved. Remarkable progress in movies and games, for instance, can only be made possible with technology working hand in hand with art and creativity.  This new revolution has opened up new possibilities, experiences and business opportunities that will radically change the world. It has created the need for a new breed of infocomm engineers equipped with sound understanding of the artistic and creative processes in media design and production.  The Bachelor of Engineering in Information Engineering and Media (IEM) is here to answer this need.

The programme is mainly technical. Sixty percent of the curriculum is devoted to technical courses in Information and Communications Engineering, such as programming, computer hardware/software, communications and networking, and digital audio/image/video processing. This strong emphasis on technical foundation produces infocomm professionals equipped to work in the IT, computer and communications industries.  The programme also exposes students to the artistic and creative aspects of the media industry.


    
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-engineering-in-information-engineering-and-media-iem
      </div>
    </TableContainer>
  );
}