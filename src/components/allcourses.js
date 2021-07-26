import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import aero_eng from '../Images/aero_eng.jpg';
import app_phy from '../Images/app_phy.jpg';
import bio_sci from '../Images/bio_sci.jpg';
import bioeng from '../Images/bioeng.jpg';
import biomed_eng from '../Images/biomed_eng.jpg';
import biz_anal from '../Images/biz_anal.jpg'
import chem_bio_sci from '../Images/chem_bio_sci.jpg';
import chem_eng from '../Images/chem_eng.jpg';
import chem from '../Images/chem.jpg';
import civil_eng from '../Images/civil_eng.jpg';
import comp_eng from '../Images/comp_eng.jpg';
import cs from '../Images/cs.jpg';
import dsa from '../Images/dsa.jpg';
import dsai from '../Images/dsai.jpg';
import dse from '../Images/dse.jpg';
import eee from '../Images/eee.jpg';
import eng_sci from '../Images/eng_sci.jpg';
import env_eng from '../Images/env_eng.jpg';
import env_sci from '../Images/env_sci.jpg';
import food from '../Images/food.jpg';
import iem from '../Images/iem.jpg';
import info_sec from '../Images/info_sec.jpg';
import info_sys from '../Images/info_sys.jpg';
import ise from '../Images/ise.jpg';
import life from '../Images/life.jpg';
import math_sci from '../Images/math_sci.jpg';
import math from '../Images/math.jpg';
import mech_eng from '../Images/mech_eng.jpg';
import ms from '../Images/ms.jpg';
import mse from '../Images/mse.jpg';
import phar from '../Images/phar.jpg';
import pharm_sci from '../Images/pharm_sci.jpg';
import phy from '../Images/phy.jpg';
import qf from '../Images/qf.jpg';
import stats from '../Images/stats.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {Avatar} from '@material-ui/core';
import uniquiry from './Logos/uniquiry.png';
import Footer from './footer';

const images = [
  {
    src: aero_eng,
    title: 'Aerospace Engineering',
    width: '33.33%',
    href: '/aero_eng',
  },
  {
    src: app_phy,
    title: 'Applied Physics',
    width: '33.33%',
    href: '/app_phy',
  },
  {
    src: bio_sci,
    title: 'Biological Sciences',
    width: '33.33%',
    href: '/bio_sci',
  },
  {
    src: bioeng,
    title: 'Bioengineering',
    width: '33.33%',
    href: '/bioeng',
  },
  {
    src: biomed_eng,
    title: 'Biomedical Engineering',
    width: '33.33%',
    href: '/biomed_eng',
  },
  {
    src: biz_anal,
    title: 'Business Analytics',
    width: '33.33%',
    href: '/biz_anal',
  },
  {
    src: chem_bio_sci,
    title: 'Chemistry & Biological Chemistry',
    width: '33.33%',
    href: '/chem_bio_sci',
  },
  {
    src: chem_eng,
    title: 'Chemical Engineering',
    width: '33.33%',
    href: '/chem_eng',
  },
  {
    src: chem,
    title: 'Chemistry',
    width: '33.33%',
    href: '/chem',
  },
  {
    src: civil_eng,
    title: 'Civil Engineering',
    width: '33.33%',
    href: '/civil_eng',
  },
  {
    src: comp_eng,
    title: 'Computer Engineering',
    width: '33.33%',
    href: '/comp_eng',
  },
  {
    src: cs,
    title: 'Computer Science',
    width: '33.33%',
    href: '/cs',
  },
  {
    src: dsa,
    title: 'Data Science & Analytics',
    width: '33.33%',
    href: '/dsa',
  },
  {
    src: dsai,
    title: 'Data Science & Artificial Intelligence',
    width: '33.33%',
    href: '/dsai',
  },
  {
    src: dse,
    title: 'Data Science & Economics',
    width: '33.33%',
    href: '/dse',
  },
  {
    src: eee,
    title: 'Electrical Engineering',
    width: '33.33%',
    href: '/eee',
  },
  {
    src: eng_sci,
    title: 'Engineering Science',
    width: '33.33%',
    href: '/eng_sci',
  },
  {
    src: env_eng,
    title: 'Environmental Engineering',
    width: '33.33%',
    href: '/env_eng',
  },
  {
    src: env_sci,
    title: 'Environmental Studies',
    width: '33.33%',
    href: '/env_sci',
  },
  {
    src: food,
    title: 'Food Science & Technology',
    width: '33.33%',
    href: '/food',
  },
  {
    src: iem,
    title: 'Information Engineering & Media',
    width: '33.33%',
    href: '/iem',
  },
  {
    src: info_sec,
    title: 'Information Security',
    width: '33.33%',
    href: '/info_sec',
  },
  {
    src: info_sys,
    title: 'Information Systems',
    width: '33.33%',
    href: '/info_sys',
  },
  {
    src: ise,
    title: 'Industrial Systems Engineering & Management',
    width: '33.33%',
    href: '/ise',
  },
  {
    src: life,
    title: 'Life Sciences',
    width: '33.33%',
    href: '/life',
  },
  {
    src: math_sci,
    title: 'Mathematical Sciences',
    width: '33.33%',
    href: '/math_sci',
  },
  {
    src: math,
    title: 'Mathematics',
    width: '33.33%',
    href: '/math',
  },
  {
    src: mech_eng,
    title: 'Mechanical Engineering',
    width: '33.33%',
    href: '/mech_eng',
  },
  {
    src: ms,
    title: 'Maritime Studies',
    width: '33.33%',
    href: '/ms',
  },
  {
    src: mse,
    title: 'Materials Science & Engineering',
    width: '33.33%',
    href: '/mse',
  },
  {
    src: phar, 
    title: 'Pharmacy',
    width: '33.33%',
    href: '/phar',
  },
  {
    src: pharm_sci,
    title: 'Pharmaceutical Science',
    width: '33.33%',
    href: '/pharm_sci',
  },
  {
    src: phy,
    title: 'Physics',
    width: '33.33%',
    href: '/phy',
  },
  {
    src: qf,
    title: 'Quantitative Finance',
    width: '33.33%',
    href: '/qf',
  },
  {
    src: stats,
    title: 'Statistics',
    width: '33.33%',
    href: '/stats',
  },
];  

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Link variant="h6" color="inherit" href="/" noWrap>
            <Avatar alt="uniquiry" imgProps sizes="large" src={uniquiry} />
          </Link>
        </Toolbar>
      </AppBar>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          href= {image.href}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
            <Footer />
    </div>
  );
}