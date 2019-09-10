# name: layouts-right-custom-html-1
# about: Right custom html number 1 widget for use with Discourse Layouts
# version: 0.1
# authors: Angus McLeod & Raghu Avula

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::WidgetHelper.add_widget('right-custom-html-1', position: 'right', order: '1')
end

after_initialize do
  Site.preloaded_category_custom_fields << 'right_layouts_custom_html_1' if Site.respond_to? :preloaded_category_custom_fields
  add_to_serializer(:basic_category, :right_layouts_custom_html_1) { object.custom_fields['right_layouts_custom_html_1'] }
end
