Ext.define('Admin.view.shop.mananger.Addshop', {
    extend: 'Ext.window.Window',
    xtype: 'shop-add',
    
    bodyPadding: 5,

    itemId : 'addShopForm',

    requires: [
        'Ext.form.field.ComboBox' ,'Ext.form.field.Display' ,'Ext.form.field.Time' ,'Admin.store.shop.ShopTypes' 
    ],

    autoShow : true,
    
    layout : 'fit',

    controller : 'shop-mananger',

    modal : true,

    resizable : false,
    title : '添加门店',

    autoDestory : true,

    items : [
        {
            xtype : 'form',
            width: 550,
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 70,
                msgTarget: 'side'
            },

            items  : [
                {
                    xtype: 'fieldset',
                    title: '门店信息',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items : [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            margin : '0 0 10 0',
                            defaultType: 'combobox',
                            anchor : '90%',
                            defaults : {
                                editable:false
                            },
                            items : [
                                { 
                                    fieldLabel : '地区' , 
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
                        },
                        {
                            name: 'address',
                            fieldLabel: '详细地址',
                            emptyText: '详细地址',
                            allowBlank: false,
                            blankText :'详细地址不能为空',
                            anchor: '70%'
                        },
                        {
                            name: 'restaurantName',
                            fieldLabel: '门店名称',
                            emptyText: 'xxx',
                            anchor : '60%',
                            allowBlank: false,
                            blankText :'门店名称不能为空'
                        },
                        {
                            name: 'branchName',
                            fieldLabel: '分店名称',
                            emptyText: 'xxx分店',
                            anchor : '60%',
                            allowBlank: false,
                            blankText :'分店名称不能为空'
                        },

                        {
                            name: 'brandName',
                            fieldLabel: '所属品牌',
                            emptyText: 'xxx',
                            anchor : '60%',
                            allowBlank: false,
                            blankText :'品牌名称不能为空'
                        },
                        {
                            xtype : 'combobox',
                            fieldLabel : '餐厅类型',
                            name : 'restaurantType',
                            emptyText: '请选择餐厅类型',
                            combineErrors: true,
                            anchor : '60%',
                            allowBlank: false,
                            store : {
                                type : 'shop.shoptypes'
                                /*filters : [
                                    function(item){
                                        return item.id = 1 
                                    }
                                ]*/
                            },
                            displayField : 'typeName',
                            valueField : 'id',
                            queryMode: 'local',
                            blankText :'餐厅类型不能为空'
                        }
                    ]
                 },
                 {
                    xtype :'fieldset',
                    title : '服务信息',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items : [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            fieldLabel: '联系方式',
                            combineErrors: true,
                            msgTarget: 'under',
                            defaults: {
                                hideLabel: true,
                                enforceMaxLength: true,
                                maskRe: /[0-9.]/,
                                blankText :'不能为空'
                            },
                            items: [
                                /*{xtype: 'displayfield', value: '(', margin: '0 2 0 0'},
                                {xtype: 'textfield',    fieldLabel: '区号', name: 'areaCode', width: 60 , maxLength: 4},
                                {xtype: 'displayfield', value: ')', margin: '0 5 0 2'},*/
                                {xtype: 'textfield',    fieldLabel: '联系方式', name: 'tel', width: 120 , margin: '0 5 0 0', maxLength: 12 , allowBlank: false }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            fieldLabel: '营业时间',
                            combineErrors: true,
                            defaults: {
                                hideLabel: true,
                                margin: '0 5 0 0',
                                format : 'H:i',
                                minValue:'00:00', 
                                maxValue:'23:59', 
                                allowBlank: false
                            },
                            defaultType : 'timefield',
                            items: [{
                               name : 'startTime',
                               emptyText:'请输入营业时间',
                               value : '07:00',
                               width : 90,
                               fieldCls :'x-form-text-timefield'
                           }, {
                               xtype: 'displayfield',
                               value: '～'
                           }, {
                               name : 'endTime',
                               emptyText:'请输入关门时间',
                               value : '23:00',
                               width : 90,
                               fieldCls :'x-form-text-timefield'
                           }]
                        },
                        {
                            xtype : 'fieldcontainer',
                            layout :'hbox',
                            fieldLabel : '人均消费',
                            items : [
                                {
                                    xtype : 'textfield',
                                    name : 'perPrice',
                                    width : 70 ,
                                    value : '50'
                                },
                                {
                                    xtype : 'displayfield',
                                    margin : '0 0 0 5',
                                    value : '元'
                                }
                            ]
                        }
                    ]
                 }
            ],
            buttons : [
                {
                    text : '取消',
                    scope: this,
                    handler: function(btn){
                        btn.up('window').close();
                    }
                },
                {
                    text :'确定',
                    formBind: true,
                    handler: 'onAddShopSubmit'
                }
            ]
        }
    ],



    initComponent: function() {
        
        this.callParent(arguments);
    }
    
})