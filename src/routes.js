import { BASKET, ITEM, SHOP } from './consts/paths'
import Shop from './pages/Shop'
import ItemPage from './pages/ItemPage'
import Basket from './pages/Basket'

export const routes = [
    {
        path: SHOP,
        Component: Shop,
    },
    {
        path: ITEM + '/:id',
        Component: ItemPage,
    },
    {
        path: BASKET,
        Component: Basket,
    },
]
