import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {Avatar} from '@material-ui/core';
import uniquiry from './Logos/uniquiry.png';
import Footer from './footer';

const images = [
  {
    src: '../../../Images/aero_eng',
    title: 'Aerospace Engineering',
    width: '33.33%',
    href: '/aero_eng',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Applied Physics',
    width: '33.33%',
    href: '/app_phy',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Biological Sciences',
    width: '33.33%',
    href: '/bio_sci',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Bioengineering',
    width: '33.33%',
    href: '/bioeng',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Biomedical Engineering',
    width: '33.33%',
    href: '/biomed_eng',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Business Analytics',
    width: '33.33%',
    href: '/biz_anal',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Chemistry & Biological Sciences',
    width: '33.33%',
    href: '/chem_bio_sci',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Chemical Engineering',
    width: '33.33%',
    href: '/chem_eng',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Chemistry',
    width: '33.33%',
    href: '/chem',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Civil Engineering',
    width: '33.33%',
    href: '/civil_eng',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Computer Engineering',
    width: '33.33%',
    href: '/comp_eng',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Computer Science',
    width: '33.33%',
    href: '/cs',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Data Science & Analytics',
    width: '33.33%',
    href: '/dsa',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Data Science & Artificial Intelligence',
    width: '33.33%',
    href: '/dsai',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Data Science & Economics',
    width: '33.33%',
    href: '/dse',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Electrical Engineering',
    width: '33.33%',
    href: '/eee',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Engineering Science',
    width: '33.33%',
    href: '/eng_sci',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Environmental Engineering',
    width: '33.33%',
    href: '/env_eng',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Environmental Studies',
    width: '33.33%',
    href: '/env_sci',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Food Science & Technology',
    width: '33.33%',
    href: '/food',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Information Engineering & Media',
    width: '33.33%',
    href: '/iem',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Information Security',
    width: '33.33%',
    href: '/info_sec',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Information Systems',
    width: '33.33%',
    href: '/info_sys',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Industrial Systems Engineering & Management',
    width: '33.33%',
    href: '/ise',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Life Sciences',
    width: '33.33%',
    href: '/life',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Mathematical Sciences',
    width: '33.33%',
    href: '/math_sci',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Mathematics',
    width: '33.33%',
    href: '/math',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Mechanical Engineering',
    width: '33.33%',
    href: '/mech_eng',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Maritime Studies',
    width: '33.33%',
    href: '/ms',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Materials Science & Engineering',
    width: '33.33%',
    href: '/mse',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Pharmacy',
    width: '33.33%',
    href: '/phar',
  },
  {
    url: '/static/images/image-list/camera.jpg',
    title: 'Pharmaceutical Science',
    width: '33.33%',
    href: '/pharm_sci',
  },
  {
    url: '/static/images/image-list/breakfast.jpg',
    title: 'Physics',
    width: '33.33%',
    href: '/phy',
  },
  {
    url: '/static/images/image-list/burgers.jpg',
    title: 'Quantitative Finance',
    width: '33.33%',
    href: '/qf',
  },
  {
    url: '/static/images/image-list/camera.jpg',
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