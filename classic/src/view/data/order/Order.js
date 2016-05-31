/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.data.order.Order', {
    extend: 'Ext.Container',

    requires: [
        'Admin.view.data.order.OrderModel',
		'Admin.view.data.order.OrderController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'order',
    */

    viewModel: {
        type: 'order'
    },

    controller: 'order',

    items: [
        /* include child components here */
    ]
});