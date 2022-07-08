/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/akp/tenUI5Projects/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
