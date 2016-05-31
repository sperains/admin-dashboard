Ext.define('Admin.store.shop.ShopTypes', {

    extend: 'Ext.data.Store',
    alias: 'store.shop.shoptypes',
    model: 'Admin.model.shop.ShopType',

    proxy: {
        type: 'ajax',
        url: 'resources/data/ShopTypes.json',
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