Ext.define('Admin.store.setting.Brands', {

    extend: 'Ext.data.Store',
    alias: 'store.setting.brands',
    model: 'Admin.model.setting.Brand',

    proxy: {
        type: 'ajax',
        url: 'resources/data/Brands.json',
        reader : {
            type : 'json',
            rootProperty :
                function(data){
                    return data.data || data.children;
                }
        }
    },

    autoLoad : true    
});