"use strict";

tutao.provide('tutao.entity.valueencrypted.Aggregated');

/**
 * @constructor
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.valueencrypted.Aggregated = function(parent, data) {
  if (data) {
    this.updateData(parent, data);
  } else {
    this.__id = tutao.entity.EntityHelper.generateAggregateId();
    this._bool = null;
    this._bool_ = null;
    this._bytes = null;
    this._bytes_ = null;
    this._date = null;
    this._date_ = null;
    this._number = null;
    this._number_ = null;
    this._string = null;
    this._string_ = null;
  }
  this._parent = parent;
  this.prototype = tutao.entity.valueencrypted.Aggregated.prototype;
};

/**
 * Updates the data of this entity.
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.valueencrypted.Aggregated.prototype.updateData = function(parent, data) {
  this.__id = data._id;
  this._bool = data.bool;
  this._bool_ = null;
  this._bytes = data.bytes;
  this._bytes_ = null;
  this._date = data.date;
  this._date_ = null;
  this._number = data.number;
  this._number_ = null;
  this._string = data.string;
  this._string_ = null;
};

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.valueencrypted.Aggregated.prototype.toJsonData = function() {
  return {
    _id: this.__id, 
    bool: this._bool, 
    bytes: this._bytes, 
    date: this._date, 
    number: this._number, 
    string: this._string
  };
};

/**
 * Sets the id of this Aggregated.
 * @param {string} id The id of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setId = function(id) {
  this.__id = id;
  return this;
};

/**
 * Provides the id of this Aggregated.
 * @return {string} The id of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getId = function() {
  return this.__id;
};

/**
 * Sets the bool of this Aggregated.
 * @param {boolean} bool The bool of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setBool = function(bool) {
  var dataToEncrypt = (bool) ? '1' : '0';
  this._bool = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  this._bool_ = bool;
  return this;
};

/**
 * Provides the bool of this Aggregated.
 * @return {boolean} The bool of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getBool = function() {
  if (this._bool_ != null) {
    return this._bool_;
  }
  if (this._bool == "" || !this._parent._entityHelper.getSessionKey()) {
    return false;
  }
  try {
    var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._bool);
    this._bool_ = (value != '0');
    return this._bool_;
  } catch (e) {
    if (e instanceof tutao.crypto.CryptoError) {
      this.getEntityHelper().invalidateSessionKey();
      return false;
    } else {
      throw e;
    }
  }
};

/**
 * Sets the bytes of this Aggregated.
 * @param {string} bytes The bytes of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setBytes = function(bytes) {
  var dataToEncrypt = bytes;
  this._bytes = tutao.locator.aesCrypter.encryptBytes(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  this._bytes_ = bytes;
  return this;
};

/**
 * Provides the bytes of this Aggregated.
 * @return {string} The bytes of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getBytes = function() {
  if (this._bytes_ != null) {
    return this._bytes_;
  }
  if (this._bytes == "" || !this._parent._entityHelper.getSessionKey()) {
    return "";
  }
  try {
    var value = tutao.locator.aesCrypter.decryptBytes(this._parent._entityHelper.getSessionKey(), this._bytes);
    this._bytes_ = value;
    return value;
  } catch (e) {
    if (e instanceof tutao.crypto.CryptoError) {
      this.getEntityHelper().invalidateSessionKey();
      return "";
    } else {
      throw e;
    }
  }
};

/**
 * Sets the date of this Aggregated.
 * @param {Date} date The date of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setDate = function(date) {
  var dataToEncrypt = String(date.getTime());
  this._date = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  this._date_ = date;
  return this;
};

/**
 * Provides the date of this Aggregated.
 * @return {Date} The date of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getDate = function() {
  if (this._date_ != null) {
    return this._date_;
  }
  if (this._date == "" || !this._parent._entityHelper.getSessionKey()) {
    return new Date(0);
  }
  try {
    var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._date);
    if (isNaN(value)) {
      this.getEntityHelper().invalidateSessionKey();
      return new Date(0);
    }
    this._date_ = new Date(Number(value));
    return this._date_;
  } catch (e) {
    if (e instanceof tutao.crypto.CryptoError) {
      this.getEntityHelper().invalidateSessionKey();
      return new Date(0);
    } else {
      throw e;
    }
  }
};

/**
 * Sets the number of this Aggregated.
 * @param {string} number The number of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setNumber = function(number) {
  var dataToEncrypt = number;
  this._number = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  this._number_ = number;
  return this;
};

/**
 * Provides the number of this Aggregated.
 * @return {string} The number of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getNumber = function() {
  if (this._number_ != null) {
    return this._number_;
  }
  if (this._number == "" || !this._parent._entityHelper.getSessionKey()) {
    return "0";
  }
  try {
    var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._number);
    this._number_ = value;
    return value;
  } catch (e) {
    if (e instanceof tutao.crypto.CryptoError) {
      this.getEntityHelper().invalidateSessionKey();
      return "0";
    } else {
      throw e;
    }
  }
};

/**
 * Sets the string of this Aggregated.
 * @param {string} string The string of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setString = function(string) {
  var dataToEncrypt = string;
  this._string = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  this._string_ = string;
  return this;
};

/**
 * Provides the string of this Aggregated.
 * @return {string} The string of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getString = function() {
  if (this._string_ != null) {
    return this._string_;
  }
  if (this._string == "" || !this._parent._entityHelper.getSessionKey()) {
    return "";
  }
  try {
    var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._string);
    this._string_ = value;
    return value;
  } catch (e) {
    if (e instanceof tutao.crypto.CryptoError) {
      this.getEntityHelper().invalidateSessionKey();
      return "";
    } else {
      throw e;
    }
  }
};
/**
 * Provides the entity helper of this entity.
 * @return {tutao.entity.EntityHelper} The entity helper.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getEntityHelper = function() {
  return this._parent.getEntityHelper();
};
