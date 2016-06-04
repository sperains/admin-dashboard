Ext.define('Admin.model.setting.BusinessUser', {
    
    extend: 'Admin.model.Base',
    fields: [
       {name: 'id' ,type : 'string'},
       {name : 'companyId' ,type : 'string'},
       {name : 'companyName' ,type : 'string'},
       {name : 'userName' , type : 'string'},
       {name : 'name' , type : 'string'},
       {name : 'deptId' , type : 'int'},
       {name : 'deptName' , type : 'string'},
       {name : 'posId' , type : 'int'},
       {name : 'posName' , type : 'string'},
       {name : 'tel' , type : 'string'},
       {name : 'createTime' , type : 'string'},
       {name : 'delFlag' , type : 'int'}
    ]

});
