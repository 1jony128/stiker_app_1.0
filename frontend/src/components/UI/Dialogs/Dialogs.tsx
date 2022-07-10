import {FC, forwardRef, ReactElement, ReactNode, Ref, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IALertDialogSite {
    title: string,
    children: ReactNode,
    handleClose: () => void,
    open: boolean
}

const Dialogs: FC<IALertDialogSite> = ({ title, children, handleClose, open}) => {

  return (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
    >
    <DialogTitle>
        {title}
    </DialogTitle>
        {children}
    </Dialog>
  );
}

export default Dialogs