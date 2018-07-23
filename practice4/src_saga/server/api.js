import Router from 'koa-router';

const router = Router();

export default router;

router.get('/getMenuList', (ctx) => {
    ctx.body = JSON.stringify([{
        title: '首页',
        pathname: '/home',
        icon: 'home',
    }, {
        title: '视觉单元',
        pathname: '/visualUnit',
        icon: 'dot-chart',
        children: [{
            title: '视觉单元列表',
            pathname: '/visualUnit/list',
            icon: 'bars',
        }, {
            title: '新增视觉单元',
            pathname: '/visualUnit/add',
            icon: 'plus',
        }],
    }, {
        title: '模版库',
        pathname: '/dashboard',
        icon: 'folder',
        children: [{
            title: '模版列表',
            pathname: '/dashboard/list',
            icon: 'bars',
        }, {
            title: '新增模版',
            pathname: '/dashboard/add',
            icon: 'plus',
        }],
    }, {
        title: '个性化',
        pathname: '/custom',
        icon: 'customer-service',
    }]);
});

router.get('/api/login', async (ctx) => {
    console.log(ctx.query)
    const params = ctx.query;
    if (params.userName === 'admin' && params.password === '12345') {
        ctx.body = {
            code: 1,
            msg: '登录成功',
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '用户名或密码错误',
        }
    }
})

router.post('/api/shopcar', (ctx) => {
    if (ctx.request.header['uid'] == 1234) {
        ctx.body = {
            code: 1,
            msg: '数据获取成功',
            total: 7620,
            data: [
                {
                    id: 0,
                    text: 'Nike Epic React Flyknit',
                    type: '珍珠粉/微玫瑰红/北极粉/珍珠粉',
                    price: 1299.00,
                    num: 1,
                },
                {
                    id: 1,
                    text: 'Nike Odyssey React',
                    type: '北极粉/北极冲压红/微玫瑰红/北极冲压红',
                    price: 969.00,
                    num: 1,
                },
                {
                    id: 2,
                    text: 'Air Jordan 1 High Zip',
                    type: '微粒茶色/帆白/红古铜',
                    price: 1299.00,
                    num: 1,
                },
                {
                    id: 3,
                    text: 'Nike Air Force 1 .07',
                    type: '白色/白色',
                    price: 749.00,
                    num: 1,
                },
                {
                    id: 4,
                    text: 'Nike Ashin Modern',
                    type: '顶峰白/白金色/浅深红/顶峰白',
                    price: 549.00,
                    num: 2,
                },
                {
                    id: 5,
                    text: 'Nike Ashin Modern LX',
                    type: '浅深红/顶峰白/浅深红',
                    price: 649.00,
                    num: 1,
                },
                {
                    id: 6,
                    text: 'Nike Free RN 2018',
                    type: '白色/黑',
                    price: 899.00,
                    num: 1,
                },
                {
                    id: 7,
                    text: 'Nike Rivah SE',
                    type: '狂喜深红/白色/星尘珊瑚红',
                    price: 649.00,
                    num: 1,
                },
            ],
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '请求失败',
        }
    }
})