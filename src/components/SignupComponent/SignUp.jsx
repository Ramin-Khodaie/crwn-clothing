
import { Typography, TextField, Checkbox, Button, makeStyles } from "@material-ui/core";
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp'

const useStyle = makeStyles(() => ({
    root: {
        marginRight: "200px",
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
        }

    }
}));

export default function SignUp() {

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <legend style={{ marginInline: 7 }}>
                <Typography variant="h6">Sing in </Typography>
                <form>
                    <TextField label="Name" className={classes.inputText} />
                    <TextField label="LastName" className={classes.inputText} />
                    <TextField label="Username" className={classes.inputText} />
                    <TextField label="Email" className={classes.inputText} type="email"/>
                    <TextField
                        type="passeord"
                        label="Password"
                        className={classes.inputText}
                    />



                    <Button variant="outlined" color="inherit" startIcon={<LockOpenSharpIcon />} className={classes.signinbtn}>
                        Sign up
                    </Button>

                    
                </form>
            </legend>

        </div>
    );
}