const Tuple = require("../src/tuple");
const NFA = require("../src/nfa");
const chai = require("chai");
const assert = chai.assert;

describe("state", () => {
  const states = ['q1', 'q3', 'q7', 'q2', 'q5', 'q6', 'q4'];
  const alphabets = ['0', '1'];
  const delta = {
    q1: { 'e': ['q2', 'q5'] },
    q2: { '0': ['q3'] },
    q3: { '1': ['q4'] },
    q4: { '0': ['q3'] },
    q5: { '1': ['q6'] },
    q6: { '0': ['q7'] },
    q7: { '1': ['q6'] }
  };
  const startState = 'q1';
  const finalState = ['q3', 'q6'];
  const tuple = new Tuple(states, alphabets, delta, startState, finalState);
  const machine = new NFA(tuple);

  it("should pass for a single 0", () => {
    assert.isTrue(machine.doesAccept('0'));
  }),
    it("should pass for 010", () => {
      assert.isTrue(machine.doesAccept('010'));
    }),
    it("should pass for 01010", () => {
      assert.isTrue(machine.doesAccept('01010'));
    }),
    it("should pass for a single 1", () => {
      assert.isTrue(machine.doesAccept('1'));
    }),
    it("should pass for 101", () => {
      assert.isTrue(machine.doesAccept('101'));
    }),
    it("should pass for 10101", () => {
      assert.isTrue(machine.doesAccept('10101'));
    }),

    it("should give false for empty string", () => {
      assert.isFalse(machine.doesAccept(""));
    }),
    it("should give false for 10", () => {
      assert.isFalse(machine.doesAccept('10'));
    }),
    it("should give false 01", () => {
      assert.isFalse(machine.doesAccept('01'));
    }),
    it("should give false for 00", () => {
      assert.isFalse(machine.doesAccept('00'));
    }),
    it("should give false for 001", () => {
      assert.isFalse(machine.doesAccept('001'));
    }),
    it("should give false for 100", () => {
      assert.isFalse(machine.doesAccept('100'));
    }),
    it("should give false 1100", () => {
      assert.isFalse(machine.doesAccept('1100'));
    })
})
