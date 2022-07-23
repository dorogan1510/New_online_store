import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SHOP } from '../consts/paths'
import { fetchLogin } from '../http/userAPI'
import { Context } from './../index'

const theme = createTheme()

const Auth = () => {
    const { item, user } = useContext(Context)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault()
        // await fetchLogin(login, password).then(data => console.log(data))
        await fetchLogin(login, password).then(data => user.setUser(data))
        console.log(user.user.token)
        if (
            user.user.token !== undefined &&
            user.user.token !== '' &&
            user.user.token
        ) {
            user.setIsAuth(true)
            navigate(SHOP)
            localStorage.setItem('token', user.user.token)
        } else {
            setIsLogin(true)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='login'
                            label='Login'
                            name='login'
                            onChange={e => setLogin(e.target.value)}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            onChange={e => setPassword(e.target.value)}
                        />
                        {/* <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='username'
                            label='Create your username'
                            name='username'
                            autoFocus
                        /> */}

                        {/* <FormControlLabel
                            control={
                                <Checkbox value='remember' color='primary' />
                            }
                            label='Remember me'
                        /> */}
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        {/* <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href='#' variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default observer(Auth)
