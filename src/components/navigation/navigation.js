import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import useToken from "../auth/useToken";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    title: {flexGrow: 1}
}));


export default function Navigation(props) {
    let history = useHistory();
    const classes = useStyles();
    const [token, setToken] = useToken();
    console.log(token)
    let bar_children;
    if (token == null) {
        bar_children = <Button
            color="inherit"
            onClick={() => history.push('/login')}>
            Login
        </Button>;
    } else {
        bar_children = <Button
            color="inherit"
            onClick={() => {setToken(null); history.push('/login')}}>
            logout
        </Button>
    }

    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title} onClick={() => history.push('/')}>
                  VocationApp
                </Typography>
                {bar_children}
            </Toolbar>
        </AppBar>
        {props.children}
    </div>
}