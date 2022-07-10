sap.ui.define(
    ["com/akp/tenUI5Projects/controller/BaseController", 
    "sap/ui/model/json/JSONModel"
    ],

    function (Controller, JSONModel ) {
        "use strict";

        return Controller.extend("com.akp.tenUI5Projects.controller.covid.List", {

            onInit: function () {
                let latest = new JSONModel("https://api.rootnet.in/covid19-in/stats/latest");
                this.getView().setModel(latest, "latestDataModel");
            }
            
        });
    }
);
