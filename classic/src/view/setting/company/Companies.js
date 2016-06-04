/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.setting.company.Companies', {
    extend: 'Ext.Container',

    requires: [
        'Admin.view.setting.company.CompaniesController' ,'Admin.view.setting.company.CompanyModel'
    ],

    xtype: 'setting-company',


    viewModel: 'setting-company',

    controller : 'setting-company',

    margin : '20',

    width : '100%',
    height : '100%',

    border: 1,

    style: {
        'background-color': 'white'
    },


    items: [
        {   
            xtype : 'companylist'
        }
    ]
});