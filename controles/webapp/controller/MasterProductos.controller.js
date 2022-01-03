sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter , FilterOperator) {

    return Controller.extend("ns.controles.controller.MasterProductos", {

        

        onInit: function () {
            this._bus = this.getOwnerComponent().getEventBus();
        },

           
        showProducto: function (oEvent) {
            var path = oEvent.getSource().getBindingContext("products_json").getPath();
            this._bus.publish("flexible", "showProducto", path);
        },



        showSupplierName: function (oEvent) {

            var itemPressed = oEvent.getSource();
            var oContext = itemPressed.getBindingContext("products_json");
            var objectContext = oContext.getObject();

            sap.m.MessageToast.show(objectContext.SupplierName);

        },





        onFilter: function () {
            var oJSON = this.getView().getModel("products_json").getData();
            var filters = [];
            if (oJSON.CurrencyCode !== "") {
                filters.push(new Filter("CurrencyCode", FilterOperator.EQ, oJSON.CurrencyCode))
            }

            if (oJSON.CurrencyCode !== "" && oJSON.CurrencyCode !== "undefined") {
                filters.push(new Filter("CurrencyCode", FilterOperator.EQ, oJSON.CurrencyCode))
            }

            if (oJSON.Description !== "" && oJSON.Description !== "undefined") {

                filters.push(new Filter("Description", FilterOperator.Contains, oJSON.Description.trim()))
            }

            var oList = this.getView().byId("idProductoTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(filters);
        },


        onClearFilter: function () {
            var oModel = this.getView().getModel("products_json").getData();
            this.getView().getModel("products_json").setProperty("/CurrencyCode", "");
            this.getView().getModel("products_json").setProperty("/Description", "");
        },


  


    });
}); 