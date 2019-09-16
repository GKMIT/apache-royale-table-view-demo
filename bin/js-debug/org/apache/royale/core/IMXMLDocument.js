/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IMXMLDocument.as
 * org.apache.royale.core.IMXMLDocument
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IMXMLDocument');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.core.IMXMLDocument = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IMXMLDocument', org.apache.royale.core.IMXMLDocument);
/**  * @type {Array}
 */org.apache.royale.core.IMXMLDocument.prototype.MXMLDescriptor;
/**
 *  Set the descriptor for this MXML component
 *  
 *  @asparam document The MXML document.
 *  @asparam value The descriptor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} document
 * @param {Array} value
 */
org.apache.royale.core.IMXMLDocument.prototype.setMXMLDescriptor = function(document, value) {
};
/**
 *  @copy org.apache.royale.core.Application#generateMXMLAttributes()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Array} data
 */
org.apache.royale.core.IMXMLDocument.prototype.generateMXMLAttributes = function(data) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IMXMLDocument.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IMXMLDocument', qName: 'org.apache.royale.core.IMXMLDocument', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IMXMLDocument.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.core.IMXMLDocument'}
      };
    },
    methods: function () {
      return {
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.royale.core.IMXMLDocument', parameters: function () { return [ { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Array', optional: false } ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.core.IMXMLDocument', parameters: function () { return [ { index: 1, type: 'Array', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.IMXMLDocument.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
