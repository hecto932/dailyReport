sap.ui.define([
	"dailyReport/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Farm", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf report.view.Farm
		 */
		handlePress: function(oEvent) {
			var oItem = oEvent.getSource();
			//console.log(oItem.getBindingContext().getObject());
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			//console.log(oItem.getBindingContext().getModel());
			//console.log(oItem.getBindingContext().getModel().getProperty("/FarmCollection/"));
			//var path = oItem.getBindingContext().getPath();
			//console.log(path.substr(1).split("/"));
			//console.log("Normal -> " + path);
			
			oRouter.navTo("farm", {
				farmPath: encodeURIComponent(oItem.getBindingContext().getPath())
			});
		},
		onDisplayNotFound: function() {
			//display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
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