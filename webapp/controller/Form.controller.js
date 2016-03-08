sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController) {
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