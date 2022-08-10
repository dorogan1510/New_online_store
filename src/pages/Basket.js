import {
    CardContent,
    Card,
    CardActionArea,
    CardMedia,
    Rating,
    Typography,
    IconButton,
    CardActions,
    Paper,
} from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React, { useContext } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { ITEM_PAGE } from '../consts/paths'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

const Basket = () => {
    const { item } = useContext(Context)

    const navigate = useNavigate()

    const plusItem = object => {
        const exist = item.basketItems.find(x => x.id === object.id)

        if (exist) {
            item.setBasketItems(
                item.basketItems.map(x =>
                    x.id === object.id
                        ? { ...exist, quantity: exist.quantity + 1 }
                        : x
                )
            )
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        }
    }

    const minusItem = object => {
        const exist = item.basketItems.find(x => x.id === object.id)

        if (exist.quantity === 1) {
            item.setBasketItems(
                item.basketItems.filter(x => x.id !== object.id)
            )
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        } else {
            item.setBasketItems(
                item.basketItems.map(x =>
                    x.id === object.id
                        ? { ...exist, quantity: exist.quantity - 1 }
                        : x
                )
            )
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        }
    }

    const deleteItem = object => {
        item.setBasketItems(item.basketItems.filter(x => x.id !== object.id))
        localStorage.setItem('basket', JSON.stringify(item.basketItems))
    }

    const itemsPrice = item.basketItems.reduce(
        (prev, current) => prev + current.quantity * current.price,
        0
    )

    return (
        <>
            {item.basketItems.length === 0 ? (
                <Typography
                    component='h2'
                    variant='h5'
                    align='center'
                    sx={{ padding: '3rem' }}
                >
                    THERE ARE NO ITEMS IN YOUR CART
                </Typography>
            ) : (
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                    sx={{ padding: 6 }}
                >
                    <Grid item xs={8} md={8}>
                        {item.basketItems.map(item => (
                            <Grid
                                item
                                xs={12}
                                md={12}
                                key={item.id}
                                sx={{ marginBottom: '1rem' }}
                            >
                                <Card>
                                    <CardActionArea
                                        onClick={() =>
                                            navigate(
                                                navigate(
                                                    ITEM_PAGE + '/' + item.id
                                                )
                                            )
                                        }
                                        sx={{ display: 'flex' }}
                                    >
                                        <CardMedia
                                            component='img'
                                            sx={{
                                                width: 160,
                                                display: {
                                                    xs: 'none',
                                                    sm: 'block',
                                                },
                                            }}
                                            image={item.image}
                                            alt={item.imageLabel}
                                        />
                                        <CardContent>
                                            <Rating
                                                name='half-rating-read'
                                                defaultValue={item.rating.rate}
                                                precision={0.2}
                                                readOnly
                                            />
                                            <Typography
                                                gutterBottom
                                                variant='h5'
                                                component='h2'
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                variant='body2'
                                                color='text.secondary'
                                            >
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions
                                        sx={{
                                            display: 'block',
                                        }}
                                    >
                                        <Typography
                                            variant='subtitle1'
                                            sx={{
                                                textAlign: 'right',
                                            }}
                                        >
                                            $
                                            {(
                                                item.quantity * item.price
                                            ).toFixed(2)}
                                        </Typography>
                                        <Typography
                                            variant='subtitle1'
                                            sx={{
                                                textAlign: 'right',
                                            }}
                                        >
                                            Quantity: {item.quantity}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <IconButton
                                                variant='contained'
                                                aria-label='delete'
                                                size='large'
                                                color='primary'
                                                onClick={() => deleteItem(item)}
                                                sx={{ padding: '0.5rem 1rem' }}
                                            >
                                                <DeleteRoundedIcon />
                                            </IconButton>
                                            <Box>
                                                <IconButton
                                                    variant='contained'
                                                    aria-label='plus'
                                                    size='large'
                                                    color='primary'
                                                    onClick={() =>
                                                        plusItem(item)
                                                    }
                                                    sx={{ padding: '0.5rem 0' }}
                                                >
                                                    <AddIcon fontSize='inherit' />
                                                </IconButton>
                                                <IconButton
                                                    variant='contained'
                                                    aria-label='minus'
                                                    size='large'
                                                    color='primary'
                                                    onClick={() =>
                                                        minusItem(item)
                                                    }
                                                    sx={{ padding: '0.5rem 0' }}
                                                >
                                                    <RemoveIcon fontSize='inherit' />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={4} md={4} key={item.id}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'auto',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'primary',
                                    fontSize: '2rem',
                                    fontWeight: 600,
                                    textAlign: 'right',
                                }}
                                paragraph
                            >
                                Total price: ${itemsPrice}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default observer(Basket)
