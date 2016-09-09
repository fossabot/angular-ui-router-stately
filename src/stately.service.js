/**
 *
 */

(function() {
angular
  .module('stately')
  .factory('Stately', statelyService);

/**
 * @ngdoc service
 *
 * @param {StateService} $state Dependency injected $state instance.
 */
function statelyService($state) {
  var states = $state.get();
  console.debug(angular.toJson(states, true));
}
statelyService.$inject = ['$state'];
})();
