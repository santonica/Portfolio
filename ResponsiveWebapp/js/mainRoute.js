/**
 * Created by Santon on 11/7/2015.
 */
(function ($) {
	/**
	 * This is the main routing file for this project to make it a Single Page Application.
	 * This is intended for future expansion to navigate to project pages.
	 */
	var app = $.sammy('#main', function () {
		this.get('#/', function (context) {
			context.log('Front End Ninja');
		});

		// route(verb, path, callback)
		this.get('#/projects/:projectId', function () {
			var projectId = this.params['projectId'];
			console.debug("New project route selected");
		});

		this.get('#/about', function () {
			console.debug("About selected");
		});

		/*		Debug events for sammy - For future expansion in this course
		 this.bind('run', function() {
		 console.log("I got run");
		 });

		 this.bind('unload', function() {
		 console.log("I got unloaded");
		 });

		 this.bind('route-found', function() {
		 console.log("I found the route");
		 });

		 this.bind('event-context-before', function() {
		 console.log("Event context before routing");
		 });

		 this.bind('event-context-after', function() {
		 console.log("Event context after routing");
		 });

		 this.bind('changed', function() {
		 console.log("route changed");
		 });

		 this.bind('error', function() {
		 console.log("Error in routing");
		 });

		 this.bind('check-form-submission', function() {
		 console.log("Form submission");
		 });

		 this.bind('redirect', function() {
		 console.log("I got redirect");
		 });

		 this.bind('location-changed', function() {
		 console.log("location changed");
		 });
		 this.bind('lookup-route', function() {
		 console.log("I got looked up");
		 });

		 this.bind('run-route', function() {
		 console.log("I got routed");
		 });*/
	});

	$(function (context) {
		app.run('#/');
	});


})(jQuery);