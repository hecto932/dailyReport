sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/model/odata/ODataModel"
], function(BaseController, ODataModel) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Farm", {
		onInit: function() {
			
		},
		handlePress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var splitPath = oItem.getBindingContext().getPath().split("/");

			oRouter.navTo("farm", {
				farmId: splitPath[2]
			});
		}
	});

});