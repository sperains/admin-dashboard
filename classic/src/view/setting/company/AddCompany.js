Ext.define('Admin.view.setting.brand.AddCompany', {
    extend: 'Ext.window.Window',
    xtype: 'company-add',
    
    bodyPadding: 5,

    requires: [
        'Ext.form.field.ComboBox' ,'Ext.form.field.Display' ,'Ext.form.field.Time' ,'Ext.picker.DateTimePicker'
    ],

    autoShow : true,
    
    layout : 'fit',

    controller : 'setting-company',

    modal : true,

    resizable : false,

    title : '添加品牌',

    autoDestory : true,

    items : [
        {
            xtype : 'form',
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 70,
                msgTarget: 'side'
            },
            defaultType : 'textfield',

            items  : [
                {
                    fieldLabel : '公司名称',
                    name : 'companyName'
                },
                {
                    xtype : 'areacombobox',
                    fieldLabel : '所在地区'
                },
                {
                    fieldLabel : '地址',
                    name : 'address'
                }
                

                    
            ],
            buttons : [
                {
                    text : '取消',
                    scope: this,
                    handler: function(btn){
                        btn.up('window').close();
                    }
                },
                {
                    text :'确定',
                    action : 'save',
                    formBind: true,
                    handler: 'onAddCompanySubmit'
                }
            ]
        }

    ],



    initComponent: function() {
        
        this.callParent(arguments);
    }
    
})