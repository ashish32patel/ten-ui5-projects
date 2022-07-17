sap.ui.define(
    ["com/akp/tenUI5Projects/controller/BaseController", 
    "sap/ui/model/json/JSONModel"],

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.akp.tenUI5Projects.controller.vacc.Vacc", {
            
            
            onInit: function () {
                
                let vaccModel = new JSONModel("../../model/vacc.json");
                this.getView().setModel(vaccModel,"vaccModel" );


                let vaccViewConfig = {
                    "table": false,
                    "calendar": true,
                };
                let vaccViewConfigModel = new JSONModel(vaccViewConfig);
                this.getView().setModel(vaccViewConfigModel,"vaccViewConfigModel" );
               
            }


        });
    }
);
