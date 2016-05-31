Ext.define('Admin.view.setting.brand.EditBrand', {
    extend: 'Ext.window.Window',
    xtype: 'brand-edit',
    
    bodyPadding: 5,

    requires: [
        'Ext.form.field.ComboBox' ,'Ext.form.field.Display' ,'Ext.form.field.Time' 
    ],

    autoShow : true,
    
    layout : 'fit',

    controller : 'setting-brand',

    modal : true,

    resizable : false,

    title : '修改品牌',

    autoDestory : true,

    items : [
        {
            xtype : 'form',
            width: 550,
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
                    handler: 'onEditBrandSubmit'
                }
            ]
        }
    ],



    initComponent: function() {
        
        this.callParent(arguments);
    }
    
})