/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IBinding.as
 * org.apache.royale.core.IBinding
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IBinding');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.core.IBinding = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IBinding', org.apache.royale.core.IBinding);
/**  * @type {Object}
 */org.apache.royale.core.IBinding.prototype.destination;
/**  * @type {string}
 */org.apache.royale.core.IBinding.prototype.sourceID;
/**  * @type {string}
 */org.apache.royale.core.IBinding.prototype.sourcePropertyName;
/**  * @type {string}
 */org.apache.royale.core.IBinding.prototype.destinationPropertyName;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IBinding.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBinding', qName: 'org.apache.royale.core.IBinding', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IBinding.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'destination': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.IBinding'},
        'sourceID': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.IBinding'},
        'sourcePropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.IBinding'},
        'destinationPropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.IBinding'}
      };
    },
    methods: function () {return {};}
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.IBinding.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
