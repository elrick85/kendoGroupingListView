/// <reference path="js/jquery.min.js" />
/// <reference path="js/kendo.web.js" />

var App = (function (window, kendo, $) {
	var crudServiceBaseUrl = "http://demos.telerik.com/kendo-ui/service";
	    
	return kendo.Class.extend({
		model: kendo.observable({
			data: new kendo.data.DataSource({
				autoSync: true,
				transport: {
					read: {
						url: crudServiceBaseUrl + "/Products",
						dataType: "jsonp"
					},
					update: {
						url: crudServiceBaseUrl + "/Products/Update",
						dataType: "jsonp"
					},
					parameterMap: function (options, operation) {
						if (operation !== "read" && options.models) {
							return { models: kendo.stringify(options.models) };
						}
					}
				},
				batch: true,
				group: { field: "Discontinued" },
				schema: {
					model: {
						id: "ProductID"
					}
				}
			})
		}),
		init: function() {
			var model = this.model;
			model.data.read();
			kendo.bind($("#view"), model);
		}
	});
})(window, kendo, kendo.jQuery);