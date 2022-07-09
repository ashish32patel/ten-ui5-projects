sap.ui.define(
    ["./BaseController", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.akp.tenUI5Projects.controller.Tiles", {
            onInit: function () {
                let oTiles = new JSONModel("../model/tiles.json");
                this.getView().setModel(oTiles, "tileModel");
            },

            press: function (oRoute) {
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }
        });
    }
);
