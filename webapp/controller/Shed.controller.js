sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/core/routing/History",
	"sap/ui/model/odata/ODataModel"
], function(BaseController, ODataModel) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Shed", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("farm").attachPatternMatched(this._onObjectMatched, this);
			var oDataModel = new sap.ui.model.odata.ODataModel("/destinations/Farms/farm.xsodata/");
			this.getView().setModel(oDataModel);
		},
		_onObjectMatched: function (oEvent) {
			this._oRouterArgs = oEvent.getParameter("arguments");
			//console.log(this._oRouterArgs);
			this.oPath = "/farms(CLIENT=1,FARMID='" + this._oRouterArgs.farmId + "')";
			this.getView().bindElement({
				path: this.oPath
			});
		},
		handlePress: function(oEvent){

			var oItem = oEvent.getSource();
			var bindingObject = oItem.getBindingContext().getObject();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//console.log(bindingObject);
			
			oRouter.navTo("sheds", {
				farmId: this._oRouterArgs.farmId,
				shedId: oItem.getBindingContext().getObject().SHEDID
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