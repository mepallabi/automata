class Tuple {
  constructor(states,alphabets,delta,startState,finalState){
    this.states = states;
    this.alphabets = alphabets;
    this.delta = delta;
    this.startState = startState;
    this.finalState = finalState;
  }
}
module.exports = Tuple;
