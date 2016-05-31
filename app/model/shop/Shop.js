Ext.define('Admin.model.shop.Shop', {
    
    extend: 'Admin.model.Base',
    fields: [
       {name: 'id' ,type : 'string'},
       {name : 'shopName' , calculate: function (data) { return data.restaurantName + '(' + data.branchName + ')';} },
       {name : 'cloudId' ,type : 'string'},
     	{name : 'restaurantName' ,type : 'string'},
     	{name : 'businessName' , type : 'string'},
     	{name : 'branchName' ,type : 'string'},
     	{name : 'provinceId' ,type : 'string'},
     	{name : 'cityId' ,type : 'string'},
     	{name : 'districtId' ,type : 'string'},
     	{name : 'address' ,type : 'string'},
     	{name : 'lon' ,type : 'float'},
     	{name : 'lat' ,type : 'float'},
     	{name : 'startTime' ,type : 'string'},
     	{name : 'endTime' ,type : 'string'},
     	{name : 'isAllDay' ,type : 'int'},
     	{name : 'restaurantType' ,type : 'int'},
     	{name : 'phone' ,type : 'string'},
     	{name : 'tel' ,type : 'string'},
     	{name : 'personPrice' ,type : 'string'},
     	{name : 'delFlag' ,type : 'int'},
     	{name : 'updateTime' ,type : 'string'},			
     	{name : 'auditStatus' ,type : 'int' ,allowNull : true},  				//审核状态
     	{name : 'isOpen' ,type : 'int'}					//是否营业

    ]


});
