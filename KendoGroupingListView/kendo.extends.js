/// <reference path="js/jquery.min.js" />
/// <reference path="js/kendo.web.js" />

kendo_module({
	id: "groupingListView",
	name: "GroupingListView",
	category: "web",
	description: "Виджет для отображения группированного списка.",
	depends: ["core"]
});

(function (kendo, $) {
	var widget = kendo.ui.ListView;
	
	var custom = widget.extend({
		options: {
			name: "GroupingListView",
			groupTemplate: null,
			rowTemplate: null
		},
		init: function (element, options) {
			var that = this;
			
			var groupTemplate = '<div style="width: 350px; float: left">' +
								'<span>Discontinued: ${value}</span>' +
								'<div data-template="' + $(element).data("row-template") + '" data-role="listview" data-bind="source: items"></div>' +
								'</div>';
			
			options.template = kendo.template(options.groupTemplate || groupTemplate);
			widget.fn.init.call(that, element, options);
			
			that.element = $(element);
		}
	});

	kendo.ui.plugin(custom);
})(kendo, kendo.jQuery);