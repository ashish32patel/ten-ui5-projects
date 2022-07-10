sap.ui.define(
    ["com/akp/tenUI5Projects/controller/BaseController", 
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format',
    'sap/ui/model/BindingMode'
    ],

    // @ts-ignore
    function (Controller, JSONModel, ChartFormatter, Format, BindingMode ) {
        "use strict";

        return Controller.extend("com.akp.tenUI5Projects.controller.covid.Pie", {
            
            dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
            oVizFrame : null,

            onInit: function () {
                Format.numericFormatter(ChartFormatter.getInstance());
                
                // @ts-ignore
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFramePie");
                oVizFrame.setVizProperties({
                    legend: {
                        title: {
                            visible: true
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                // @ts-ignore
                var dataModel = new JSONModel(this.dataPath);
                oVizFrame.setModel(dataModel);
    
                // @ts-ignore
                var oPopOver = this.getView().byId("idPopOverPie");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);
            }
            
        });
    }
);
