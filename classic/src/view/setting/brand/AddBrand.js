Ext.define('Admin.view.setting.brand.AddBrand', {
    extend: 'Ext.window.Window',
    xtype: 'brand-add',
    
    bodyPadding: 5,

    requires: [
        'Ext.form.field.ComboBox' ,'Ext.form.field.Display' ,'Ext.form.field.Time' 
    ],

    autoShow : true,
    
    layout : 'fit',

    controller : 'setting-brand',

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
                    fieldLabel : '品牌名称',
                    name : 'brandName'
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
                    handler: 'onAddBrandSubmit'
                }
            ]
        }
    ],



    initComponent: function() {
        
        this.callParent(arguments);
    }
    
})