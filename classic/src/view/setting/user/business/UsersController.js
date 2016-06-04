/**
 * Created by Rains
  on 2016-05-30.
 */
Ext.define('Admin.view.setting.user.business.UsersController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.setting-businessusers',



    onAddUserBtnClick : function(btn){
        console.log("添加用户")
        var win = Ext.createWidget('businessuser-add');
    },

    onAddPermissionBtnClick : function(btn){
        var  grid = btn.up('grid'),
         record  = grid.getSelectionModel().getSelection()[0];

        if(record){
            console.log("设置权限")
            var win = Ext.createWidget('businessuserpermission');

        }else{
            Ext.Msg.alert("提示","请选择需要设置权限的用户")
        }
         
    },

    onDeleteButtonClick : function(btn){
        console.log("删除品牌")
    },

    onRefreshButtonClick : function(btn){
        console.log("刷新品牌列表")
    },

    onAddUserSubmit : function(btn){

        var me = this;
        var userlist = Ext.ComponentQuery.query('grid[itemId=businessUserList]')[0];
        var form = btn.up('form').getForm();
        var companyName = form.findField('companyId').getRawValue( );
        console.log(companyName);
        var record = form.getFieldValues();
        record.companyName = companyName;
        record.createTime = Ext.util.Format.date(new Date() , 'Y-m-d H:i:s');
        delete record.password1;
        console.log(record);

        
        

    },


    'onChooseShopsClick' : function(btn){
        console.log(btn.getWidgetRecord());

        var win = Ext.createWidget('businessusersettingshops');

    },

    'settingPermission' : function(){

    },

    'onSearchKeypress' : function(field, e , eOpts){

        if(e.getKey() === 13 ){
            var btn = field.nextSibling('button');
            this.onSearchBtnClick(btn);
        }
    },

    'onRemoveShopsClick' : function(btn){

        var me = this;

        Ext.Msg.confirm('提示','是否确认删除',function(choice){
            if(choice === 'yes'){
                var record = btn.getWidgetRecord();
                var grid = me.lookupReference('businessUserList').getStore();
                grid.remove(record);
            }
        });
        
    },


    'onSettingShopsSubmit' : function(btn){
        var grid = btn.up('window').down('grid');
        var records  = grid.getSelectionModel().getSelection();
        var shopList = [];
        Ext.each(records,function(record){
            var shop = {};
            shop.id = record.get('id');
            shop.brandId = record.get('brandId');
            shopList.push(shop)
        });
        console.log(shopList);
    },

    'onSearchBtnClick' : function(btn){
        var searchField = btn.previousSibling('textfield');
        var key = searchField.getValue();
        console.log(key);
        var grid = btn.up('window').down('grid');
        grid.getStore().reload();
        grid.getStore().clearFilter();
        if(key != ""){
            console.log(123);
            grid.getStore().filterBy(function(record){
               return record.get('shopName').match(key) ;
            });
        }
        

    }
    
});