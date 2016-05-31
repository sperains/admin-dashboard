/**
 * Created by Rains
  on 2016-05-24.
 */
Ext.define('Admin.view.shop.mananger.Shoplist', {

    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Action'
    ],
    xtype: 'shoplist',
    store: 'shop.Shops',

    reference : 'shoplist',
    stateful: true,
    collapsible: false,
    multiSelect: true,
    stateId: 'stateGrid',
    selType: 'checkboxmodel',
    viewConfig: {
        enableTextSelection: true,
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },


    forceFit : true,

    height : '100%',
    width : '80%',

    dockedItems: [{
              xtype: 'toolbar',
              dock: 'top',
              items: [
                    {
                            text: '批量启用',
                            listeners : {
                                click : 'onMulStartButtonClick'
                            }
                    }, 
                    {
                            text: '批量停用',
                            listeners : {
                                click : 'onMulStopButtonClick'
                            }
                    }, 
                    {
                            text: '添加门店',
                            tooltip: '添加一个新的门店',
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

        me.columns = [
            {
                xtype: 'rownumberer',
                align : 'center'
            },
            {
                text     : '门店名称',
                sortable : false,
                dataIndex: 'shopName' ,
                align : 'center'
            },
            {
                text     : '所属品牌',
                sortable : false,
                dataIndex: 'businessName',
                align : 'center'
            },
            {
                text     : '门店状态',
                sortable : true,
                align : 'center',
                dataIndex: 'auditStatus',
                renderer : function(val){
                    if(val == 0){
                        return "审核中"
                    }
                    if(val == -1){
                        return "审核失败"
                    }
                    if(val == 1) {
                        return "审核通过"
                    }
                }
            },
            {
                text     : '营业状态',
                sortable : true,
                align : 'center',
                dataIndex: 'isOpen',
                renderer : function(val){
                    if(val == 1){
                        return "正在营业"
                    }else{
                        return "未营业"
                    }
                 
                }
            },
            {
                text : '操作',
                sortable: false,
                xtype: 'actioncolumn',
                align : 'center',
                width: 50,
                items: [{
                    iconCls: 'fa fa-edit',
                    tooltip: '编辑',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        console.log(rec);
                        var win = Ext.createWidget('shop-add');
                        win.setTitle("修改门店");
                        var form = win.down('form');
                        form.loadRecord(rec);
                    }
                }, {
                    getClass: function(v, meta, rec) {
                        if (rec.get('auditStatus') == 1) {
                            if(rec.get('isOpen')==1){
                                return 'fa fa-stop';
                            }else{
                                return 'fa fa-play';
                            }
                        }else{
                            return 'fa fa-minus'
                        }
                        
                    },
                    getTip: function(v, meta, rec) {
                       if (rec.get('auditStatus') == 1) {
                            if(rec.get('isOpen')==1){
                                return '停用';
                            }else{
                                return '启用';
                            }
                        }else{
                            return '删除'
                        }
                    },
                    handler: 'onActionClick'
                }

                ]
            }
        ];
        Ext.setGlyphFontFamily('FontAwesome');
        me.callParent();
    }

});