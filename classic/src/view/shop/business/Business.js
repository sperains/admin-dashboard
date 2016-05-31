/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.shop.business.Business', {
    extend: 'Ext.Container',

    requires: [
        'Admin.view.shop.business.BusinessModel',
		'Admin.view.shop.business.BusinessController'
    ],

    xtype: 'shop-business',


    viewModel: {
        type: 'business'
    },

    controller: 'business',


    html : '业务管理',

    items: [
        /* include child components here */
    ]
});