describe('countUpBy', function() {
  it("counts up to one number by another number", function() {
    expect(countUpBy(5,30)).to.eql("5, 10, 15, 20, 25, 30");
  });

  it("counts up to one number by another number", function() {
    expect(countUpBy(7,50)).to.eql("7, 14, 21, 28, 35, 42, 49");
  });
});

describe('formatArrayToString', function() {
  it("turns an array into a string with spaces after commas", function() {
    expect(formatArrayToString([1,2,3,4])).to.equal("1, 2, 3, 4");
  });
});
