sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox) {
	"use strict";

	return Controller.extend("sap.f.FlexibleColumnLayoutWithOneColumnStart.controller.Master", {
		onInit: function () {
            let oCountriesModel = new JSONModel("https://f0ef983e-feaf-43a6-a327-acde2bbd2d97.mock.pstmn.io/countries");
            this.getView().setModel(oCountriesModel,"countries");
            this.oRouter = this.getOwnerComponent().getRouter();
			// this._bDescendingSort = false;
		},
		// onListItemPress: function (oEvent) {
		// 	// var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1),
		// 		var countryPath = oEvent.getSource().getSelectedItem().getBindingContext("countries").getPath(),
		// 		country = countryPath.split("/").slice(-1).pop();

		// 	this.oRouter.navTo("detail", {layout: sap.f.LayoutType.TwoColumnsMidExpanded, country: country});
		// },

		onCountryPress : function (oEvent) {
			var country = oEvent.getSource().getBindingContext("countries").getObject().country;
			this.oRouter.navTo("detail", {layout: sap.f.LayoutType.TwoColumnsMidExpanded, country: country});
		}	
		// onSearch: function (oEvent) {
		// 	var oTableSearchState = [],
		// 		sQuery = oEvent.getParameter("query");

		// 	if (sQuery && sQuery.length > 0) {
		// 		oTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
		// 	}

		// 	this.getView().byId("productsTable").getBinding("items").filter(oTableSearchState, "Application");
		// },

		// onAdd: function (oEvent) {
		// 	MessageBox.show("This functionality is not ready yet.", {
		// 		icon: MessageBox.Icon.INFORMATION,
		// 		title: "Aw, Snap!",
		// 		actions: [MessageBox.Action.OK]
		// 	});
		// },

		// onSort: function (oEvent) {
		// 	this._bDescendingSort = !this._bDescendingSort;
		// 	var oView = this.getView(),
		// 		oTable = oView.byId("productsTable"),
		// 		oBinding = oTable.getBinding("items"),
		// 		oSorter = new Sorter("Name", this._bDescendingSort);

		// 	oBinding.sort(oSorter);
		// }
	});
});
