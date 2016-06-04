


Ext.define('Admin.view.setting.user.business.UsersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.setting-businessuser',

    stores: {

        users : {
            type : 'setting.businessusers'
        },
        companies : {
            type : 'setting.companies'
        },

        shops : {
            type : 'shop.shops'
        }
    }

});