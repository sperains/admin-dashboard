/**
 * Created by Administrator on 2016-05-24.
 */
Ext.define('Admin.view.member.setting.Setting', {
    extend: 'Ext.Container',

    requires: [
        'Admin.view.member.setting.SettingModel',
		'Admin.view.member.setting.SettingController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'setting',
    */

    viewModel: {
        type: 'setting'
    },

    controller: 'setting',

    items: [
        /* include child components here */
    ]
});