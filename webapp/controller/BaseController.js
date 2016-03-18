sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
	"use strict";
	return Controller.extend("dailyReport.controller.BaseController", {
		onInit: function() {
			var oDataModel = new sap.ui.model.odata.ODataModel("/destinations/Farms/farm.xsodata/");
			this.getView().setModel(oDataModel);
		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("appHome", {}, true /*no history*/);
			}
		},
		
		// MODEL FUNCTIONS
		getFarmLocation: function(farmId, shedId){
			var jModel = new JSONModel();
			var QueryPath = "farms(CLIENT=1,FARMID='"+ farmId + "')";
			var result = {};
			this.getView().getModel().read(QueryPath + "?$select=LOCATION", {
				async: false,
				success: function(obj){
					result=obj;
				},
				error: function(err){
					console.log(err);
				}
			});
			return result;
		} 
	});
});