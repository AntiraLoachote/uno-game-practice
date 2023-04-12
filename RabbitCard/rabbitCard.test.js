const RabbitCard = require("./rabbitCard.js");

test("output#1: constructor", () => {
  const card = new RabbitCard();
  expect(card.money).toBe(0);
  expect(card.stations).toStrictEqual([]);

  const stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card2 = new RabbitCard(100, stations);
  expect(card2.money).toBe(100);
  expect(card2.stations).toStrictEqual(stations);
});

test("output#2.1: add source station", () => {
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(100, _stations);
  expect(card.money).toBe(100);

  card.setSourceStation("Siam");
  expect(card.sourceStation).toStrictEqual({ name: "Siam", distance: 10 });
});

test("output#2.2: cannot add source station when name not match", () => {
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(100, _stations);
  expect(card.money).toBe(100);

  card.setSourceStation("MBK");
  expect(card.sourceStation).toStrictEqual({
    distance: 0,
    name: "default",
  });
});

test("output#3.1: cannot passed enter door when card no money ", () => {
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(0, _stations);
  expect(card.money).toBe(0);

  expect(card.enterDoor()).toStrictEqual(false);
});

test("output#3.2: cannot passed enter door for overspend card", () => {
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(-20, _stations);
  expect(card.money).toBe(-20);

  expect(card.enterDoor()).toStrictEqual(false);
});
test("output#3.3: test enterDoor function should passed enter door and set source station", () => {
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(100, _stations);
  expect(card.money).toBe(100);

  source_name = "Siam";
  passed_status = card.enterDoor(source_name);
  expect(passed_status).toBe(true);

  expect(card.sourceStation).toStrictEqual({ name: "Siam", distance: 10 });
});

test("output#4.1: test getPrice from source to destination station 1", () => {
  // set stations
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(20, _stations);

  const expected_price = card.getPrice("Siam", "Asoke");

  expect(expected_price).toBe(60);
});

test("output#4.2: test getPrice from source to destination station 2", () => {
  /// set stations
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Nana", distance: 40 },
    { name: "Asoke", distance: 60 },
    { name: "Bitech", distance: 75 },
  ];
  const card = new RabbitCard(20, _stations);

  const expected_price = card.getPrice("Nana", "Bitech");
  expect(expected_price).toBe(70);
});

test("output#4.3: test getPrice if distance reach 50 km should fixed price at 80", () => {
  /// set stations
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Nana", distance: 40 },
    { name: "Asoke", distance: 60 },
    { name: "Bitech", distance: 75 },
  ];
  const card = new RabbitCard(20, _stations);

  const expected_price = card.getPrice("Siam", "Asoke");
  expect(expected_price).toBe(80);
});

test("output#5.1: test failed to extiDoor when cost more than money", () => {
  // set money on card
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(20, _stations);
  expect(card.money).toBe(20);

  // set enter door at source station
  card.enterDoor("Siam");
  expect(card.sourceStation).toStrictEqual({ name: "Siam", distance: 10 });

  const predict_money = card.exitDoor("Asoke");
  expect(predict_money).toBe(-40);
});

test("output#5.2: test passed extiDoor should reduce money by price and return total money", () => {
  // set money on card
  const _stations = [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];
  const card = new RabbitCard(200, _stations);
  expect(card.money).toBe(200);

  // set enter door at source station
  card.enterDoor("Siam");
  expect(card.sourceStation).toStrictEqual({ name: "Siam", distance: 10 });

  card.exitDoor("Asoke");
  expect(card.money).toBe(140);
});
