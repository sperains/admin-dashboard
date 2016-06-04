/**
 * Created by Rains
  on 2016-05-30.
 */
Ext.define('Admin.view.setting.company.CompaniesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.setting-company',

    onAddButtonClick : function(btn){
        console.log("添加品牌")
        var win = Ext.createWidget('company-add');
    },

    onDeleteButtonClick : function(btn){
        console.log("删除品牌")
    },

    onRefreshButtonClick : function(btn){
        console.log("刷新品牌列表")
    },

    onBrandSettingBtnClick : function(btn){
    },

    onAddCompanySubmit : function(btn){
        var companylist = Ext.ComponentQuery.query('grid[itemId=companyList]')[0];
         record = btn.up('form').getForm().getValues();
         console.log(companylist);
         console.log(record);
        companylist.getStore( ).add(record);

    }
    

});