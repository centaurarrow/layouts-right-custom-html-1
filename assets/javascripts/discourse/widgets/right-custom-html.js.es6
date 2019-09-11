import { createWidget } from 'discourse/widgets/widget';

export default createWidget('right-custom-html', {
  tagName: 'div.right-custom-html.widget-container',
  buildKey: () => 'right-custom-html',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('right-custom-html');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_right_custom_html;

      const category = attrs.category;
      if (category && category.layouts_right_custom_html) {
        html = category.layouts_right_custom_html;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.right-custom-html").html('');
        $("div.right-custom-html").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
