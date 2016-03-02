sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController, History) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Shed", {

		onInit: function () {
			
			var sPath = jQuery.sap.getModulePath("dailyReport.model", "/data.json");
			var oModel = new sap.ui.model.json.JSONModel(sPath);
			//console.log(oModel);
			this.getView().setModel(oModel);
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("farm").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			var path =  decodeURIComponent(oEvent.getParameter("arguments").farmPath);
			this._oRouterArgs = oEvent.getParameter("arguments");
			
			this.getView().bindElement({
				path: path
			});
		},
		handlePress: function(oEvent){
			var oItem = oEvent.getSource();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			var shedsPath = encodeURIComponent(oItem.getBindingContext().getPath());
			
			console.log(oItem.getBindingContext().getObject());
			
			/*console.log("Normal URL");
			console.log(oItem.getBindingContext().getPath());
			console.log("Codificado");
			console.log(encodeURIComponent(oItem.getBindingContext().getPath()));*/
			
			oRouter.navTo("sheds", {
				shedsPath: shedsPath
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dailyReport.view.Shed
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dailyReport.view.Shed
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dailyReport.view.Shed
		 */
		//	onExit: function() {
		//
		//	}

	});

});