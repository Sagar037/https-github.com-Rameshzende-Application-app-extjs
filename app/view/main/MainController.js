/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ApplicationApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

   
    open:function(){
       console.log(1);
       Ext.ComponentQuery.query('#dataform')[0].removeAll();
        var Profile = Ext.create('Ext.form.Panel',{
            title:'Profile',
            cls:'formm',
            bodyPadding:10,
            items:[{
                paddind:50,
                xtype:'container',
                cls:'image',
                items:[{
                   xtype:'image',
                   src:'resources/auditor1.jpg'
                }]
               
            },{
                xtype:'textfield',
                fieldLabel:'name'
            },{
                xtype:'datefield',
                fieldLabel:'DOB',
                value:''
            },{
                fieldLabel:'gender',
                xtype: 'radiogroup',
                rows:1,
                items:[{
                    fieldLabel:'Male',
                    value:'male'
                },{
                    fieldLabel:'Female',
                    value:'female'
                }]
            },{
                xtype:'textfield',
                fieldLabel:'Address',
                value:''
            },{
                xtype:'button',
                text:'Save changes'
            },{
                cls:'delete',
                xtype:'button',
                text:'delete',
            }]
        });
        Ext.ComponentQuery.query('#dataform')[0].add(Profile);
    },
   
});
