/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.setting.brand.Brands', {
    extend: 'Ext.Container',

    requires: [
	'Admin.view.setting.brand.BrandsController' , 'Admin.store.setting.Brands'
    ],

    xtype: 'setting-brand',


    viewModel: {
        //type: 'business'
    },

    controller: 'setting-brand',

    margin : '20',

    width : '100%',
    height : '100%',

    style: {
        'background-color': 'white'

    },
    items: [
        {   
            xtype : 'brandlist'
        }
    ]
});