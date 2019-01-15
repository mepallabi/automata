// let tuple = {
//   states: ['q1', 'q2'],
//   alphabets: ['1', '0'],
//   delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
//   'start-state': 'q1',
//   'final-states': ['q2']
// };

class DFA {
  constructor(tuple) {
    this.tuple = tuple;
  }

  getNextState(state,alphabet){
    return this.tuple.delta[state][alphabet];
  }

  doesAccept(message) {
    const alphabets = message.split('');
    const final = alphabets.reduce(this.getNextState.bind(this), this.tuple.startState);
    return this.tuple.finalState.includes(final);
  }
}
module.exports = DFA;
