(function(){
	baseService = {
		buildAPIURL: function() {
			var apiSettings = Meteor.settings.api;
			var port = (apiSettings.port) ? ":" + apiSettings.port : "";
			var contextRoot = apiSettings.root || "";
			return apiSettings.protocol + "://" + apiSettings.host + port + "/" + contextRoot;
		}
	}
})();

