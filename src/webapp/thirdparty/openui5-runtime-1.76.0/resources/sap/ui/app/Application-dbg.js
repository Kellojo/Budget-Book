/*
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'sap/base/assert',
	'./ApplicationMetadata',
	'sap/ui/core/Component',
	'sap/ui/core/ComponentContainer',
	'sap/ui/model/Model',
	'sap/ui/model/json/JSONModel',
	'jquery.sap.sjax'
], function(assert, ApplicationMetadata, Component, ComponentContainer, Model, JSONModel, jQuery) {
	"use strict";

	/**
	 * Provides a specialization of <code>sap.ui.core.Component</code> which represents a central application.
	 *
	 * @namespace sap.ui.app
	 * @experimental Since 1.11.1. The Application concept is still under construction, so some implementation details can be changed in future.
	 * @deprecated Since 1.15.1, use a {@link sap.ui.core.Component} instead.
	 * @public
	 */

	/**
	 * Creates an application instance, only one instance is allowed (singleton).
	 *
	 * @param {string} [sId]
	 *     Optional ID for the application; generated automatically if no non-empty ID is given.
	 *     <b>Note:</b> this can be omitted, no matter whether <code>mSettings</code> will be given or not
	 * @param {object} [mSettings]
	 *     Initial settings for the new application instance
	 *
	 * @public
	 *
	 * @class Abstract application class. Extend this class to create a central application class.
	 * @extends sap.ui.core.Component
	 * @abstract
	 * @author SAP SE
	 * @version 1.76.0
	 * @alias sap.ui.app.Application
	 * @experimental Since 1.11.1. The Application class is still under construction, so some implementation details can be changed in future.
	 * @deprecated Since 1.15.1. The Component class is enhanced to take care about the Application code.
	 */
	var Application = Component.extend("sap.ui.app.Application", /** @lends sap.ui.app.Application.prototype */ {

		metadata : {
			"abstract": true,
			properties: {
				root : "string",
				config : "any"
			},
			aggregations : {
				rootComponent : {
					type : "sap.ui.core.UIComponent",
					multiple : false
				}
			},
			publicMethods: [
			  "getView"
			],
			deprecated: true
		},

		constructor : function(sId, mSettings) {

			// event handler mappings (compatibility)
			if (this.onError) {
				this.onWindowError = this.onError;
			}
			if (this.onBeforeExit) {
				this.onWindowBeforeUnload = this.onBeforeExit;
			}
			if (this.onExit) {
				this.onWindowUnload = this.onExit;
			}

			Component.apply(this, arguments);

			// existence check (only one instance is allowed!)
			if (sap.ui.getApplication) {
				throw new Error("Only one instance of sap.ui.app.Application is allowed");
			}

			// install shortcut
			sap.ui.getApplication = this._getInstance.bind(this);

			// wait until Core is initialized to create the models & root component
			sap.ui.getCore().attachInit(function() {

				// init the root component
				this._initRootComponent();

				// call the application controller
				this.main();

			}.bind(this));

		},


		/**
		 * Internal function to initialize the root component.
		 *
		 * @private
		 */
		_initRootComponent : function() {
			var oRootComponent = this.createRootComponent();
			// only if a root component exits we load the models and services
			// and place it into a container
			if (oRootComponent) {

				// set the root component
				this.setRootComponent(oRootComponent);

				// place the component
				var oContainer = new ComponentContainer({
					component: oRootComponent
				});
				oContainer.placeAt(this.getRoot() || document.body);
			}
		},


		/**
		 * Creates and returns the root component. Override this method in your application implementation, if you want to override the default creation by metadata.
		 *
		 * @return {sap.ui.core.UIComponent} the root component
		 * @protected
		 */
		createRootComponent : function() {
			var sRootComponent = this.getMetadata().getRootComponent();
			var oRootComponent;
			if (sRootComponent) {
				// create the root component
				oRootComponent = sap.ui.component({
					name: sRootComponent
				});
			}
			return oRootComponent;
		},


		/**
		 * Returns the application root component.
		 *
		 * @return {sap.ui.core.UIComponent} The root component
		 *
		 * @since 1.13.1
		 * @public
		 * @deprecated As of 1.14.
		 */
		getView : function() {
			return this.getRootComponent();
		},


		/**
		 * Returns the application instance.
		 *
		 * return {sap.ui.app.Application} The application instance
		 *
		 * @private
		 */
		_getInstance : function() {
			return this;
		},


		/**
		 * The main method is called when the DOM and UI5 is completely loaded. Override this method in your Application class implementation to execute code which relies on a loaded DOM / UI5.
		 *
		 * @public
		 */
		main : function() {},


		/**
		 * On before exit application hook. Override this method in your Application class implementation, to handle cleanup before the real exit or to prompt a question to the user,
		 * if the application should be exited.
		 *
		 * @return {string} return a string if a prompt should be displayed to the user confirming closing the application (e.g. when the application is not yet saved).
		 * @public
		 */
		onBeforeExit : function() {},


		/**
		 * On exit application hook. Override this method in your Application class implementation, to handle cleanup of the application.
		 *
		 * @public
		 */
		onExit : function() {},


		/**
		 * On error hook. Override this method in your Application class implementation to listen to unhandled errors.
		 *
		 * @param {string} sMessage The error message.
		 * @param {string} sFile The file where the error occurred
		 * @param {number} iLine The line number of the error
		 * @public
		 * @function
		 */
		onError : null, // function(sMessage, sFile, iLine) - function not added directly as it might result in bad stack traces in older browsers


		/**
		 * Sets the configuration model.
		 *
		 * @param {string|object|sap.ui.model.Model} vConfig the configuration model, the configuration object or a URI string to load a JSON configuration file.
		 * @since 1.13.1
		 * @public
		 */
		setConfig : function(vConfig) {
			if (typeof vConfig === "string") {
				var sUri = vConfig;
				vConfig = new JSONModel();
				var oResponse = jQuery.sap.sjax({url: sUri, dataType: 'json'});
				if (oResponse.success) {
					vConfig.setData(oResponse.data);
				} else {
					throw new Error("Could not load config file: " + sUri);
				}
			}
			if (typeof vConfig === "object" && !(vConfig instanceof Model)) {
				vConfig = new JSONModel(vConfig);
			}
			assert(vConfig instanceof Model, "the config property value must be a string, an object or an instance of sap.ui.model.Model");
			this.setProperty("config", vConfig);
		},


		/**
		 * @see sap.ui.core.Component#destroy
		 * @public
		 */
		destroy : function(bSuppressInvalidate) {

			delete sap.ui.getApplication;

			Component.prototype.destroy.apply(this, arguments);
		}


	}, /* Metadata constructor */ ApplicationMetadata);



	return Application;

});
