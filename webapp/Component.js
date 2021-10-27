sap.ui.define(
	["sap/ui/core/UIComponent"],
	function(UIComponent){
		return UIComponent.extend("yo.Component",{
			metadata: {
				manifest: "json"
			},
			init: function(){
				UIComponent.prototype.init.apply(this);
				//super->constructor
				var oRouter = this.getRouter();
				oRouter.initialize();
			},
			// createContent: function(){
			// 	var oView = new sap.ui.view("idAppView",{
			// 		viewName: "yo.view.App",
			// 		type: "XML"
			// 	});
				
			// 	//get the object of app container from the app View
			// 	var oAppContainer = oView.byId("idAppCon");
				
			// 	var oView1 = new sap.ui.view("idView1",{
			// 		viewName: "yo.view.View1",
			// 		type: "XML"
			// 	});
			
			// 	var oView2 = new sap.ui.view("idView2",{
			// 		viewName: "yo.view.View2",
			// 		type: "XML"
			// 	});
			// 	var oEmpty = new sap.ui.view("idEmpty",{
			// 		viewName: "yo.view.Empty",
			// 		type: "XML"
			// 	});
				
			// 	oAppContainer.addMasterPage(oView1).addDetailPage(oEmpty).addDetailPage(oView2);
			// 	return oView;
			// },
			destroy: function(){
				
			}
		});
});