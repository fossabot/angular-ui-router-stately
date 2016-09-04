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
 * @param {number<Integer>} [states=100] Integer number of states to generate.
 * @param {string[]} [requiredStates=['alpha', 'omega']] States that must be present.
 * @return {string} String that is valid AngularJS UI Router code to make this state structure.
 */
function stateGenerator(states, requiredStates) {
  states = Number.isInteger(states) && states > 0 ? states : 100;
  requiredStates = Array.isArray(requiredStates) ? requiredStates : ['alpha', 'omega'];
  var numStates = 1;
  var stateStructure = {};
  var stateReferences = [stateStructure];
  var stateNames = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var state;
  var position;
  for (var i = states - requiredStates.length; i > 0; i--) {
    // Always look up one state, but only assign if it's not an overlap.
    // We do a full reroll to avoid bias and potential filling problems.
    do {
      state = stateNames[Math.floor(Math.random() * 26)];
      position = Math.floor(Math.random() * numStates);
    } while (state in stateReferences[position]);
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
  return stateStringGenerator(stateStructure) + ';';
}

/**
 * @function stateStringGenerator
 *
 * @param {Object} stateStructure Generated structure to convert to string.
 * @param {string} [stateString='$stateProvider\n'] Current set of states thus far.
 * @param {string} [parentState=''] Current parent state for all entities.
 * @return {string} Current set of states after iteration.
 */
function stateStringGenerator(stateStructure, stateString, parentState) {
  stateString = stateString || '$stateProvider';
  parentState = parentState || '';
  var stateNameLong;
  for (var stateName in stateStructure) {
    if (stateStructure.hasOwnProperty(stateName)) {
      stateNameLong = (parentState ? parentState + '.' : '') + stateName;
      stateString += "\n  .state('" + stateNameLong + "', {\n" +
        "    url: '/" + stateName + "',\n" +
        '  })';
      stateString = stateStringGenerator(stateStructure[stateName], stateString, stateNameLong);
    }
  }
  return stateString;
}

console.log(stateGenerator(1000, ['alpha', 'beta', 'gamma']));
})();
