sap.ui.define(["sap/ui/core/Control"], function (Control) {
    return Control.extend("kellojo.m.LineChart", {
        metadata: {
            properties: {
                dataPoints: { type: "object" }
            },
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
            
            var  options = {
                    chart: {
                        type: "line",
                        toolbar: {
                            show: false
                        },
                        height: "150px",
                        zoom: {
                            enabled: false
                        }
                    },
                    legend: {
                        show: false
                    },
                    grid: {
                        show: false
                    },
                    xaxis: {
                        type: 'datetime',
                    },

                    series: oData.series,
                    annotations: oData.annotations
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
            oRm.addClass("kellojoM-LineChart");
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
                this.m_oChart.updateOptions({ annotations: oData.annotations });
                this.m_oChart.updateSeries(oData.series, true);
            } else {
                this.renderChart();
            }
        }
    });
});
