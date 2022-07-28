import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '..'
import {
    AUTH,
    BASKET,
    ELECTRONICS,
    JEWERELY,
    MENCLOTHING,
    SHOP,
    WOMENCLOTHING,
} from '../consts/paths'
import Fuse from 'fuse.js'
import { fetchProducts } from '../http/itemAPI'

const NavBar = () => {
    const navigate = useNavigate()

    const { item, user } = useContext(Context)

    const searchData = pattern => {
        if (!pattern) {
            fetchProducts().then(data => {
                item.setProducts(data)
                item.setTotalCount(data.length)
            })

            return
        }

        const fuse = new Fuse(item.products, {
            keys: ['title', 'description'],
        })

        const result = fuse.search(pattern)
        const matches = []
        if (!result.length) {
            item.setProducts([])
        } else {
            result.forEach(({ item }) => {
                matches.push(item)
            })
            item.setProducts(matches)
            item.setTotalCount(item.products.length)
        }
    }

    const showElectronics = () => {
        navigate(ELECTRONICS)
    }
    const showJewerely = () => {
        navigate(JEWERELY)
    }
    const showMenClothing = () => {
        navigate(MENCLOTHING)
    }
    const showWomenClothing = () => {
        navigate(WOMENCLOTHING)
    }
    const showAll = () => {
        fetchProducts(6).then(data => {
            item.setProducts(data)
            item.setTotalCount(data.length)
        })
        navigate(SHOP)
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const logout = () => {
        localStorage.removeItem('token')
        user.setIsAuth(false)
        handleCloseUserMenu()
    }

    const itemsQuantity = item.basketItems.reduce(
        (prev, current) => prev + current.quantity,
        0
    )

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }))

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }))

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }))

    return (
        <Box>
            <AppBar position='static'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <AdbIcon
                            onClick={showAll}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                mr: 1,
                                cursor: 'pointer',
                            }}
                        />
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            onClick={showAll}
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={() => navigate(ELECTRONICS)}>
                                    <Typography textAlign='center'>
                                        Electronics
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => navigate(JEWERELY)}>
                                    <Typography textAlign='center'>
                                        Jewerely
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => navigate(MENCLOTHING)}>
                                    <Typography textAlign='center'>
                                        Men's clothing
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => navigate(WOMENCLOTHING)}
                                >
                                    <Typography textAlign='center'>
                                        Women's Clothing
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <AdbIcon
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                mr: 1,
                                cursor: 'pointer',
                            }}
                            onClick={() => navigate(SHOP)}
                        />

                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href=''
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        ></Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={showElectronics}
                            >
                                Electronics
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={showJewerely}
                            >
                                Jewelery
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={showMenClothing}
                            >
                                Men's clothing
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={showWomenClothing}
                            >
                                Women's clothing
                            </Button>
                        </Box>
                        <Search sx={{ mr: 2 }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder='Search…'
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={e => searchData(e.target.value)}
                            ></StyledInputBase>
                        </Search>

                        {user.isAuth ? (
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title='Open settings'>
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <Avatar
                                            alt='Remy Sharp'
                                            src='/static/images/avatar/2.jpg'
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id='menu-appbar'
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={logout}>
                                        <Typography textAlign='center'>
                                            Logout
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        ) : (
                            <Button
                                onClick={() => navigate(AUTH)}
                                color='inherit'
                            >
                                Login
                            </Button>
                        )}

                        <IconButton
                            onClick={() => navigate(BASKET)}
                            size='large'
                            aria-label='show 4 new mails'
                            color='inherit'
                        >
                            <Badge badgeContent={itemsQuantity} color='error'>
                                <ShoppingCartRoundedIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
export default observer(NavBar)
