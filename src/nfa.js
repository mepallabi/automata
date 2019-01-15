class NFA {
  constructor(tuple) {
    this.tuple = tuple;
  }

  hasEpsilon(state){
    return this.tuple.delta[state] && this.tuple.delta[state]['e'];
  }

  getEpsilonStates(state,allStates = [state]){
    if(!this.hasEpsilon(state)) return [state];
    const eStates = this.tuple.delta[state]['e'] || [];
    const newEStates = eStates.filter(el=> !allStates.includes(el));
    allStates = allStates.concat(newEStates);
    if (newEStates.some(this.hasEpsilon.bind(this))){
      return newEStates.flatMap(e => this.getEpsilonStates(e, allStates));
    }
    return allStates;
  }

  getState(state,alphabet){
    return this.tuple.delta[state] ? this.tuple.delta[state][alphabet] : [];
  }

  getNextStates(laststates, alphabet) {
    const filteredStates = laststates.flatMap(st => this.getState.call(this,st,alphabet));
    return filteredStates.flatMap(st => this.getEpsilonStates.call(this, st));
  }

  isAnyFinal(final){
    return final.some(st => this.tuple.finalState.includes(st));
  }

  doesAccept(message) {
    const alphabets = message.split('');
    const eStates = this.getEpsilonStates(this.tuple.startState);
    
    if (alphabets.length == 0) {
      return this.isAnyFinal(eStates);
    }
    const final = alphabets.reduce(this.getNextStates.bind(this), eStates);
    return this.isAnyFinal(final);
  }
}
module.exports = NFA;
