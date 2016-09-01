/*
 * This file is responsible for generating a complex state structure for testing.
 * 
 * @author BobChao87
 * @date 2016-09-01
 */

(function() {

module.exports = stateGenerator;

/**
 * @function stateGenerator
 * 
 * @param {number} [states=100] Number of states to generate.
 * @param {string[]} [requiredStates=['alpha', 'omega']] States that must be present.
 * @returns {string} String that is valid AngularJS UI Router code to make this state structure.
 */
function stateGenerator(states, requiredStates) {
  states = states || 100;
  requiredStates = requiredStates || ['alpha', 'omega']; 
  var numStates = 1;
  var stateStructure = {};
  var stateReferences = [stateStructure];
  var stateNames = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (var i = states - requiredStates.length; i > 0; i--) {
    var state = stateNames[Math.floor(Math.random() * 26)];
    var position = Math.floor(Math.random() * numStates);
    stateReferences[position][state] = {};
    stateReferences[numStates] = stateReferences[position][state];
    numStates++;
  }
  requiredStates.forEach(function(state) {
    var position = Math.floor(Math.random() * numStates);
    stateReferences[position][state] = {};
    stateReferences[numStates] = stateReferences[position][state];
    numStates++;
  });
  return JSON.stringify(stateStructure, null, ' ');
}

console.log(stateGenerator(1000, ['alpha', 'beta', 'gamma']));

})();
