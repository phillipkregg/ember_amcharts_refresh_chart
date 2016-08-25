import Ember from 'ember';

export default Ember.Component.extend({

    chart: undefined,

    didUpdateAttrs() {
        this._super(...arguments);
        debugger;
        this.get('chart').dataProvider = this.get('data');
        this.get('chart').validateData();
    },

    didInsertElement() {
        var chart = AmCharts.makeChart(this.get('chartId'), {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": this.get('data'),
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Visitors from country"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45
            },
            "export": {
                "enabled": true
            }

        });

        this.set('chart', chart);
    }
});
