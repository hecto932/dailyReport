sap.ui.define([
	"dailyReport/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Farm", {
		onInit: function() {
			var sPath = jQuery.sap.getModulePath("dailyReport.model", "/data.json");
			var oModel = new sap.ui.model.json.JSONModel(sPath);
			//console.log(oModel);
			this.getView().setModel(oModel);
		},
		handlePress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var path = encodeURIComponent(oItem.getBindingContext().getPath());

			oRouter.navTo("farm", {
				farmPath: path
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf report.view.Farm
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf report.view.Farm
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf report.view.Farm
		 */
		//	onExit: function() {
		//
		//	}

	});

});