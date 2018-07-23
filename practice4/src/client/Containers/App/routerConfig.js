import Shop from './components/shop'
import Info from './components/info'
import Detail from './components/shop/detail'
const routers = [
    {
        path:'/shop',
        name:"购物",
        component:Shop,
        exact:false,
    },
    {
        path:'/info',
        name:"消息",
        component:Info,
        exact:false,
    },
    {
        path:'/detail',
        name:"",
        component:Detail,
        exact:false,
    },
]
export default routers;