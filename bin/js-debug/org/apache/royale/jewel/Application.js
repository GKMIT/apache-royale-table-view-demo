/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/Application.as
 * org.apache.royale.jewel.Application
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.Application');
/* Royale Dependency List: org.apache.royale.core.AllCSSValuesImpl,org.apache.royale.core.IApplicationView,org.apache.royale.core.IBead,org.apache.royale.core.IChild,org.apache.royale.core.IUIBase,org.apache.royale.core.IValuesImpl,org.apache.royale.core.UIBase,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.utils.MXMLDataInterpreter,org.apache.royale.utils.Timer,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.ApplicationBase');
goog.require('org.apache.royale.core.IParent');
goog.require('org.apache.royale.core.IPopUpHost');
goog.require('org.apache.royale.core.IPopUpHostParent');
goog.require('org.apache.royale.core.IInitialViewApplication');
goog.require('org.apache.royale.core.IRenderedObject');
goog.require('org.apache.royale.core.IStrand');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.core.ApplicationBase}
 * @implements {org.apache.royale.core.IStrand}
 * @implements {org.apache.royale.core.IParent}
 * @implements {org.apache.royale.events.IEventDispatcher}
 * @implements {org.apache.royale.core.IInitialViewApplication}
 * @implements {org.apache.royale.core.IPopUpHost}
 * @implements {org.apache.royale.core.IPopUpHostParent}
 * @implements {org.apache.royale.core.IRenderedObject}
 */
org.apache.royale.jewel.Application = function() {
  org.apache.royale.jewel.Application.base(this, 'constructor');
  
  this.element = document.getElementsByTagName('body')[0];
  this.element.className = 'Application';
  this.valuesImpl = new org.apache.royale.core.AllCSSValuesImpl();
};
goog.inherits(org.apache.royale.jewel.Application, org.apache.royale.core.ApplicationBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.jewel.Application', org.apache.royale.jewel.Application);


/**
 * @protected
 * @type {org.apache.royale.core.IParent}
 */
org.apache.royale.jewel.Application.prototype.instanceParent = null;


/**
 * @private
 * @type {org.apache.royale.core.IApplicationView}
 */
org.apache.royale.jewel.Application.prototype.org_apache_royale_jewel_Application__initialView;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.jewel.Application.prototype.org_apache_royale_jewel_Application__model;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.jewel.Application.prototype.org_apache_royale_jewel_Application__controller;


/**
 *  An method called by the compiler's generated
 *  code to kick off the setting of MXML attribute
 *  values and instantiation of child tags.
 *
 *  The call has to be made in the generated code
 *  in order to ensure that the constructors have
 *  completed first.
 *
 *  @asparam data The encoded data representing the
 *  MXML attributes.
 *
 *  @see org.apache.royale.utils.MXMLDataInterpreter
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {Array} data
 */
org.apache.royale.jewel.Application.prototype.generateMXMLAttributes = function(data) {
  var /** @type {number} */ propCount = (data[0]) >> 0;
  var /** @type {number} */ n = (data.length) >> 0;
  for (var /** @type {number} */ i = 1; i < n; i += 3) {
    if (data[i] == "initialView") {
      var /** @type {Array} */ initialViewArray = data.splice(i, 3);
      var /** @type {number} */ offset = ((propCount - 1) * 3 + 1) >> 0;
      data.splice(offset, 0, initialViewArray[0], initialViewArray[1], initialViewArray[2]);
    }
  }
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @export
 * @type {Array}
 */
org.apache.royale.jewel.Application.prototype.beads;


/**
 *  @copy org.apache.royale.core.IParent#addElement()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 *  @royaleignorecoercion HTMLElement
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.jewel.Application.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.appendChild(c.positioner);
  c.addedToParent();
};


/**
 *  @copy org.apache.royale.core.IParent#addElementAt()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.jewel.Application.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  var /** @type {NodeList} */ children = this.internalChildren();
  if (index >= children.length)
    this.addElement(c); else {
    this.element.insertBefore(c.positioner, children[index]);
    c.addedToParent();
  }
};


/**
 *  @copy org.apache.royale.core.IParent#getElementAt()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.jewel.Application.prototype.getElementAt = function(index) {
  
  var /** @type {NodeList} */ children = this.internalChildren();
  return children[index].royale_wrapper;
};


/**
 *  @copy org.apache.royale.core.IParent#getElementIndex()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.jewel.Application.prototype.getElementIndex = function(c) {
  
  var /** @type {NodeList} */ children = this.internalChildren();
  var /** @type {number} */ n = (children.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (children[i] == c.element)
      return i;
  }
  return -1;
};


/**
 *  @copy org.apache.royale.core.IParent#removeElement()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 *  @royaleignorecoercion HTMLElement
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.jewel.Application.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.removeChild(c.element);
};


/**
 * @asreturn {Object} The array of children.
 * @protected
 * @return {NodeList}
 */
org.apache.royale.jewel.Application.prototype.internalChildren = function() {
  return this.element.childNodes;
};


/**
 * @protected
 * @type {org.apache.royale.utils.Timer}
 */
org.apache.royale.jewel.Application.prototype.startupTimer;


/**
 * @royaleignorecoercion org.apache.royale.core.IBead
 * @export
 */
org.apache.royale.jewel.Application.prototype.start = function() {
  if (org.apache.royale.utils.Language.is(this.model, org.apache.royale.core.IBead))
    this.addBead(this.model);
  if (org.apache.royale.utils.Language.is(this.controller, org.apache.royale.core.IBead))
    this.addBead(this.controller);
  for (var /** @type {number} */ index in this.beads) {
    this.addBead(this.beads[index]);
  }
  this.dispatchEvent(new org.apache.royale.events.Event("beadsAdded"));
  if (this.dispatchEvent(new org.apache.royale.events.Event("preinitialize", false, true)))
    this.initialize(); else {
    this.startupTimer = new org.apache.royale.utils.Timer(34, 0);
    this.startupTimer.addEventListener("timer", org.apache.royale.utils.Language.closure(this.handleStartupTimer, this, 'handleStartupTimer'));
    this.startupTimer.start();
  }
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.jewel.Application.prototype.handleStartupTimer = function(event) {
  if (this.dispatchEvent(new org.apache.royale.events.Event("preinitialize", false, true))) {
    this.startupTimer.stop();
    this.initialize();
  }
};


/**
 * @royaleignorecoercion org.apache.royale.core.IBead
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @protected
 */
org.apache.royale.jewel.Application.prototype.initialize = function() {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLInstances(this, this.instanceParent, this.MXMLDescriptor);
  this.dispatchEvent('initialize');
  if (this.initialView) {
    this.initialView.applicationModel = this.model;
    this.addElement(this.initialView);
    var /** @type {Object} */ baseView = this.initialView;
    if (!isNaN(baseView.percentWidth) || !isNaN(baseView.percentHeight)) {
      this.element.style.height = window.innerHeight.toString() + 'px';
      this.element.style.width = window.innerWidth.toString() + 'px';
      this.initialView.dispatchEvent('sizeChanged');
    }
    this.dispatchEvent(new org.apache.royale.events.Event("viewChanged"));
  }
  this.dispatchEvent(new org.apache.royale.events.Event("applicationComplete"));
};


org.apache.royale.jewel.Application.prototype.set__valuesImpl = function(value) {
  if (!org.apache.royale.core.ValuesManager["valuesImpl"]) {
    org.apache.royale.core.ValuesManager["valuesImpl"] = value;
    org.apache.royale.core.ValuesManager["valuesImpl"].init(this);
  }
};


org.apache.royale.jewel.Application.prototype.get__initialView = function() {
  return this.org_apache_royale_jewel_Application__initialView;
};


org.apache.royale.jewel.Application.prototype.set__initialView = function(value) {
  this.org_apache_royale_jewel_Application__initialView = value;
};


org.apache.royale.jewel.Application.prototype.get__model = function() {
  return this.org_apache_royale_jewel_Application__model;
};


org.apache.royale.jewel.Application.prototype.set__model = function(value) {
  this.org_apache_royale_jewel_Application__model = value;
};


org.apache.royale.jewel.Application.prototype.get__controller = function() {
  return this.org_apache_royale_jewel_Application__controller;
};


org.apache.royale.jewel.Application.prototype.set__controller = function(value) {
  this.org_apache_royale_jewel_Application__controller = value;
};


org.apache.royale.jewel.Application.prototype.get__popUpParent = function() {
  return this;
};


org.apache.royale.jewel.Application.prototype.get__MXMLDescriptor = function() {
  return null;
};


org.apache.royale.jewel.Application.prototype.get__numElements = function() {
  
  var /** @type {NodeList} */ children = this.internalChildren();
  return (children.length) >> 0;
};


org.apache.royale.jewel.Application.prototype.get__popUpHost = function() {
  return this;
};


Object.defineProperties(org.apache.royale.jewel.Application.prototype, /** @lends {org.apache.royale.jewel.Application.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IValuesImpl} */
valuesImpl: {
set: org.apache.royale.jewel.Application.prototype.set__valuesImpl},
/**
  * @export
  * @type {org.apache.royale.core.IApplicationView} */
initialView: {
get: org.apache.royale.jewel.Application.prototype.get__initialView,
set: org.apache.royale.jewel.Application.prototype.set__initialView},
/**
  * @export
  * @type {Object} */
model: {
get: org.apache.royale.jewel.Application.prototype.get__model,
set: org.apache.royale.jewel.Application.prototype.set__model},
/**
  * @export
  * @type {Object} */
controller: {
get: org.apache.royale.jewel.Application.prototype.get__controller,
set: org.apache.royale.jewel.Application.prototype.set__controller},
/**
  * @export
  * @type {org.apache.royale.core.IPopUpHostParent} */
popUpParent: {
get: org.apache.royale.jewel.Application.prototype.get__popUpParent},
/**
  * @export
  * @type {Array} */
MXMLDescriptor: {
get: org.apache.royale.jewel.Application.prototype.get__MXMLDescriptor},
/**
  * @export
  * @type {number} */
numElements: {
get: org.apache.royale.jewel.Application.prototype.get__numElements},
/**
  * @export
  * @type {org.apache.royale.core.IPopUpHost} */
popUpHost: {
get: org.apache.royale.jewel.Application.prototype.get__popUpHost}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.Application.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Application', qName: 'org.apache.royale.jewel.Application', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand, org.apache.royale.core.IParent, org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IInitialViewApplication, org.apache.royale.core.IPopUpHost, org.apache.royale.core.IPopUpHostParent, org.apache.royale.core.IRenderedObject] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.Application.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'beads': { type: 'Array', get_set: function (/** org.apache.royale.jewel.Application */ inst, /** * */ v) {return v !== undefined ? inst.beads = v : inst.beads;}}
      };
    },
    accessors: function () {
      return {
        'valuesImpl': { type: 'org.apache.royale.core.IValuesImpl', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.Application'},
        'initialView': { type: 'org.apache.royale.core.IApplicationView', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.Application'},
        'model': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.Application', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'controller': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.Application', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'popUpParent': { type: 'org.apache.royale.core.IPopUpHostParent', access: 'readonly', declaredBy: 'org.apache.royale.jewel.Application'},
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.jewel.Application'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.jewel.Application'},
        'popUpHost': { type: 'org.apache.royale.core.IPopUpHost', access: 'readonly', declaredBy: 'org.apache.royale.jewel.Application'}
      };
    },
    methods: function () {
      return {
        'Application': { type: '', declaredBy: 'org.apache.royale.jewel.Application'},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.jewel.Application', parameters: function () { return [ { index: 1, type: 'Array', optional: false } ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.jewel.Application', parameters: function () { return [ { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.jewel.Application', parameters: function () { return [ { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'int', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.jewel.Application', parameters: function () { return [ { index: 1, type: 'int', optional: false } ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.jewel.Application', parameters: function () { return [ { index: 1, type: 'org.apache.royale.core.IChild', optional: false } ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.jewel.Application', parameters: function () { return [ { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'start': { type: 'void', declaredBy: 'org.apache.royale.jewel.Application'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.jewel.Application.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
