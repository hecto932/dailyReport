sap.ui.define([
	"dailyReport/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
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
			
			var jModel = new JSONModel();
			var QueryPath = "farms(CLIENT=1,FARMID='"+ this._oRouterArgs.farmId + "')";
			this.getView().getModel().read(QueryPath + "?$select=LOCATION", {
				success: function(obj){
					jModel.setData(obj);
				},
				error: function(err){
					console.log(err);
				}
			});
			this.getView().setModel(jModel, "FARM_LOCATION");
			
			var iModel = new JSONModel();
			var QueryPath = "sheds(CLIENT=1,FARMID='" + this._oRouterArgs.farmId + "',SHEDID='" + this._oRouterArgs.shedId + "')/this_batch?&$select=BATCHID";
			this.getView().getModel().read(QueryPath, {
				success: function(obj){
					iModel.setData(obj);
				},
				error: function(err){
					console.log(err);
				}
			});
			this.getView().setModel(iModel, "SHED_BATCH");
			
			var kModel = new JSONModel();
			var QueryPath = "report_variable(CLIENT='1',IND_ID='01',LANGU='ES')?$select=UNIT";
			this.getView().getModel().read(QueryPath, {
				success: function(obj){
					kModel.setData(obj);
				},
				error: function(err){
					console.log(err);
				}
			});
			this.getView().setModel(kModel, "REPORT_UNIT");
		},
		BtnGenerate : function(oEvent) {
			var oModel = this.getView().getModel();
	        var oNotification = {
    			CLIENT: "1",
    			FARMID: sap.ui.getCore().getElementById("_farm").getValue(),
    			SHEDID: sap.ui.getCore().getElementById("_shed").getValue(),
    			BATCHID: sap.ui.getCore().getElementById("_lot").getValue(),
    			DATE: sap.ui.getCore().getElementById("_date").getDateValue(),
    			IND_ID: sap.ui.getCore().getElementById("SelectType").getSelectedKey(),
    			QUANTITY: sap.ui.getCore().getElementById("_quantity").getValue(),
    			UNIT: sap.ui.getCore().getElementById("_unit").getValue()
			};
			console.log(oNotification);
			oModel.create("/notifications", oNotification, {
				success: function(obj){
					console.log(obj);
				}, 
				error: function(err){
					console.log(err);
				}
			});
	        this.onNavBack(oEvent);
	    },
	    handlePress: function(oEvent){
	    	//report_variable(CLIENT='1',IND_ID='01',LANGU='ES')?$select=UNIT&$format=json
	    	var language = navigator.language.toUpperCase();
	    	var SelectedKey = sap.ui.getCore().getElementById("SelectType").getSelectedKey();
	    	var vModel = this.getView().getModel();
	    	var jModel = new JSONModel();
			var QueryPath = "/report_variable(CLIENT='1',IND_ID='" + SelectedKey + "', LANGU='" + language + "')?$select=UNIT";
			
	    	vModel.read(QueryPath,{
	    		success: function(obj){
					jModel.setData(obj);
				},
				error: function(err){
					console.log(err);
				}
	    	});
	    	
	    	this.getView().setModel(jModel, "REPORT_UNIT");
	    }
	});

});