sap.ui.define(
    ["com/akp/tenUI5Projects/controller/BaseController", 
    "sap/ui/model/json/JSONModel",    
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
    ],

    function (Controller, JSONModel, ChartFormatter, Format  ) {
        "use strict";

        return Controller.extend("com.akp.tenUI5Projects.controller.covid.Covid", {

            dataPath : "https://api.rootnet.in/covid19-in/stats/history",
            oVizFrame : null,

            onInit: function () {
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;

    
                // @ts-ignore
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            formatString:formatPattern.SHORTFLOAT_MFD2,
                            visible: true
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString: formatPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false                            
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: true
                        }
                    },
                    title: {
                        visible: true,
                        text: 'Covid cases history'
                    }
                });
                // @ts-ignore
                var dataModel = new JSONModel(this.dataPath);
                oVizFrame.setModel(dataModel);
    
                // @ts-ignore
                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
            },

            onPressList: function() {
                this.getOwnerComponent().getRouter().navTo("second-list");
            },

            onPressChart: function() {
                this.getOwnerComponent().getRouter().navTo("second-pie");
            }
        });
    }
);
