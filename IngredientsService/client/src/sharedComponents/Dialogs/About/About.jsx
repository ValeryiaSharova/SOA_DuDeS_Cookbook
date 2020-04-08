import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';

const About = ({ onRequestClose }) => (
  <Dialog open>
    <DialogTitle aria-labelledby="customized-dialog-title">About</DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>
        Welcome to the library of the ingredients. Here you can find all products, that you need and
        also check their calorie content, squirrels, fats, carbohydrates.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onRequestClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

About.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
};

export default About;
