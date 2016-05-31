/**
 * Created by Rains
  on 2016-05-30.
 */
Ext.define('Admin.view.setting.brand.BrandsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.setting-brand',


    onAddButtonClick : function(btn){
        console.log("添加品牌")
        var win = Ext.createWidget('brand-add');
    },

    onDeleteButtonClick : function(btn){
        console.log("删除品牌")
    },

    onRefreshButtonClick : function(btn){
        console.log("刷新品牌列表")
    },

    onAddBrandSubmit : function(btn){
        var form = btn.up('form');
        var rec = form.getForm().getValues();
        var brandlist = Ext.ComponentQuery.query('brandlist')[0];
        brandlist.getStore().add(rec);
        var win = form.up('window');
        win.close();
    },

    onUpdateBtnClick : function(btn){
        console.log("修改品牌");
    },

    onDeleteBtnClick : function(grid, rowIndex, colIndex){
            var rec = grid.getStore().getAt(rowIndex);
                grid.getStore().removeAt(rowIndex);
    }

});