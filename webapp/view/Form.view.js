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
		
		var TemplateItem = new sap.ui.core.Item({
			text: "{IND_ID} - {DESCRIPTION}",
			key: "{IND_ID}"
		});

		var Select = new sap.m.Select("SelectType", {
			change:  function(oEvent){
    			oController.handlePress(oEvent);
			}
		});
		
		Select.bindAggregation("", "/report_variable",TemplateItem);

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
					value: "{FARMID}"
					//value: "{FARM_LOCATION>/LOCATION}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_shed}"
				}),
				new sap.m.Input("_shed", {
					enabled: false,
					value: "{SHEDID}"
				}),
				new sap.m.Label({
					design: "Bold",
					text: "{i18n>label_lot}"
				}),
				new sap.m.Input("_lot", {
					enabled: false,
					value: "{SHED_BATCH>/BATCHID}"
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
					text: "{i18n>label_SelectType}"
				}),
				Select,
				new sap.m.Label(),
				new sap.m.Input("_quantity", {
					type: sap.m.InputType.Text,
					placeholder: "Valor"
				}),
				new sap.m.Input("_unit", {
					enabled: false,
					type: sap.m.InputType.Text,
					placeholder: "Unit",
					value: "{REPORT_UNIT>/UNIT}"
				}),
				new sap.m.Label(),
				new sap.m.Button({
					text: "Generate",
					type: "Accept",
					Align: "Center",
					press: function(oEvent) {
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
			navButtonPress: function() {
				oController.onNavBack();
			}
		});
	}

});