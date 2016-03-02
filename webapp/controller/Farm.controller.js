sap.ui.define([
	"dailyReport/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Farm", {
		onInit: function() {
			var sPath = jQuery.sap.getModulePath("dailyReport.model", "/data.json");
			var oModel = new sap.ui.model.json.JSONModel(sPath);
			this.getView().setModel(oModel);
		},
		handlePress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var path = oItem.getBindingContext().getPath();
			var encodePath = encodeURIComponent(oItem.getBindingContext().getPath());
			var splitPath = oItem.getBindingContext().getPath().split("/");

			oRouter.navTo("farm", {
				farmId: splitPath[2]
			});
		}
	});

});