"use strict";

goog.provide('tutao.entity.monitor.ReadCounterReturn');

/**
 * @constructor
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.monitor.ReadCounterReturn = function(data) {
  if (data) {
    this.__format = data._format;
    this._value = data.value;
  } else {
    this.__format = "0";
    this._value = null;
  }
  this._entityHelper = new tutao.entity.EntityHelper(this);
  this.prototype = tutao.entity.monitor.ReadCounterReturn.prototype;
};

/**
 * The version of the model this type belongs to.
 * @const
 */
tutao.entity.monitor.ReadCounterReturn.MODEL_VERSION = '1';

/**
 * The url path to the resource.
 * @const
 */
tutao.entity.monitor.ReadCounterReturn.PATH = '/rest/monitor/readcounterservice';

/**
 * The encrypted flag.
 * @const
 */
tutao.entity.monitor.ReadCounterReturn.prototype.ENCRYPTED = false;

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.monitor.ReadCounterReturn.prototype.toJsonData = function() {
  return {
    _format: this.__format, 
    value: this._value
  };
};

/**
 * The id of the ReadCounterReturn type.
 */
tutao.entity.monitor.ReadCounterReturn.prototype.TYPE_ID = 16;

/**
 * The id of the value attribute.
 */
tutao.entity.monitor.ReadCounterReturn.prototype.VALUE_ATTRIBUTE_ID = 18;

/**
 * Sets the format of this ReadCounterReturn.
 * @param {string} format The format of this ReadCounterReturn.
 */
tutao.entity.monitor.ReadCounterReturn.prototype.setFormat = function(format) {
  this.__format = format;
  return this;
};

/**
 * Provides the format of this ReadCounterReturn.
 * @return {string} The format of this ReadCounterReturn.
 */
tutao.entity.monitor.ReadCounterReturn.prototype.getFormat = function() {
  return this.__format;
};

/**
 * Sets the value of this ReadCounterReturn.
 * @param {string} value The value of this ReadCounterReturn.
 */
tutao.entity.monitor.ReadCounterReturn.prototype.setValue = function(value) {
  this._value = value;
  return this;
};

/**
 * Provides the value of this ReadCounterReturn.
 * @return {string} The value of this ReadCounterReturn.
 */
tutao.entity.monitor.ReadCounterReturn.prototype.getValue = function() {
  return this._value;
};

/**
 * Loads from the service.
 * @param {tutao.entity.monitor.ReadCounterData} entity The entity to send to the service.
 * @param {Object.<string, string>} parameters The parameters to send to the service.
 * @param {?Object.<string, string>} headers The headers to send to the service. If null, the default authentication data is used.
 * @return {Promise.<tutao.entity.monitor.ReadCounterReturn>} Resolves to ReadCounterReturn or an exception if the loading failed.
 */
tutao.entity.monitor.ReadCounterReturn.load = function(entity, parameters, headers) {
  if (!headers) {
    headers = tutao.entity.EntityHelper.createAuthHeaders();
  }
  parameters["v"] = 1;
  return tutao.locator.entityRestClient.getService(tutao.entity.monitor.ReadCounterReturn, tutao.entity.monitor.ReadCounterReturn.PATH, entity, parameters, headers);
};