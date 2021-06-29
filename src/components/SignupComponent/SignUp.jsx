
import { Typography, TextField, Checkbox, Button, makeStyles } from "@material-ui/core";
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp'

const useStyle = makeStyles(() => ({
    root: {
        margin: "auto",
        width: "80%",
        marginTop: "150px",

    },
    inputText: {

        display: "flex",
        padding: "20px",
        width: "380px"

    },
    signinbtn: {
        display: "flex",
        width: "400px",
        padding: "20px",
        margin: "10px",
        '&:hover': {
            backgroundColor: " black ",
            color: "white"
        },
        marginTop:"20px"
    }
}));

export default function SignUp() {

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <fieldset style={{height:"600px",borderRadius:5,color:"#0c0b09"}}>
            <legend style={{ marginInline: 7 }}>
                <Typography variant="h6">Sing up </Typography>

            </legend>
                <form style={{marginLeft:"30px"}}>
                    <TextField label="Name" className={classes.inputText}  color="secondary"/>
                    <TextField label="LastName" className={classes.inputText}  color="secondary"/>
                    <TextField label="Username" className={classes.inputText}  color="secondary"/>
                    <TextField label="Email" className={classes.inputText} type="email"  color="secondary"/>
                    <TextField
                        type="passeord"
                        label="Password"
                        className={classes.inputText}
                        color="secondary"
                    />



                    <Button variant="outlined" color="inherit" startIcon={<LockOpenSharpIcon />} className={classes.signinbtn}>
                        Sign up
                    </Button>

                    
                </form>
 
            </fieldset>
 
        </div>
    );
}