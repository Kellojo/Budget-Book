sap.ui.define(["sap/ui/core/Control"], function (Control) {
    return Control.extend("kellojo.m.ColumnChart", {
        metadata: {
            properties: {
                dataPoints: { type: "object" }
            },

            events: {
                columnPress: {
                    parameters: {
                        category: {
                            type: "string"
                        }
                    }
                }
            }
        },

        init: function () { },

        renderChart: function () {
            if (!!this.m_oChart) {
                this.m_oChart.destroy();
                this.m_oChart = null;
            }

            var oData = this.getDataPoints();
            if (!oData || !this.getDomRef() || !this.getVisible()) {
                return;
            }

            var options = {
                chart: {
                    type: "bar",
                    toolbar: {
                        show: false
                    },
                    height: "150px",
                    zoom: {
                        enabled: false
                    },
                    events: {
                        dataPointSelection: function(oEvent, oDomRef, oApexChartEvent) {
                            var aCategories = this.getDataPoints().xaxis.categories;
                            this.fireColumnPress({
                                category: aCategories[oApexChartEvent.dataPointIndex]
                            });
                        }.bind(this)
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },

                legend: {
                    show: false
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },

                series: oData.series,
                xaxis: oData.xaxis
            };

            this.m_oChart = new ApexCharts(this.getDomRef(), options);

            this.m_oChart.render();
        },

        onAfterRendering: function () {
            this.renderChart();
        },

        renderer: function (oRm, oControl) {
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.addClass("kellojoM-ColunChart");
            oRm.writeClasses(oControl);
            oRm.write(">");

            oRm.write("</div>");
        },

        // ---------------------
        // Getter & Setter
        // ---------------------

        setDataPoints: function (oData) {
            this.setProperty("dataPoints", oData, true);

            if (this.m_oChart != null) {
                this.m_oChart.updateOptions({xaxis: oData.xaxis});
                this.m_oChart.updateSeries(oData.series, true);
            } else {
                this.renderChart();
            }
        }
    });
});
