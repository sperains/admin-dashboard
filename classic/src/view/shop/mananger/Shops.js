/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.shop.mananger.Shops', {

    extend: 'Ext.tab.Panel',
    xtype: 'shop-mananger',

    controller: 'shop-mananger',

    requires : [
        'Admin.view.shop.mananger.Shoplist' , 'Admin.view.shop.mananger.Addshop' , 'Ext.form.FieldSet' ,'Ext.form.FieldContainer'
    ],

    layout : 'fit',
    plain: true,

    tabPosition : 'left',               //tab位置
    tabRotation : 0,                   //tab字体方向
    
    margin: '20',
    items: [{
        title: '门店设置',
        iconCls:'fa fa-home',
        items : [
            /*{
                xtype : 'container',
                items : [
                    {
                        xtype : 'shoplist'
                    }
                ]
            },*/
            {
                xtype : 'shoplist'
            }
        ]
    }, {
        title: '菜品仓库',
        iconCls:'fa fa-stop',
        html: "B"
    }, {
        title: '菜单列表',
        html:"C"
    },{
        title: '菜单分组',
        html:"D"
    }
    ],

    listeners: {
        tabchange: 'onTabChange'
    }
});