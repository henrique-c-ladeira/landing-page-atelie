import { makeStyles, Modal as MuiModal } from '@material-ui/core';
import React from 'react';
import { Close } from '@material-ui/icons';
import { CloseButton } from './styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '50vh',
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    backgroundColor: '#e6a727',
    padding: theme.spacing(4, 8, 4),
    fontFamily: 'Lato',
    fontWeight: 600,
    color: 'white',
    position: 'relative',
    alignContent: 'center',
  },
}));
export const Modal = ({ visible, onClose }) => {
  const classes = useStyles();
  return (
    <MuiModal open={visible} onClose={onClose}>
      <div className={classes.paper}>
        <CloseButton onClick={onClose}><Close /></CloseButton>
        Cadastro realizado com sucesso.
      </div>

    </MuiModal>
  );
};
