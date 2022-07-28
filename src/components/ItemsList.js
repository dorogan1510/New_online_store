import { Box, Button, CardActionArea, CardActions, Rating } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ITEM_PAGE } from '../consts/paths'
import '../styles.scss'
import { Context } from './../index'

export default observer(function ItemList({ currentPosts }) {
    const { item } = useContext(Context)

    const navigate = useNavigate()

    const indexOfLastPost = item.page * item.limitItems
    const indexOfFirstPost = indexOfLastPost - item.limitItems

    const addToBasket = object => {
        object.quantity = 1

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
        } else {
            item.setBasketItems([
                ...item.basketItems,
                { ...object, quantity: 1 },
            ])
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        }
    }

    return (
        <Box>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
                sx={{ padding: 6 }}
            >
                {item.products
                    .slice(indexOfFirstPost, indexOfLastPost)
                    .map(products => (
                        <Grid item xs={2} sm={4} md={4} key={products.id}>
                            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardActionArea
                                    onClick={() =>
                                        navigate(ITEM_PAGE + '/' + products.id)
                                    }
                                >
                                    <CardMedia
                                        component='img'
                                        height='240'
                                        image={products.image}
                                        alt=''
                                    />
                                    <CardContent>
                                        <Typography
                                            className='title-hidden'
                                            gutterBottom
                                            variant='h5'
                                        >
                                            {products.title}
                                        </Typography>
                                        <Typography
                                            className='description-hidden'
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            {products.description}
                                        </Typography>
                                        <Box
                                            sx={{
                                                margin: '0.5rem 0',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Rating
                                                name='half-rating-read'
                                                defaultValue={
                                                    products.rating.rate
                                                }
                                                precision={0.5}
                                                readOnly
                                            />
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions
                                    sx={{ flexDirection: 'column-reverse' }}
                                >
                                    <Button
                                        variant='contained'
                                        onClick={() => addToBasket(products)}
                                        sx={{
                                            display: 'block',
                                            margin: '0 auto 0.5rem',
                                        }}
                                    >
                                        Add to cart
                                    </Button>
                                    <Typography
                                        className='title-hidden'
                                        variant='h5'
                                        sx={{
                                            textAlign: 'center',
                                            margin: '0.5rem 0',
                                        }}
                                    >
                                        ${products.price.toFixed(2)}
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    )
})
