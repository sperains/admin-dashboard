Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    proxy: {
        type: 'ajax',
        url: 'resources/data/Navigation.json',
        reader : {
            type : 'json',
            rootProperty :
                function(data){
                    return data.data || data.children;
                }
        }
    },

    autoLoad : true




    /*
    root: {
        expanded: true,
        children: [
            {
      "id": 9,
      "text": "首页",
      "iconCls": "fa fa-home",
      "viewType":"index",
      "routeId":"index",
      "rowCls": "nav-tree-badge",
      "parent_id": 0,
      "leaf": true
    },
    {
      "id": 1,
      "text": "门店",
      "iconCls": "fa fa-university",
      "parent_id": 0,
      "leaf": false,
      "children": [
        {
          "id": 11,
          "text": "门店管理",
          "iconCls": "fa fa-users",
          "parent_id": 1,
          "viewType": "shop-mananger",
          "leaf": true,
          "items": null
        },
        {
          "id": 12,
          "text": "业务管理",
          "iconCls": "fa fa-at",
          "parent_id": 1,
          "className": "permission",
          "routeId" :  "permission",
          "leaf": true,
          "items": null
        }
      ]
    },
    {
      "id": 2,
      "text": "会员",
      "iconCls": "fa fa-credit-card",
      "parent_id": 0,
      "className": "",
      "leaf": false,
      "children": [
        {
          "id": 21,
          "text": "会员管理",
          "iconCls": null,
          "parent_id": 2,
          "className": "orders",
          "leaf": true,
          "items": null
        },
        {
          "id": 22,
          "text": "会员设置",
          "iconCls": null,
          "parent_id": 2,
          "className": "amount",
          "leaf": true,
          "items": null
        }
      ]
    },
    {
      "id": 3,
      "text": "数据",
      "iconCls": "fa fa-usd",
      "parent_id": 0,
      "className": "",
      "leaf": false,
      "children": [
        {
          "id": 31,
          "text": "流水",
          "iconCls": null,
          "parent_id": 3,
          "className": "panel",
          "leaf": true,
          "items": null
        },
        {
          "id": 32,
          "text": "财务",
          "iconCls": null,
          "parent_id": 3,
          "className": "withdraws",
          "leaf": true,
          "items": null
        }
      ]
    },
    {
      "id": 4,
      "text": "营销",
      "iconCls": "fa fa-thumbs-o-up",
      "parent_id": 0,
      "className": "",
      "leaf": false,
      "children": [
        {
          "id": 41,
          "text": "卡券管理",
          "iconCls": null,
          "parent_id": 4,
          "className": "businessusers",
          "leaf": true,
          "items": null
        }
      ]
    },
    {
      "id": 5,
      "text": "设置",
      "iconCls": "fa fa-cog",
      "parent_id": 0,
      "className": null,
      "leaf": false,
      "children": [
        {
          "id": 51,
          "text": "用户设置",
          "iconCls": null,
          "parent_id": 8,
          "className": "members",
          "leaf": true,
          "items": null
        }
      ]
    }
        ]
    }*/
});
