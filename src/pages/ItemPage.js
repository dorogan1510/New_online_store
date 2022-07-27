import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Rating, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAddToBasket, fetchOneItem } from '../http/itemAPI'
import { Context } from './../index'
import { observer } from 'mobx-react-lite'

const ItemPage = () => {
    const { item } = useContext(Context)
    const { id } = useParams()

    const [basketProductId, setBasketProductId] = useState(0)
    const [basketQuantity, setBasketQuantity] = useState(0)
    const [basketItems, setBasketItems] = useState([])

    useEffect(() => {
        fetchOneItem(id)
            .then(data => item.setOneItem(data))
            .catch(data => console.log(data))
    }, [id])

    const addToBasket = () => {
        item.oneItem.quantity = 1

        const exist = item.basketItems.find(x => x.id === item.oneItem.id)

        if (exist) {
            item.setBasketItems(
                item.basketItems.map(x =>
                    x.id === item.oneItem.id
                        ? { ...exist, quantity: exist.quantity + 1 }
                        : x
                )
            )
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        } else {
            item.setBasketItems([
                ...item.basketItems,
                { ...item.oneItem, quantity: 1 },
            ])
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        }
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
                        src={item.oneItem.image}
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
                            fontSize: '1.8rem',
                            fontWeight: 700,
                            textDecoration: '',
                        }}
                    >
                        Category: {item.oneItem.category}
                        {/* {item.oneItem.category.charAt(0).toUpperCase() +
                            item.oneItem.category.slice(1)} */}
                    </Grid>

                    <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{
                            fontSize: '2rem',
                        }}
                    >
                        {item.oneItem.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: 'primary.main',
                            fontSize: '2rem',
                            fontWeight: 600,
                        }}
                        paragraph
                    >
                        ${item.oneItem.price}
                    </Typography>

                    <Box>
                        <Button
                            onClick={() => addToBasket(item.oneItem)}
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
                        {item.oneItem.description}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(ItemPage)
