sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter , FilterOperator) {
        "use strict";

        return Controller.extend("ns.controles.controller.Main", {
            onInit: function () {
              this._bus = this.getOwnerComponent().getEventBus();
              this._bus.subscribe("flexible", "showProducto", this.showProductoDetails, this);





          
              
              var oJSONModelConfig = new sap.ui.model.json.JSONModel({
                visibleTabMedidas: true,
                visibleTabInfGeneral: true,
                visiblebtnShowTabMedidas: false,
                visiblebtnHideTabMedidas: true,
                
            });

              this.getView().setModel(oJSONModelConfig, "jsonModelConfig");
            },


            

            

            showProductoDetails: function(category, nameEvent, path) {
                var detailView = this.getView().byId("detailProductoView");
                detailView.bindElement("products_json>" + path);
                this.getView().byId("fcl").setProperty("layout","TwoColumnsMidExpanded");         
            }                 
        });
    });
