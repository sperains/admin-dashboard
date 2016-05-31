/**
 * Created by Rains
  on 2016-05-24.
 */
Ext.define('Admin.view.setting.brand.Brandlist', {

    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Action'
    ],

    xtype: 'brandlist',

    store: 'setting.Brands',

    reference : 'brandlist',
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


    forceFit : true,

    height : '100%',
    width : '60%',

    dockedItems: [{
              xtype: 'toolbar',
              dock: 'top',
              items: [
                    {
                            text: '添加品牌',
                            tooltip: '添加一个新的品牌',
                            iconCls: 'fa fa-plus-square',
                            listeners : {
                                click : 'onAddButtonClick'
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
                            width : 80,
                            listeners : {
                                keypress : function(field, e , eOpts){
                                    if(e.getKey() === 13 ){
                                        console.log("enter press")
                                    }
                                }
                                /*render : function(){
                                    var font=document.createElement("font");
                                    font.setAttribute("color","red");
                                    var redStar=document.createTextNode('*');
                                    font.appendChild(redStar);    
                                    Ext.getDom('search').appendChild(font);
                                }*/
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
                text     : '品牌名称',
                sortable : false,
                dataIndex: 'brandName' ,
                align : 'center',
                editor: {
                    allowBlank: false
                }
            },
            {
                text     : '创建时间',
                sortable : true,
                dataIndex: 'createTime',
                align : 'center'
            },
            {
                text : '操作',
                sortable: false,
                xtype: 'actioncolumn',
                align : 'center',
                width: 50,
                items: [
                    {
                        iconCls: 'fa fa-edit',
                        tooltip: '编辑',
                        handler: 'onUpdateBtnClick'
                    }, 
                    {
                        iconCls: 'fa fa-minus',
                        tooltip: '删除',
                        handler: 'onDeleteBtnClick'
                    }
                ]
            }
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