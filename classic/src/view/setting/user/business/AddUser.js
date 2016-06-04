Ext.define('Admin.view.setting.user.business.AddUser', {
    extend: 'Ext.window.Window',
    xtype: 'businessuser-add',
    
    bodyPadding: 5,

    requires: [
        'Ext.form.field.ComboBox' ,'Ext.form.field.Display' ,'Ext.form.field.Time' ,'Ext.picker.DateTimePicker'
    ],

    autoShow : true,
    
    layout : 'fit',

    controller : 'setting-businessusers',
    viewModel: 'setting-businessuser',

    modal : true,

    resizable : false,

    title : '添加商家用户',

    autoDestory : true,

    listeners : {
        render : function(){
            this.getViewModel().getStore('companies').load();
        }
    },

    items : [
        {
            xtype : 'form',
            width: 355,
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 110,
                msgTarget: 'side'
            },
            defaultType : 'textfield',

            items  : [
                {
                    fieldLabel : '用户名',
                    name : 'userName',
                    emptyText: '用户名',
                    allowBlank:false,
                    margin : '10 0 10 0'
                },
                { 
                    allowBlank:false, 
                    fieldLabel: '密码', 
                    name: 'password', 
                    emptyText: '密码', 
                    inputType: 'password'
                },
                { 
                    allowBlank:false, 
                    fieldLabel: '确认密码', 
                    name: 'password1', 
                    emptyText: '确认密码', 
                    inputType: 'password',
                    validator : function(value) {
                        var password = this.previousSibling('[name=password]');
                        return (value === password.getValue()) ? true : '密码不一致.'
                    }
                },
                {
                    xtype : 'combobox',
                    fieldLabel : '所属公司',
                    name : 'companyId',
                    emptyText: '请选择所属公司',
                    combineErrors: true,
                    allowBlank: false,
                    bind : {
                        store : '{companies}'
                    },
                    displayField : 'companyName',
                    valueField : 'companyId',
                    queryMode: 'local',
                    blankText :'公司不能为空'
                },
                {
                    fieldLabel : '注册人姓名',
                    name : 'name',
                    emptyText: '真实姓名',
                    allowBlank:false
                },
                {
                    fieldLabel : '联系方式',
                    name : 'tel',
                    emptyText: '联系方式',
                    allowBlank:false
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
                    handler: 'onAddUserSubmit'
                }
            ]
        }

    ],



    initComponent: function() {
        
        this.callParent(arguments);
    }
    
})