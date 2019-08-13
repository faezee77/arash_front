import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Profile from "../components/ProfileNavBar";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import '../styles/MaterialSignUp.css';
import {StylesProvider} from '@material-ui/styles';
import axios from "axios";


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            isVisible: false,
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            mobilePhone: '',
            personnel_code: '',
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleClickShowPassword = () => {
        this.setState({isVisible: !this.state.isVisible});

    };

    submitHandle = (e) => {
        e.preventDefault();
        const url = 'http://127.0.0.1:8000/signup/';
        axios.post(url, {
            username: this.state.username,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.mobilePhone,
            personnel_code: this.state.personnel_code,
            in_place: false,
            address: {
                city: "اصفهان",
                street: "dd",
                alley: "jj",
                plaque: "44",
                postal_code: "9999999999",
                tel_phone: "0988888888",
                fax: "09999999999",
                details: "88888",
            }

        }).then(response => {
            console.log(this.state);
            const csrftoken = response.headers.csrftoken;
            const sessionId = response.headers.sessionid;
            this.props.history.push({
                pathname: '/history',
                state: {
                    user: response.data,
                    csrftoken: csrftoken,
                    sessionId: sessionId
                }
            });
        });
    };

    render() {
        return (
            <StylesProvider injectFirst>
                <React.Fragment>
                    <CssBaseline/>
                    <Profile emailAddress='emohamadhassan@gmail.com' lastName='Ebrahimi' firstName='Mohamad'/>
                    <main className='HomePageMain'>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <div className='paper'>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <form className='form' noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="fname"
                                                name="firstName"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                onChange={this.onChange}
                                                value={this.state.firstName}
                                                // className='MuiOutlinedInput-input'
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="lname"
                                                onChange={this.onChange}
                                                value={this.state.lastName}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                onChange={this.onChange}
                                                value={this.state.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="username"
                                                label="Username"
                                                name="username"
                                                autoComplete="username"
                                                onChange={this.onChange}
                                                value={this.state.username}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="mobilePhone"
                                                label="Phone number"
                                                name="mobilePhone"
                                                autoComplete="mobile"
                                                onChange={this.onChange}
                                                value={this.state.mobilePhone}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="outlined-adornment-password"
                                                // className={clsx(classes.margin, classes.textField)}
                                                variant="outlined"
                                                type={this.state.isVisible ? 'text' : 'password'}
                                                label="password"
                                                name="password"
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                fullWidth
                                                // value=''
                                                // onChange={handleChange('password')}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                edge="end"
                                                                aria-label="toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                                // onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {this.state.isVisible ? <Visibility/> :
                                                                    <VisibilityOff/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="inPlace" color="primary"/>}
                                                label="in place"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="personnelCode"
                                                label="Personnel Code"
                                                onChange={this.onChange}
                                                name="personnel_code"
                                                autoComplete="personnel"
                                                value={this.state.personnel_code}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="master" color="primary"/>}
                                                label="is master"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className='submit'
                                        onClick={this.submitHandle}
                                    >
                                        Sign Up
                                    </Button>
                                </form>
                            </div>
                        </Container>
                    </main>
                </React.Fragment>
            </StylesProvider>
        );
    }
}
