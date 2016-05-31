Ext.define('Admin.store.shop.Shops', {

    extend: 'Ext.data.Store',
    alias: 'store.shop.shops',
    model: 'Admin.model.shop.Shop',

    proxy: {
        type: 'ajax',
        url: 'resources/data/Shops.json',
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