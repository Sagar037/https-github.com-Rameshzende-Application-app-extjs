Ext.define('ApplicationApp.view.main.profiles', {
    extend:'Ext.container.Container',
    xtype: 'profiles',
    requires:[
        'ApplicationApp.view.main.MainController'
    ],
   // bodyPadding:10,
    title:'Auditors',
    controller: 'main',
   items:[{
       html:'Auditors List'
   },{
       xtype:'container',
    //    width:100,
    //    height:1500,
    left:300,
       items:[{
        xtype:'button',
        scale:'large',
        iconCls:'auditor1',
        iconAlign:'left',
        text:'sagar',  
        listeners:{
            click:'open'
        }  
    },{
            xtype:'button',
            scale:'large',
            iconCls:'auditor2',
            iconAlign:'left',
            text:'Ramesh',
            listeners:{
                click:'open'
            }
    }]
},{
    // xtype:'container',
    // cls:'cont',
    itemId:'dataform'  
}]
});