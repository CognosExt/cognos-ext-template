define([], function() {
  'use strict';

  var HelloWorld = function() {
    /**
		 * Called by the AppController whenever this view is created
		 *
		 * @public
		 * @returns {Promise} promise resolved to the root DOM element for this view.
		 */
    (this.isVisible = function(context, target) {
      return target.options[0].type === 'report';
    }),
      /**
		 * Called by the AppController whenever this view is destroyed
		 *
		 * @public
		 */
      (this.execute = function(context, target) {
        alert('Hello World');
      });
  };

  return HelloWorld;
});
