/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.member.mananger.Mananger', {
    extend: 'Ext.Container',

    requires: [
        'Admin.view.member.mananger.ManangerModel',
		'Admin.view.member.mananger.ManangerController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'mananger',
    */

    viewModel: {
        type: 'mananger'
    },

    controller: 'mananger',

    items: [
        /* include child components here */
    ]
});