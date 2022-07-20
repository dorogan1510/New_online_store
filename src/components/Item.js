import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

export default observer(function Item() {
    const { item } = useContext(Context)

    return (
        <>
            {item.products.map(products => (
                <Card key={products.id} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='140'
                            image={products.image}
                            alt='green iguana'
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='div'
                            >
                                {products.title}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {products.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </>
    )
})
