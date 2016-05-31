Ext.define('Admin.model.City', {
    
    extend: 'Admin.model.Base',
    fields: [
    	  {name :'cityId' , type : 'string' },
        {name: 'provinceId' , type : 'string'},
        {name: 'cityName'}
    ]


});
