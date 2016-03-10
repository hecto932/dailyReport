sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Form", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("sheds").attachPatternMatched(this._onObjectMatched, this);
			
			var oDataModel = new sap.ui.model.odata.ODataModel("/destinations/Farms/farm.xsodata/");
			this.getView().setModel(oDataModel);
		},
		_onObjectMatched: function(oEvent) {
			this._oRouterArgs = oEvent.getParameter("arguments");
			var path = "/sheds(CLIENT=1," + "FARMID='" + this._oRouterArgs.farmId + "',SHEDID='" + this._oRouterArgs.shedId +"')";
			this.getView().bindElement({
				path: path
			});
			
			var jModel = new JSONModel();
			var QueryPath = "farms(CLIENT=1,FARMID='"+ this._oRouterArgs.farmId + "')";
			this.getView().getModel().read(QueryPath + "?$select=LOCATION", {
				success: function(obj){
					jModel.setData(obj);
				},
				error: function(err){
					console.log(err);
				}
			});
			this.getView().setModel(jModel, "FARM_LOCATION");
		},
		BtnGenerate : function(oEvent) {
	        sap.ui.getCore().getElementById("_age").setValue("");
	        sap.ui.getCore().getElementById("_mortality").setValue("");
	        sap.ui.getCore().getElementById("_discard").setValue("");
	        sap.ui.getCore().getElementById("_consumption").setValue("");
	        this.onNavBack(oEvent);
	    },
	    handlePress: function(oEvent){
	    	console.log("Hola");
	    	console.log(sap.ui.getCore().getElementById("SelectType").getSelectedKey());
	    }
	});

});