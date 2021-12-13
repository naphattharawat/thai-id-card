const cases = require("jest-in-case");
const thaiIdCard = require("../dist/index.min.js");

cases(
    "verify: valid ids",
    ({ id }) => {
        expect(thaiIdCard.verify(id)).toBe(true);
    },
    [{ name: "correct pattern", id: "1112034563562" }]
);

cases(
    "verify: invalid ids",
    ({ id }) => {
        expect(thaiIdCard.verify(id)).toBe(false);
    },
    [
        { name: "wrong pattern", id: "1101700230705" },
        { name: "less than 13 characters", id: "110170023073" },
        { name: "mixed characters", id: "11017002070d3" },
        { name: "mixed characters", id: "rytege54fsfsf" },
        { name: "just 0", id: "0" },
        { name: "special character", id: "-" },
        { name: "blank character", id: "" },
        { name: "null", id: "" },
        { name: "only text characters", id: "blablabla" },
    ]
);

test("generate and verify", () => {
    expect(thaiIdCard.verify(thaiIdCard.generate())).toBe(true);
});
