Ext.define('Admin.model.setting.Company', {
    
    extend: 'Admin.model.Base',
    fields: [
       {name: 'companyId' ,type : 'string'},
       {name : 'companyName' ,type : 'string'},
       {name : 'address' ,type : 'string'},
       {name : 'provinceId' ,type : 'string'},
     	{name : 'cityId' ,type : 'string'},
     	{name : 'districtId' ,type : 'string'},
       {name : 'createTime' , type : 'string'},
       {name : 'delFlag' , type : 'int'}
    ]


});
