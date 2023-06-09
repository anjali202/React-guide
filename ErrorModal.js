import React from 'react';
import ReactDOM from 'react';
import Card from './Card';
import Button from './Button';
import classes from './Errormodal.module.css';

const Backdrop = props =>{
<div className={classes.backdrop} onClick={props.onConfirm}/>
}
const Modaloverlay= props =>{
return (
  <Card className={classes.modal}>
  <header className={classes.header}>
    <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
    <p>{props.message}</p>
  </div>
  <footer className={classes.actions}>
    <Button>Ok</Button>
  </footer>
</Card>
)
}
const ErrorModal = (props) => {
  return (
    <React.Fragment>
     {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} /> , document.getElementById('backdrop-root'))}
     x
    </React.Fragment>
  );

};

export default ErrorModal;