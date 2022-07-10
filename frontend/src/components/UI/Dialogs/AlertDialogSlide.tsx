import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Dialogs from './Dialogs';
import useDialog from '../../../hooks/useDialog';

interface IALertDialogSite {
    onRemove: React.Dispatch<React.SetStateAction<any>>,
    name: string,
    title: string,
    typeTask: string
}

const AlertDialogSlide: React.FC<IALertDialogSite> = ({onRemove, name, title, typeTask}) => {

  const { handleCloseOpen, open} = useDialog()

  return (
    <div>
      <DeleteOutlineIcon 
            className={"tools_item"}
            onClick={handleCloseOpen}
        />
      <Dialogs
        handleClose={handleCloseOpen}
        open={open}
        title={title}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Вы действительно хотите удалить {typeTask}: <b>{name}</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained"  onClick={handleCloseOpen}>Нет</Button>
          <Button onClick={onRemove}>Да</Button>
        </DialogActions>
      </Dialogs>
    </div>
  );
}

export default AlertDialogSlide