import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Pages = observer(() => {
    const { item } = useContext(Context)

    const paginate = pageNumber => item.setPage(pageNumber)

    const handleChangePage = (event, value) => {
        item.setPage(value)
        paginate(item.page)
    }

    return (
        <Pagination
            sx={{
                margin: '0 auto',
                paddingBottom: '1rem',
                display: 'block',
            }}
            count={Math.ceil(item.totalCount / item.limitItems)}
            onChange={handleChangePage}
            renderItem={item => (
                <PaginationItem
                    components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                    }}
                    {...item}
                />
            )}
        />
    )
})

export default Pages
