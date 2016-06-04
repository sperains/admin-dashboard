/**
 * Created by Rains
  on 2016-05-24.
 */
Ext.define('Admin.view.setting.user.business.Userlist', {

    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Action'
    ],

    xtype: 'businessuserlist',

    itemId : 'businessUserList',


    reference : 'businessUserList',
    stateful: true,                                         //列状态记忆功能
    collapsible: false,
    //multiSelect: true,                                //允许多选
    stateId: 'stateGrid',
    //selType: 'checkboxmodel',               //多选模式
    viewConfig: {
        enableTextSelection: true,
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },

    bind : {
        store : '{users}'
    },

    forceFit : true,

    height : '100%',
    width : '80%',

    dockedItems: [{
              xtype: 'toolbar',
              dock: 'top',
              items: [
                    {
                            text: '添加用户',
                            tooltip: '添加一个新的品牌',
                            iconCls: 'fa fa-plus-square',
                            listeners : {
                                click : 'onAddUserBtnClick'
                            }
                    }, 
                    {
                            text: '设置权限',
                            tooltip: '门店设置',
                            iconCls: 'fa fa-key',
                            listeners : {
                                click : 'onAddPermissionBtnClick'
                            }
                    }, 
                    //'-', 
                    '->',
                    {
                            tooltip: '刷新',
                            iconCls: 'fa fa-refresh',
                            listeners : {
                                click : 'onRefreshButtonClick'
                            }
                    },
                    {
                            tooltip: '删除',
                            iconCls: 'fa fa-trash-o',
                            listeners : {
                                click : 'onDeleteButtonClick'
                            }
                    },
                    {
                            xtype : 'textfield',
                            emptyText : '搜索',
                            enableKeyEvents : true ,
                            width : 160,
                            listeners : {
                                keypress : function(field, e , eOpts){
                                    if(e.getKey() === 13 ){
                                        console.log("enter press")
                                    }
                                }
                            }
                    }
                            
              ]
    }],




    initComponent: function () {
        var me = this;

        me.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 2
        });

        me.plugins =  [me.cellEditing],

        me.columns = [
            {
                xtype: 'rownumberer',
                align : 'center'
            },
            {
                text     : '用户名',
                sortable : false,
                dataIndex: 'userName' ,
                align : 'center',
                editor: {
                    allowBlank: false
                }
            },
            {
                text : '所属公司',
                dataIndex : 'companyName',
                align : 'center',
                editor : {
                    allowBlank : true
                }
            },
            {
                text : '注册人',
                dataIndex : 'name',
                align : 'center'
            },
            {
                text : '联系方式',
                dataIndex : 'tel',
                align : 'center'
            },
            {
                text     : '创建时间',
                sortable : true,
                dataIndex: 'createTime',
                align : 'center'
            },
            {
                xtype: 'widgetcolumn',
                align : 'center',
                widget: {
                    xtype: 'button',
                    text: '门店设置',
                    handler: 'onChooseShopsClick'
                }
            }/*,
            {
                xtype: 'widgetcolumn',
                align : 'center',
                widget: {
                    xtype: 'button',
                    text: '删除',
                    handler: 'onRemoveShopsClick'
                }
            }*/
        ];

        me.listeners  = {
            //itemdblclick : 'onUpdateBtnClick'
            canceledit : function( editor, context, eOpts ){
                console.log("cencel edit")
                console.log("context :" + context);
                console.log("editor:" + editor)
            },

            edit : function( editor, context, eOpts ){
                console.log("edit");
                console.log("context : " );
                console.log(context);
                //使用ajax请求保存数据到后台,保存成功之后前台提交修改.
                context.record.commit();
            }



        },

        Ext.setGlyphFontFamily('FontAwesome');
        me.callParent();
    }

});