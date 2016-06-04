Ext.define('Admin.view.common.AreaCombobox',{
    extend : 'Ext.container.Container',


    xtype: 'areacombobox',
    layout: 'hbox',
    margin : '0 0 10 0',
    defaultType: 'combobox',
    anchor : '90%',
    defaults : {
        editable:false
    },

    items : [
            { 
                fieldLabel : '所在地区' , 
                flex: 2 , 
                name :'provinceId' ,
                emptyText: '省' ,
                store : {
                    type : 'provinces'
                },
                displayField : 'provinceName',
                valueField : 'provinceId',
                queryMode: 'local',
                listeners : {
                    select : function(e){
                        var provinceId = this.getValue() ;
                        var cityCombo = this.nextSibling('combobox[name=cityId]');
                        cityCombo.readOnly = false;
                        cityCombo.clearValue();
                        cityCombo.getStore().filter("provinceId" , provinceId);

                    }
                }
            },
            { 
                flex: 1 , 
                margin : '0 0 0 5' , 
                name : 'cityId' ,
                emptyText: '市' ,
                store : {
                    type : 'cities'
                },
                displayField : 'cityName',
                valueField : 'cityId',
                queryMode: 'local',
                listeners : {
                    focus : function(combo){
                        var provinceId = combo.previousSibling('combobox[name=provinceId]').getValue();
                        if(!provinceId){
                            this.readOnly = true
                        }
                    },
                    select : function(e){
                        var cityId = this.getValue() ;
                        var districtCombo = this.nextSibling('combobox[name=districtId]');
                        districtCombo.readOnly = false;
                        districtCombo.clearValue();
                        districtCombo.getStore().filter("cityId" , cityId);

                    }
                }
            },
            { 
                flex: 1 , 
                margin : '0 0 0 5' , 
                name : 'districtId' , 
                emptyText: '区' ,
                store : {
                    type : 'districts'
                },
                displayField : 'districtName',
                valueField : 'districtId',
                queryMode: 'local',
                listeners : {
                    focus : function(combo){
                        var cityId = combo.previousSibling('combobox[name=cityId]').getValue();
                        if(!cityId){
                            this.readOnly = true
                        }
                    }
                }
            }
        ]
});

