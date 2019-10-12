var thaiIdCard = require('../dist/index.min.js');
test("Case 1: Valid ID Correct pattern", () => {
    expect(thaiIdCard.verify("1112034563562")).toBe(true);
});

test("Case 2: Invalid ID Wrong pattern", () => {
    expect(thaiIdCard.verify("1101700230705")).toBe(false);
});

test("Case 3: Invalid ID Less than 13 character", () => {
    expect(thaiIdCard.verify("110170023073")).toBe(false);
});

test("Case 4: Invalid ID Mixed character ", () => {
    expect(thaiIdCard.verify("11017002070d3")).toBe(false);
});

test("Case 5: Invalid ID Mixed character", () => {
    expect(thaiIdCard.verify("rytege54fsfsf")).toBe(false);
});

test("Case 6: Invalid ID Just 0", () => {
    expect(thaiIdCard.verify("0")).toBe(false);
});

test("Case 7: Invalid ID Special character", () => {
    expect(thaiIdCard.verify("-")).toBe(false);
});

test("Case 8: Invalid ID Blank character", () => {
    expect(thaiIdCard.verify("")).toBe(false);
});

test("Case 9: Invalid ID NULL", () => {
    expect(thaiIdCard.verify(null)).toBe(false);
});

test("Case 10: Invalid ID Only text character", () => {
    expect(thaiIdCard.verify("blablabla")).toBe(false);
});