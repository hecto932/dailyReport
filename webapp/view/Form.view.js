sap.ui.jsview("dailyReport.view.Form", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf dailyReport.view.Form
	 */
	getControllerName: function() {
		return "dailyReport.controller.Form";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf dailyReport.view.Form
	 */
	createContent: function(oController) {
		
		var CurrentDate = new Date();
		
		var SimpleForm = new sap.ui.layout.form.SimpleForm("FormShed", {
			editable: true,
			maxContainerCols: 2,
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
			labelSpanL: 4,
			labelSpanM: 4,
			emptySpanL: 4,
			columnsL: 4,
			columnsM: 4,
			content: [
				new sap.ui.core.Title({
					text: "{i18n>form_subtitle}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_farm}"
				}),
				new sap.m.Input("_farm", {
					enabled: false,
					value: "{title}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_shed}"
				}),
				new sap.m.Input("_shed", {
					enabled: false,
					value: "{galponNumber}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_lot}"
				}),
				new sap.m.Input("_lot", {
					enabled: false,
					value: "{galponLote}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_day}"
				}),
				new sap.m.DatePicker("_date", {
					enabled: true,
					format: "dd-mm-yyyy",
					placeholder: "dd-mm-yyyy",
					dateValue: CurrentDate
				}),
					new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_age}"
				}),
				new sap.m.Input("_age", {
					type: sap.m.InputType.Number,
					placeholder: "{i18n>ph_day}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_mortality}"
				}),
				new sap.m.Input("_mortality", {
					type: sap.m.InputType.Number,
					placeholder: "{i18n>ph_mortality}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_discard}"
				}),
				new sap.m.Input("_discard", {
					type: sap.m.InputType.Number,
					placeholder: "{i18n>ph_discard}"
				}),

				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_consumption}"
				}),
				new sap.m.Input("_consumption", {
					type: sap.m.InputType.Number,
					placeholder: "{i18n>ph_consumption}"
				}),
				new sap.m.Label(),
				new sap.m.Button({
					text: "Generate",
					type: "Accept",
					Align: "Center",
					press: function(oEvent){
						oController.BtnGenerate(oEvent);
					}
				})
			]
		});

		

		return new sap.m.Page({
			title: "{i18n>form_title}",
			content: [
				SimpleForm
			],
			showNavButton: true,
   			navButtonPress:  function () {  
          		oController.onNavBack();
      		}
		});
	}

});