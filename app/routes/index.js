import Ember from 'ember';

const initialData = [{
    "country": "USA",
    "visits": 3025,
    "color": "#FF0F00"
}, {
    "country": "China",
    "visits": 1882,
    "color": "#FF6600"
}, {
    "country": "Japan",
    "visits": 1809,
    "color": "#FF9E01"
}, {
    "country": "Germany",
    "visits": 1322,
    "color": "#FCD202"
}, {
    "country": "UK",
    "visits": 1122,
    "color": "#F8FF01"
}, {
    "country": "France",
    "visits": 1114,
    "color": "#B0DE09"
}, {
    "country": "India",
    "visits": 984,
    "color": "#04D215"
}, {
    "country": "Spain",
    "visits": 711,
    "color": "#0D8ECF"
}, {
    "country": "Netherlands",
    "visits": 665,
    "color": "#0D52D1"
}, {
    "country": "Russia",
    "visits": 580,
    "color": "#2A0CD0"
}, {
    "country": "South Korea",
    "visits": 443,
    "color": "#8A0CCF"
}, {
    "country": "Canada",
    "visits": 441,
    "color": "#CD0D74"
}];

const updatedData = [{
    "country": "TACO TOWN",
    "visits": 5555555555,
    "color": "#FF0F00"
}, {
    "country": "THE PIZZA WAGGON",
    "visits": 222222222,
    "color": "#FF6600"
}, {
    "country": "RADDISHVILLE",
    "visits": 0,
    "color": "#FF9E01"
}];

export default Ember.Route.extend({
    model() {
        return initialData;
    },

    afterModel(model) {
        console.log(model);
    },

    actions: {
        changeData() {
            this.get('controller').set('model', updatedData);
            console.log(this.get('controller').get('model'));
            //this.refresh();
        }
    }
});