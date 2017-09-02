/* global describe, it */

import { range } from '../index.js';

describe("range", () => {
  it("empty range.", () => {
    range().should.be.eql([]);
  });
});
