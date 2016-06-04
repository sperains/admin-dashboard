/**
 * Created by Rains
 * on 2016-05-16.
 */
Ext.define('Admin.view.setting.user.business.SettingShops', {
    extend: 'Ext.window.Window' ,

    requires : [
        'Ext.form.field.Hidden','Ext.form.CheckboxGroup' ,'Ext.form.FieldSet'
    ],

    xtype: 'businessusersettingshops',
    
    bodyPadding: 5,

    title: '门店设置',
    layout: 'fit',
    autoShow: true,
    bodyPadding: 10,
    resizable:false,
    modal: true,

    viewModel: 'setting-businessuser',
    controller : 'setting-businessusers',

    items: [
        {
            xtype : 'grid',

            width : 500,
            height : 500,

            bind : {
                store : '{shops}'
            },

            multiSelect: true,                                //允许多选
            selType: 'checkboxmodel',               //多选模式
            columns: [
                {
                    xtype: 'rownumberer',
                    align : 'center'
                }, 
                {
                    text: '门店名称',
                    dataIndex: 'shopName',
                    flex: 1
                 }, 
                 {
                    text: '所属品牌', 
                    dataIndex: 'brandName',
                    flex : 1 
                 }
            ],

            tbar: [
                {   
                    xtype : 'textfield',
                    emptyText : '搜索',
                    enableKeyEvents : true ,
                    width : 120,
                    listeners : {
                        keypress : 'onSearchKeypress'
                    }
                },
                {
                    tooltip: '搜索',
                    iconCls: 'fa fa-search',
                    listeners : {
                        click : 'onSearchBtnClick'
                    }
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
                    handler: 'onSettingShopsSubmit'
                }
            ]
        }
    ]
});