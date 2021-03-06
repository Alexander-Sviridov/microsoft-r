/**
 * ImageClassification
 * service for image classification
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/WebServiceResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebServiceResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ImageClassification) {
      root.ImageClassification = {};
    }
    root.ImageClassification.BatchWebServiceResult = factory(root.ImageClassification.ApiClient, root.ImageClassification.WebServiceResult);
  }
}(this, function(ApiClient, WebServiceResult) {
  'use strict';




  /**
   * The BatchWebServiceResult model module.
   * @module model/BatchWebServiceResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BatchWebServiceResult</code>.
   * @alias module:model/BatchWebServiceResult
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>BatchWebServiceResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchWebServiceResult} obj Optional instance to populate.
   * @return {module:model/BatchWebServiceResult} The populated <code>BatchWebServiceResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('completedItemCount')) {
        obj['completedItemCount'] = ApiClient.convertToType(data['completedItemCount'], 'Number');
      }
      if (data.hasOwnProperty('totalItemCount')) {
        obj['totalItemCount'] = ApiClient.convertToType(data['totalItemCount'], 'Number');
      }
      if (data.hasOwnProperty('parallelCount')) {
        obj['parallelCount'] = ApiClient.convertToType(data['parallelCount'], 'Number');
      }
      if (data.hasOwnProperty('batchExecutionResults')) {
        obj['batchExecutionResults'] = ApiClient.convertToType(data['batchExecutionResults'], [WebServiceResult]);
      }
    }
    return obj;
  }

  /**
   * State of the execution. Can be of the following values:  - Pending: The batch execution was submitted but is not yet scheduled. Ready: The batch execution was submitted and can be executed. InProgress: The batch execution is currently being processed. Complete: The batch execution has been completed.
   * @member {module:model/BatchWebServiceResult.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Number of completed items in this batch operation.
   * @member {Number} completedItemCount
   */
  exports.prototype['completedItemCount'] = undefined;
  /**
   * Number of total items in this batch operation.
   * @member {Number} totalItemCount
   */
  exports.prototype['totalItemCount'] = undefined;
  /**
   * Number of parallel threads that are processing this batch operation.
   * @member {Number} parallelCount
   */
  exports.prototype['parallelCount'] = undefined;
  /**
   * The responses of the individual executions.
   * @member {Array.<module:model/WebServiceResult>} batchExecutionResults
   */
  exports.prototype['batchExecutionResults'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "inProgress"
     * @const
     */
    "inProgress": "inProgress",
    /**
     * value: "ready"
     * @const
     */
    "ready": "ready",
    /**
     * value: "complete"
     * @const
     */
    "complete": "complete"  };


  return exports;
}));


