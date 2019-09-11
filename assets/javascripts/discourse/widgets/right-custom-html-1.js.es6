import { createWidget } from 'discourse/widgets/widget';

export default createWidget('right-custom-html-1', {
  tagName: 'div.right-custom-html-1.widget-container',
  buildKey: () => 'right-custom-html-1',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('right-custom-html-1');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_right_custom_html_1;

      const category = attrs.category;
      if (category && category.layouts_right_custom_html_1) {
        html = category.layouts_right_custom_html_1;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.right-custom-html-1").html('');
        $("div.right-custom-html-1").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
