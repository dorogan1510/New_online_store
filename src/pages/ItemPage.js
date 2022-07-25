import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Rating, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAddToBasket, fetchOneItem } from '../http/itemAPI'
import { Context } from './../index'

const ItemPage = () => {
    const { item } = useContext(Context)
    const [oneItem, setOneItem] = useState({ info: [] })
    const { id } = useParams()

    const [basketProductId, setBasketProductId] = useState(0)
    const [basketQuantity, setBasketQuantity] = useState(0)
    const [basketItems, setBasketItems] = useState([])

    useEffect(() => {
        fetchOneItem(id)
            .then(data => setOneItem(data))
            .catch(data => console.log(data))
    }, [id])

    // const kl = () => {
    //     localStorage.setItem('productId', JSON.stringify(item.basket.products))
    //     // localStorage.setItem('quantity', item.basket.products[0].quantity)
    //     // localStorage.setItem('sdfsd', JSON.stringify({ i: 1, u: 3 }))
    // }

    const addToBasket = async (userId, productId, quantity) => {
        await fetchAddToBasket(userId, productId, quantity).then(data =>
            item.setBasket(data)
        )
        console.log(item.basket)
    }

    // localStorage.setItem('productId', JSON.stringify(item.basket.products))
    // }

    const i = { i: 2, u: 3 }
    const u = { i: 2, u: 3 }
    const sum = () => {
        const m = {
            i: i.i,
            u: u.u + i.u,
        }
        return m
    }

    return (
        <>
            <Grid container component='main' sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={3}
                    sm={4}
                    md={4}
                    sx={{
                        padding: '2rem',
                        minHeight: '100px',
                        minWidth: '50px',
                    }}
                >
                    <img
                        alt=''
                        src={oneItem.image}
                        height='100%'
                        width='100%'
                    />
                </Grid>
                <Grid xs={0} sm={0} md={2} item />
                <Grid
                    xs={5}
                    sm={5}
                    md={6}
                    item
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
                    <Grid
                        item
                        sx={{
                            color: 'primary.main',
                            fontSize: '2rem',
                            fontWeight: 700,
                            textDecoration: '',
                        }}
                    >
                        <div>Category:</div>
                        {oneItem.category}
                        {/* {oneItem.category.charAt(0).toUpperCase() +
                            oneItem.category.slice(1)} */}
                    </Grid>

                    <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{
                            fontSize: '2rem',
                        }}
                    >
                        {oneItem.title}
                    </Typography>
                    <Grid
                        sx={{
                            color: 'primary.main',
                            fontSize: '2rem',
                            fontWeight: 700,
                        }}
                    >
                        {oneItem.price}$
                    </Grid>

                    <Box>
                        <Button
                            onClick={() => addToBasket(1, id, 1)}
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
                        {oneItem.description}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemPage
