sap.ui.jsview("dailyReport.view.Shed", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf dailyReport.view.Shed
	 */
	getControllerName: function() {
		return "dailyReport.controller.Shed";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf dailyReport.view.Shed
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
		
		var TileContainer = new sap.m.TileContainer("ShedContainer", {});
		
		TileContainer.bindAggregation("tiles", "galpones",templateTile);
		
 		return new sap.m.Page({
			title: "{title}",
			enableScrolling: false,
			content: [
				TileContainer
			]
		});
	}

});