import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import store from '@/store'

const originalPush = VueRouter.prototype.push; //拿到VueRouter的push函数
//重写调用push函数
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/classify',
        name: 'Classify',
        component: () =>
            import ('../views/Classify.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        meta: {
            login: true
        },
        component: () =>
            import ('../views/Cart.vue')
    },
    {
        path: '/my',
        name: 'My',
        meta: {
            login: true
        },
        component: () =>
            import ('../views/My.vue')
    },
    {
        path: '/site',
        name: 'Site',
        meta: {
            login: true,
            hideNav: true
        },
        component: () =>
            import ('../views/Site.vue')
    },
    {
        path: '/addsite',
        name: 'AddSite',
        meta: {
            login: true,
            hideNav: true
        },
        component: () =>
            import ('../views/AddSite.vue')
    },
    {
        path: '/orders/:id',
        name: 'Orders',
        props: true,
        meta: {
            login: true,
            hideNav: true
        },
        component: () =>
            import ('../views/Orders.vue')
    },
    {
        path: '/mydetails',
        name: 'MyDetails',
        // props: true,
        meta: {
            login: true,
            hideNav: true
        },
        component: () =>
            import ('../views/MyDetails.vue')
    },
    {
        path: '/orderpage/:id',
        name: 'OrderPage',
        props: true,
        meta: {
            login: true,
            hideNav: true
        },
        component: () =>
            import ('../views/OrderPage.vue')
    },
    {
        path: '/orderlist',
        name: 'OrderList',
        // props: true,
        meta: {
            login: true,
            hideNav: true
        },
        redirect: '/orderlist/0',
        component: () =>
            import ('../views/OrderList.vue'),
        children: [{
                path: '0',
                props: true,
                meta: {
                    login: true,
                    hideNav: true
                },
                component: () =>
                    import ('../views/OrderList0.vue'),
            }, {
                path: '1',
                props: true,
                meta: {
                    login: true,
                    hideNav: true
                },
                component: () =>
                    import ('../views/OrderList1.vue'),
            },
            {
                path: '2',
                props: true,
                meta: {
                    login: true,
                    hideNav: true
                },
                component: () =>
                    import ('../views/OrderList2.vue'),
            }, {
                path: '3',
                props: true,
                meta: {
                    login: true,
                    hideNav: true
                },
                component: () =>
                    import ('../views/OrderList3.vue'),
            }, {
                path: '4',
                props: true,
                meta: {
                    login: true,
                    hideNav: true
                },
                component: () =>
                    import ('../views/OrderList4.vue'),
            }
        ]
    },
    {
        path: '/orderdetails/:id',
        name: 'OrderDetails',
        props: true,
        meta: {
            login: true,
            hideNav: true
        },
        component: () =>
            import ('../views/OrderDetails.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../views/Search.vue'),
        meta: {
            hideNav: true
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            hideNav: true
        },
    },
    {
        path: '/goodslist',
        name: 'GoodsList',
        component: () =>
            import ('../views/GoodsList.vue'),
        meta: {
            hideNav: true
        },
    },
    {
        path: '/hotgoods/:id',
        name: 'HotGoods',
        props: true,
        component: () =>
            import ('../views/HotGoods.vue'),
        meta: {
            hideNav: true
        },
    },
    {
        path: '/promotionitem',
        name: 'PromotionItem',
        component: () =>
            import ('../views/PromotionItem.vue'),
        meta: {
            hideNav: true
        },
    },
    {
        path: '/commoditydetails/:id',
        name: 'CommodityDetails',
        props: true,
        component: () =>
            import ('../views/CommodityDetails.vue'),

    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.login && !store.getters.tokens) {
        next('/login')
    }
    next();
})

export default router