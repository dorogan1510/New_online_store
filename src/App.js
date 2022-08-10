import { Box, Container, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { blue, orange } from '@mui/material/colors'

const App = () => {
    const myTheme = createTheme({
        palette: {
            primary: {
                main: blue[800],
            },
            secondary: {
                main: orange[500],
            },
        },
    })

    return (
        <ThemeProvider theme={myTheme}>
            <BrowserRouter>
                <NavBar />
                <Container maxWidth='xl'>
                    <AppRouter />
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
