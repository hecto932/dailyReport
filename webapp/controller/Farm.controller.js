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
			console.log(oItem.getBindingContext());
			console.log(oItem.getBindingContext().getPath());
			console.log(oItem.getBindingContext().getObject());
			
			var oModel = new sap.ui.model.odata.v2.ODataModel("/destinations/Farms/farm.xsodata/", true, "S0015228565", "Hana123456");
			console.log(oModel.getServiceMetadata());
			
			oRouter.navTo("farm", {
				farmId: splitPath[2]
			});
		}
	});

});