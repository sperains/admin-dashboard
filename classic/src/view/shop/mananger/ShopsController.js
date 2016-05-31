/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.shop.mananger.ShopsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.shop-mananger',

    onTabChange : function(tab , newCard , oldCard){
        console.log(newCard.getTitle());
    },

    onActionClick : function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        //console.log(rec);
        console.log("onActionClick");
        if (rec.get('status') == 1) {
                if(rec.get('isOpen')==1){
                    this.onStart(rec);
                }else{
                    this.onStop(rec);
                }
            }else{
                this.onDelete(rec);
            }
    },

    onStart : function(rec){
        console.log("start" + rec.getId());
    },

    onStop : function(rec){
        console.log("stop"  + rec.getId())
    },

    onDelete : function(rec){
        console.log("delete" + + rec.getId())
    },

    onMulStartButtonClick : function(btn){
        var shoplist = this.getView().down('shoplist'),
                records = shoplist.getSelectionModel( ).getSelection();
        Ext.each(records,function(rec){
            console.log(rec.id)
        })
    },

    onMulStopButtonClick : function(btn){
        console.log("批量停用");
    },

    onAddButtonClick : function(btn){
        var form = Ext.createWidget('shop-add');
    },

    onDeleteButtonClick : function(btn){
        var records = this.getRecords();
        if(records){
            console.log("删除门店")
        }
    },

    onRefreshButtonClick : function(btn){
        console.log("刷新")
    },

    onAddShopSubmit : function(btn){
        var form = btn.up('form').getForm();
        console.log(this.getView());
        var shoplist = Ext.ComponentQuery.query('shoplist')[0],
                store = shoplist.getStore();

        //var record = {"id":"4","branchName":"最爱妈妈菜(亲贤街店)",  "brandName" :"最爱妈妈菜" ,"status" : 1 ,"isOpen":"1"};
        //store.add(record);
        btn.up('window').close();
    },

    getRecords : function(){
        var shoplist = this.getView().down('shoplist'),
            records = shoplist.getSelectionModel( ).getSelection();
            
        return records;
    }
});