Ext.define('Admin.model.setting.Brand', {
    
    extend: 'Admin.model.Base',
    fields: [
       {name: 'id' ,type : 'string'},
       {name : 'brandName' ,type : 'string'},
       {name : 'companyId' ,type : 'string'},
       {name : 'imgPath' , type : 'string'},
       {name : 'createTime' , type : 'string'},
       {name : 'delFlag' , type : 'int'}
    ]


});
