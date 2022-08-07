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
                if(oRoute.substring(0,3) == "EXT") {
                    // @ts-ignore
                    let selItem = this.getView().getModel("tileModel").getData().find( (x) => x.route == oRoute ); 
                    sap.m.URLHelper.redirect(selItem.url);
                }
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }
        });
    }
);
