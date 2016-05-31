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
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin : '0 0 10 0',
                    defaultType: 'combobox',
                    anchor : '90%',
                    defaults : {
                        editable:false
                    },
                    items : [
                        {
                            xtype: 'filefield',
                            emptyText: '选择要上传的图片',
                            fieldLabel: '图片路径',
                            name: 'photo',
                            buttonConfig: {
                                text : '...'
                            }
                        },
                        {
                            xtype : 'button',
                            text : '显示预览',
                            itemId : 'displayImg',
                            handler : 'onDisplayImgBtnClick'
                        }
                        
                    ]
                },
                {
                    xtype : 'box',  
                    //style: 'margin:0px auto;border:1px solid #ccc; text-align:center;padding-top:20px;margin-bottom:10px',
                    tag: 'div',
                    width : 155,
                    height : 155 ,
                    style : 'margin : 0px auto;   border : 1px solid #ccc',
                    id: 'imageshow',
                    hidden : true,
                    html: '暂无图片'
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