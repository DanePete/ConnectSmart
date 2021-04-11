
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createSoftware } from "../../graphql/mutations";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const AddItem = ({ fetchData }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

    const [item, setItem] = React.useState();

    const save = async () => {
      const data = { title: item};
      console.log(data);
      try {
        await API.graphql(graphqlOperation(createSoftware, { input: data }));
        fetchData();
        toast.success("Success");
      } catch (e) {
        console.log(e);
        toast.error('Error')
      }
    };

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <div>
        <h1>Software</h1>
        <Button            
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={handleClickOpen}>
            Add Software
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Software</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Software will be added instantaneously on save 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Software Title"
              type="text"
              fullWidth
              placeholder="Software Title"
              onChange={e => setItem(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button          
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />} 
              onClick={() => {
                save();
                handleClose();
              }}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
};

export default AddItem;