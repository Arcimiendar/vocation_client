import {Button, TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";



export default function LoginForm({setToken}) {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [passwordError, setPasswordError] = useState({error: false, helperText:""});
    let [usernameError, setUsernameError] = useState( {error: false, helperText:""});
    let history = useHistory();

    function submit() {
        let has_to_return = false;
        if (username === "") {
            setUsernameError({
                error: true,
                helperText: "username must be provided"
            });

            has_to_return = true;
        } else setUsernameError({error: false, helperText: ""});

        if (password === "") {
            setPasswordError({
                error: true,
                helperText: "password must be provided"
            });
            has_to_return = true;
        } else setPasswordError({error: false, helperText: ""});

        if (has_to_return)
            return;

        axios.post('http://127.0.0.1:8000/token/', {username, password})
            .then(response => {
                setToken(response.data.token);
                history.goBack();
            })
            .catch(e => {
                const response_data = e.response.data;
                if (response_data.non_field_errors)
                {
                    setPasswordError({error: true, helperText: "invalid username or password"});
                    setUsernameError({error: true, helperText: "invalid username or password"});
                }
            });
    }


    return <div>
        <TextField
            variant="outlined"
            label="username"
            error={usernameError.error}
            helperText={usernameError.helperText}
            onChange={e => setUsername(e.target.value)}/>
        <TextField
            variant="outlined"
            label="password"
            error={passwordError.error}
            helperText={passwordError.helperText}
            type="password"
            onChange={e => setPassword(e.target.value)}/>
        <Button variant="outlined" color="primary" onClick={submit}>Log in</Button>
    </div>
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}