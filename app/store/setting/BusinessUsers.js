Ext.define('Admin.store.setting.BusinessUsers', {

    extend: 'Ext.data.Store',
    alias: 'store.setting.businessusers',
    model: 'Admin.model.setting.BusinessUser',

    proxy: {
        type: 'ajax',
        url: 'resources/data/BusinessUsers.json',
        reader : {
            type : 'json',
            rootProperty :
                function(data){
                    return data.data || data.children;
                }
        }
    }
});