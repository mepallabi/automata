const Tuple = require("../src/tuple");
const DFA = require("../src/dfa");
const chai = require("chai");
const assert = chai.assert;

describe("DFA - Odd number of zeroes", () => {
  const states = ['q1', 'q2'];
  const alphabets = ['0', '1'];
  const delta = { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } };
  const startState = 'q1';
  const finalState = ['q2'];
  const tuple = new Tuple(states, alphabets, delta, startState, finalState);
  const machine = new DFA(tuple);
  it("should pass for a single 0", () => {
    assert.isTrue(machine.doesAccept('0'));
  }),
    it("should pass for a 000", () => {
      assert.isTrue(machine.doesAccept('000'));
    }),
    it("should give true for 00000", () => {
      assert.isTrue(machine.doesAccept('00000'));
    }),
    it("should give pass for 10", () => {
      assert.isTrue(machine.doesAccept('10'));
    }),
    it("should give true for 101010", () => {
      assert.isTrue(machine.doesAccept('101010'));
    }),
    it("should pass for 010101", () => {
      assert.isTrue(machine.doesAccept('010101'));
    }),
    it("should give false for 00", () => {
      assert.isFalse(machine.doesAccept('00'));
    }),
    it("should give false 0000", () => {
      assert.isFalse(machine.doesAccept('0000'));
    }),
    it("should give false for 1001", () => {
      assert.isFalse(machine.doesAccept('1001'));
    }),
    it("should give false for 1010", () => {
      assert.isFalse(machine.doesAccept('1010'));
    }),
    it("should give false for 001100", () => {
      assert.isFalse(machine.doesAccept('001100'));
    })
})

describe("DFA - even number of zeroes", () => {
  const states = ['q1', 'q2'];
  const alphabets = ['0', '1'];
  const delta = {
    "q1": {
      "0": "q2",
      "1": "q1"
    },
    "q2": {
      "0": "q1",
      "1": "q2"
    }
  };
  const startState = 'q1';
  const finalState = ['q1'];
  const tuple = new Tuple(states, alphabets, delta, startState, finalState);
  const machine = new DFA(tuple);
  it("should pass for a single 00", () => {
    assert.isTrue(machine.doesAccept('00'));
  }),
    it("should pass for a 0000", () => {
      assert.isTrue(machine.doesAccept('0000'));
    }),
    it("should give pass for 1001", () => {
      assert.isTrue(machine.doesAccept('1001'));
    }),
    it("should give true for 1010", () => {
      assert.isTrue(machine.doesAccept('1010'));
    }),
    it("should pass for 001100", () => {
      assert.isTrue(machine.doesAccept('001100'));
    }),
    it("should give false for 0", () => {
      assert.isFalse(machine.doesAccept('0'));
    }),
    it("should give false 000", () => {
      assert.isFalse(machine.doesAccept('000'));
    }),
    it("should give false for 00000", () => {
      assert.isFalse(machine.doesAccept('00000'));
    }),
    it("should give false for 10", () => {
      assert.isFalse(machine.doesAccept('10'));
    }),
    it("should give false for 101010", () => {
      assert.isFalse(machine.doesAccept('101010'));
    }),
    it("should give false for 010101", () => {
      assert.isFalse(machine.doesAccept('010101'));
    })
})
