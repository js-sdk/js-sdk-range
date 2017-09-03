/* global describe, it, context */

import * as R from '../src/index.js';

describe("range", () => {
  context("numeric", () => {
    it("empty range.", () => {
      R.range(0, 0).should.be.eql([]);
    });

    it("[0, 1).", () => {
      R.range(0, 1).should.be.eql([0]);
    });

    it("[0, 100)", () => {
      let r = R.range(0, 100);
      r.length.should.be.eql(100);
      (r[r.length - 1]).should.be.eql(99);
    });

    it("[0, 100].", () => {
      let r = R.rangeIncl(0, 100);
      r.length.should.be.eql(101);
      (r[r.length - 1]).should.be.eql(100);
    });

    it("[-10, 0)", () => {
      let r = R.range(-10, 0);
      r.length.should.be.eql(10);
      (r[r.length - 1]).should.be.eql(-1);
    });

    context("steps", () => {
      it("[1..10), 2", () => {
        R.rangeStep(1, 10, 2).length.should.be.eql(5);
      });
    });
  });

  context("decimals", () => {
    it("decimals", () => {
      R.rangeStep(0, 1, 0.1).length.should.be.eql(10);
    });
  });

  context("characters", () => {
    it("['a', 'z']", () => {
      R.rangeChar('a', 'z').length.should.be.eql(26);
    });

    it("['g', 'n']", () => {
      R.rangeChar('g', 'n').length.should.be.eql(8);
    });

    it("['A', 'Z']", () => {
      R.rangeChar('A', 'Z').length.should.be.eql(26);
    });

    it("['0', '9']", () => {
      R.rangeChar('0', '9').length.should.be.eql(10);
    });

    context("fail on char range gap.", () => {
      it("['a', 'Z']", () => {
        R.rangeChar('a', 'Z').length.should.be.eql(0);
      });

      it("['0', 'a']", () => {
        R.rangeChar('0', 'a').length.should.be.eql(0);
      });

      it("['A', 'a']", () => {
        R.rangeChar('A', 'a').length.should.be.eql(0);
      });
    });
  });
});
