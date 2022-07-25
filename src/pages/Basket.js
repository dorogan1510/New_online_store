import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Autocomplete, Rating, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import { fetchBasketItems } from '../http/itemAPI'
import { observer } from 'mobx-react-lite'

const Basket = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchBasketItems()
            .then(data => item.setBasketItems(data))
            .catch(data => console.log(data))
    }, [])

    // console.log(item.basketItems)
    // console.log(item.basket.products[0].productId)
    // console.log(item.basket.products[0].quantity)

    return (
        <>
            <Grid container component='main' sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{
                        padding: '2rem',
                        height: '100px',
                        width: '100px',
                    }}
                >
                    <img alt='' src={item.image} height='100%' width='100%' />
                </Grid>
                <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ textAlign: 'right', marginTop: '2rem' }}
                >
                    <Box sx={{ textAlign: 'right' }}>
                        <Rating
                            name='half-rating-read'
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                        />
                    </Box>

                    <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{
                            fontSize: '2rem',
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Grid
                        sx={{
                            color: 'primary.main',
                            fontSize: '2rem',
                            fontWeight: 700,
                        }}
                    >
                        {item.price}$
                    </Grid>

                    <Box>
                        <Button
                            variant='contained'
                            startIcon={<ShoppingCartRoundedIcon />}
                        >
                            Add to cart
                        </Button>
                    </Box>

                    <Grid
                        sx={{
                            fontSize: '1.5rem',
                        }}
                        item
                    >
                        <h3>Description:</h3>
                        {item.description}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(Basket)
