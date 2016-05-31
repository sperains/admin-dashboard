Ext.define('Admin.model.District', {
    
    extend: 'Admin.model.Base',
    fields: [
    	 {name: 'districtId' , type : 'string'},
        {name: 'districtName' , type : 'string'},
        {name: 'cityId' , type : 'string'}
    ]
});
