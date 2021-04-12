
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createCustomer } from "../../graphql/mutations";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Checkbox from "@material-ui/core/Checkbox";
import { useFormik } from "formik";
import * as yup from 'yup';


  /**
   * styling params for form
   */
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

  /**
   * our default cloass
   */
  const AddItem = ({ fetchData }) => {
    // object holding our classes
    const classes = useStyles();

    /**
     * material ui dialog handlers and state
     */
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    /**
     * Saving form data calling createCustomer graphQL mutation
     */
    const save = async (name) => {
      const data = { name: name, is_active: true};
      console.log(data);
      try {
        await API.graphql(graphqlOperation(createCustomer, { input: data }));
        fetchData();
        toast.success("Success");
      } catch (e) {
        console.log(e);
        toast.error('Error')
      }
    };

    /**
     * form validation via yup module
     */
    const validationSchema = yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      name: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Companyname is required'),
    });
    
    /**
     * formik (ie form) submit
     */
    const formik = useFormik({
      initialValues: { email: "foobar@example.com", name: "foobar", active: false },
      validationSchema: validationSchema,
      onSubmit: values => {
        save(values.name);
        handleClose();
      }
    });    

//customer_url
//customer_phone

    return (
      <div>
        <h1>Companies</h1>
        <Button            
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={handleClickOpen}>
            Add Company
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Software</DialogTitle>
          <DialogContent>

            <DialogContentText>
              Company will be added instantaneously on save 
            </DialogContentText>

            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Company Name</label>
              
              <TextField
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />             
              
              <label htmlFor="email">Email Address</label>
              <TextField
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <label htmlFor="active">Active?</label>
              <Checkbox 
                id="active"
                value={formik.values.active}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.active)}
                helperText={formik.touched.active && formik.errors.active}
              />
              
              <Button type="submit">Submit</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
};

export default AddItem;