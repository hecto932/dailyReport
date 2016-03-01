sap.ui.jsview("dailyReport.view.Farm", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf dailyReport.view.Farm
	 */
	getControllerName: function() {
		return "dailyReport.controller.Farm";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf dailyReport.view.Farm
	 */
	createContent: function(oController) {
		
		var templateTile = new sap.m.StandardTile({
			title: "{title}",
			info: "{info}",
			number: "{number}",
			numberUnit: "{numberUnit}",
			icon: "{icon}",
			press:  function(oEvent){
    			oController.handlePress(oEvent);
			}
		});
		
		var TileContainer = new sap.m.TileContainer("FarmContainer", {});
		
		TileContainer.bindAggregation("tiles", "/FarmCollection", templateTile);
		
 		return new sap.m.Page({
			title: "{i18n>report_title}",
			enableScrolling: false,
			content: [
				TileContainer
			]
		});
	}

});