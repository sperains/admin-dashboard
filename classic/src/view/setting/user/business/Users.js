/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.setting.user.business.Users', {
    extend: 'Ext.Container',

    requires: [
        'Admin.view.setting.user.business.UsersController' , 'Admin.view.setting.user.business.UsersModel'
    ],

    xtype: 'setting-businessusers',


    viewModel: 'setting-businessuser',

    controller : 'setting-businessusers',

    margin : '20',

    width : '100%',
    height : '100%',

    border: 1,

    style: {
        'background-color': 'white'
    },

    listeners : {
        render : function(){
            console.log(this.getViewModel().getStore('users').load());
        }
    },

    items: [
        {   
            xtype : 'businessuserlist'
        }
    ]
});