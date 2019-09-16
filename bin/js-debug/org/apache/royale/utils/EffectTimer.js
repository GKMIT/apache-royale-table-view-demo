/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/EffectTimer.as
 * org.apache.royale.utils.EffectTimer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.EffectTimer');
/* Royale Dependency List: org.apache.royale.core.ValuesManager,org.apache.royale.events.ValueEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IEffectTimer');



/**
 *  Constructor.
 *
 *  @asparam delay The number of milliseconds
 *  to wait before dispatching the event.
 *  @asparam repeatCount The number of times to dispatch
 *  the event.  If 0, keep dispatching forever.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IEffectTimer}
 */
org.apache.royale.utils.EffectTimer = function() {
  org.apache.royale.utils.EffectTimer.base(this, 'constructor');
  this.org_apache_royale_utils_EffectTimer_interval = (org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "effectTimerInterval")) >> 0;
  
};
goog.inherits(org.apache.royale.utils.EffectTimer, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.EffectTimer', org.apache.royale.utils.EffectTimer);


/**
 * @private
 * @type {number}
 */
org.apache.royale.utils.EffectTimer.prototype.org_apache_royale_utils_EffectTimer_interval = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.utils.EffectTimer.prototype.org_apache_royale_utils_EffectTimer_timerInterval = -1;


/**
 * @export
 * @return {number}
 */
org.apache.royale.utils.EffectTimer.prototype.start = function() {
  
  if (this.org_apache_royale_utils_EffectTimer_timerInterval == -1) {
    this.org_apache_royale_utils_EffectTimer_timerInterval = setInterval(org.apache.royale.utils.Language.closure(this.org_apache_royale_utils_EffectTimer_timerHandler, this, 'timerHandler'), this.org_apache_royale_utils_EffectTimer_interval);
  }
  var /** @type {Date} */ d = new Date();
  return d.getTime();
};


/**
 * @export
 */
org.apache.royale.utils.EffectTimer.prototype.stop = function() {
  
  if (this.org_apache_royale_utils_EffectTimer_timerInterval != -1) {
    clearInterval(this.org_apache_royale_utils_EffectTimer_timerInterval);
    this.org_apache_royale_utils_EffectTimer_timerInterval = -1;
  }
};


/**
 * @private
 */
org.apache.royale.utils.EffectTimer.prototype.org_apache_royale_utils_EffectTimer_timerHandler = function() {
  var /** @type {Date} */ d = new Date();
  this.dispatchEvent(new org.apache.royale.events.ValueEvent('update', d.getTime()));
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.EffectTimer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'EffectTimer', qName: 'org.apache.royale.utils.EffectTimer', kind: 'class' }], interfaces: [org.apache.royale.core.IEffectTimer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.EffectTimer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'EffectTimer': { type: '', declaredBy: 'org.apache.royale.utils.EffectTimer'},
        'start': { type: 'Number', declaredBy: 'org.apache.royale.utils.EffectTimer'},
        'stop': { type: 'void', declaredBy: 'org.apache.royale.utils.EffectTimer'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.utils.EffectTimer.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;