sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Form", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dailyReport.view.Form
		 */
		onInit: function() {

			var sPath = jQuery.sap.getModulePath("dailyReport.model", "/data.json");
			var oModel = new sap.ui.model.json.JSONModel(sPath);
			this.getView().setModel(oModel);
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("sheds").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function(oEvent) {

			var oModel = this.getView().getModel();

			this._oRouterArgs = oEvent.getParameter("arguments");
			
			this.getView().bindElement({
				path: "/FarmCollection/" + this._oRouterArgs.farmId
			});

			var galponNumber = oModel.getProperty("/FarmCollection/" + this._oRouterArgs.farmId + "/galpones/" + this._oRouterArgs.shedId + "/title");
			var galponNumberUnit = oModel.getProperty("/FarmCollection/" + this._oRouterArgs.farmId + "/galpones/" + this._oRouterArgs.shedId + "/numberUnit");

			this.getView().getModel().setProperty("/FarmCollection/" + this._oRouterArgs.farmId + "/galponNumber", galponNumber);
			this.getView().getModel().setProperty("/FarmCollection/" + this._oRouterArgs.farmId + "/galponLote", galponNumberUnit);
		},
		BtnGenerate : function(oEvent) {
	        sap.ui.getCore().getElementById("_age").setValue("");
	        sap.ui.getCore().getElementById("_mortality").setValue("");
	        sap.ui.getCore().getElementById("_discard").setValue("");
	        sap.ui.getCore().getElementById("_consumption").setValue("");
	        this.onNavBack(oEvent);
	    }

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dailyReport.view.Form
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dailyReport.view.Form
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dailyReport.view.Form
		 */
		//	onExit: function() {
		//
		//	}

	});

});