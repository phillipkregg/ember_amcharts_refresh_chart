import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('amcharts-barchart', 'Integration | Component | amcharts barchart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{amcharts-barchart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#amcharts-barchart}}
      template block text
    {{/amcharts-barchart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
