/**
 * Created by Rains
 * on 2016-05-24.
 */
Ext.define('Admin.view.index.Index', {
    extend: 'Ext.Container',

    xtype : 'index',

    requires: [
        'Admin.view.index.IndexModel',
		'Admin.view.index.IndexController'
    ],

    viewModel: 'index',

    controller: 'index',

    html : "index"
});