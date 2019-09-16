/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/layout/ILayoutStyleProperties.as
 * org.apache.royale.core.layout.ILayoutStyleProperties
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.layout.ILayoutStyleProperties');
/* Royale Dependency List: org.apache.royale.core.IUIBase*/

goog.require('org.apache.royale.core.IBeadLayout');



/**
 * @interface
 * @extends {org.apache.royale.core.IBeadLayout}
 */
org.apache.royale.core.layout.ILayoutStyleProperties = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.layout.ILayoutStyleProperties', org.apache.royale.core.layout.ILayoutStyleProperties);
/**
 *  Get the component layout style and apply to if exists
 * 
 *  @asparam component the IUIBase component that host this layout
 *  @asparam cssProperty the style property in css set for the component to retrieve
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.3
 * @export
 * @param {org.apache.royale.core.IUIBase} component
 * @param {string} cssProperty
 */
org.apache.royale.core.layout.ILayoutStyleProperties.prototype.applyStyleToLayout = function(component, cssProperty) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.layout.ILayoutStyleProperties.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ILayoutStyleProperties', qName: 'org.apache.royale.core.layout.ILayoutStyleProperties', kind: 'interface' }], interfaces: [org.apache.royale.core.IBeadLayout] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.layout.ILayoutStyleProperties.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'applyStyleToLayout': { type: 'void', declaredBy: 'org.apache.royale.core.layout.ILayoutStyleProperties', parameters: function () { return [ { index: 1, type: 'org.apache.royale.core.IUIBase', optional: false },{ index: 2, type: 'String', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.layout.ILayoutStyleProperties.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
