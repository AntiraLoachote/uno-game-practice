const UnoCard = require("./unoCard.js");

test("output#1: constructor", () => {
  const pack = new UnoCard("Pan", []);

  expect(pack.centerCards).toStrictEqual([]);
  expect(pack.cardOnHands).toHaveLength(0);
  expect(pack.name).toStrictEqual("Pan");
});

test("output#2: constructor and add centerCards", () => {
  const _centerCards = [{ cardNo: 1, color: "red" }];
  const pack = new UnoCard("Pan", _centerCards);
  expect(pack.centerCards).toStrictEqual([{ cardNo: 1, color: "red" }]);
  expect(pack.cardOnHands).toHaveLength(0);
  expect(pack.name).toStrictEqual("Pan");
});

test("output#3: pick a new card should return length of cardOnHands", () => {
  const pack = new UnoCard();

  expect(pack.centerCards).toStrictEqual([]);
  expect(pack.cardOnHands).toHaveLength(0);

  expect(pack.pickNewCard(9, "red")).toBe(1);
  expect(pack.cardOnHands).toStrictEqual([
    {
      cardNo: 9,
      color: "red",
    },
  ]);
});

test("output#4: limit 3 card on hands should not allow pick a new card", () => {
  const pack = new UnoCard();

  expect(pack.centerCards).toStrictEqual([]);
  expect(pack.cardOnHands).toHaveLength(0);

  pack.pickNewCard(1, "green");
  pack.pickNewCard(2, "blue");
  pack.pickNewCard(3, "red");
  expect(pack.pickNewCard(4, "red")).toBe(undefined);
  expect(pack.cardOnHands).toHaveLength(3);
});

test("output#5: paste matching card", () => {
  const _centerCards = [
    { cardNo: 1, color: "red" },
    { cardNo: 2, color: "red" },
  ];
  const pack = new UnoCard("Pan", _centerCards);

  expect(pack.cardOnHands).toHaveLength(0);

  pack.pickNewCard(1, "green");
  pack.pickNewCard(2, "blue");
  pack.pickNewCard(3, "red");

  expect(pack.pasteCard()).toBe(true);
  expect(pack.cardOnHands).toHaveLength(2);
  expect(pack.cardOnHands).toStrictEqual([
    {
      cardNo: 1,
      color: "green",
    },
    {
      cardNo: 3,
      color: "red",
    },
  ]);

  expect(pack.centerCards).toStrictEqual([
    { cardNo: 1, color: "red" },
    { cardNo: 2, color: "red" },
    { cardNo: 2, color: "blue" },
  ]);
});

test("output#6: cannot paste when card not match", () => {
  const _centerCards = [
    { cardNo: 1, color: "red" },
    { cardNo: 5, color: "red" },
  ];
  const pack = new UnoCard("Pan", _centerCards);

  expect(pack.cardOnHands).toHaveLength(0);

  pack.pickNewCard(1, "green");
  pack.pickNewCard(2, "blue");
  pack.pickNewCard(10, "black");

  expect(pack.pasteCard()).toBe(false);
  expect(pack.cardOnHands).toHaveLength(3);
});
