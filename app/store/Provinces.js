Ext.define('Admin.store.Provinces', {

    extend: 'Ext.data.Store',
    alias: 'store.provinces',
    model: 'Admin.model.Province',

    proxy: {
        type: 'ajax',
        url: 'resources/data/Provinces.json',
        reader : {
            type : 'json'
        }
    },

    autoLoad : true    
});