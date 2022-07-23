import { AUTH, BASKET, ITEM_PAGE, SHOP } from './consts/paths'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import ItemPage from './pages/ItemPage'
import Shop from './pages/Shop'

export const routes = [
    {
        path: SHOP,
        Component: Shop,
    },
    {
        path: ITEM_PAGE + '/:id',
        Component: ItemPage,
    },
    {
        path: BASKET,
        Component: Basket,
    },
    {
        path: AUTH,
        Component: Auth,
    },
]
