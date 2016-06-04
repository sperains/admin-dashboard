


Ext.define('Admin.view.setting.company.CompanyModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.setting-company',

    stores: {

        companies : {
            type : 'setting.companies',
            autoLoad : true
        }
    }

});