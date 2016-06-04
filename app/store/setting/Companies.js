Ext.define('Admin.store.setting.Companies', {

    extend: 'Ext.data.Store',
    alias: 'store.setting.companies',
    model: 'Admin.model.setting.Company',

    proxy: {
        type: 'ajax',
        url: 'resources/data/Companies.json',
        reader : {
            type : 'json',
            rootProperty :
                function(data){
                    return data.data || data.children;
                }
        }
    }

});