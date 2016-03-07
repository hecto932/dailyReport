sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/core/routing/History",
	"sap/ui/model/odata/ODataModel"
], function(BaseController, History, ODataModel) {
	"use strict";

	return BaseController.extend("dailyReport.controller.Shed", {

		onInit: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel({
				serviceUrl: "/destinations/Farms/farm.xsodata/",
				user: "S0015228565",
				password: "Hana123456"
			});
						
			console.log(oModel.getData("farms"));
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("farm").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this._oRouterArgs = oEvent.getParameter("arguments");
			console.log(oEvent.getParameter("arguments"));
			console.log("farms(CLIENT=1,FARMID='" + this._oRouterArgs.farmId + "')" + "/Sheds_Id");
			this.getView().bindElement({
				path: "farms(CLIENT=1,FARMID='" + this._oRouterArgs.farmId + "')" + "/Sheds_Id"
			});
		},
		handlePress: function(oEvent){

			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var path = oItem.getBindingContext().getPath();
			var splitPath = oItem.getBindingContext().getPath().split("/");
			
			oRouter.navTo("sheds", {
				farmId: this._oRouterArgs.farmId,
				shedId: splitPath[4]
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