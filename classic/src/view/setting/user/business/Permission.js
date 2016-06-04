/**
 * Created by Rains
 * on 2016-05-16.
 */
Ext.define('Admin.view.setting.user.business.Permission', {
    extend: 'Ext.window.Window' ,

    requires : [
        'Ext.form.field.Hidden','Ext.form.CheckboxGroup' ,'Ext.form.FieldSet'
    ],

    xtype: 'businessuserpermission',
    
    bodyPadding: 5,

    title: '权限设置',
    layout: 'fit',
    autoShow: true,
    bodyPadding: 10,
    resizable:false,
    modal: true,

    items: [
        {
            xtype : 'form',
            fieldDefaults: {
                labelWidth: 75
            },
            defaultType: 'textfield',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            bodyPadding: 10,
            items :[
                {
                    xtype :'hiddenfield',
                    name :'id',
                    fieldLabel: '用户Id'
                },
                {
                    xtype :'hiddenfield',
                    name :'companyId',
                    fieldLabel:'总公司Id'
                },
                {
                    name : 'userName',
                    fieldLabel: '用户名',
                    readOnly : true,
                    style:'border:none;'
                },
                {
                    xtype : 'fieldset',
                    title: '选择分店',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        labelStyle: 'padding-left:4px;'
                    },
                    collapsible: true,
                    collapsed: false
                }
            ],
            buttons:[
                {
                    text: '取消',
                    itemId: 'reset',
                    handler: function () {
                        this.up('window').close();
                    }
                },
                {
                    text: '确定',
                    itemId:'submit',
                    formBind: true, //only enabled once the form is valid
                    disabled: true
                }
            ]
        }
    ]
});