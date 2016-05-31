/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.about.About', {
    extend: 'Ext.Container',

    requires: [
        'Admin.view.about.AboutModel',
		'Admin.view.about.AboutController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'about',
    */

    viewModel: {
        type: 'about'
    },

    controller: 'about',

    items: [
        /* include child components here */
    ]
});