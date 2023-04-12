# RabbitCard Requirements

Write a class called _RabbitCard_ functions as follows:

## Properties:
- **money** (_A money_): number of money in card
- **stations** (_An array of {name, distance}_): station property is an array type which station a collection of {name, distance} objects. and distance unit be 'kilometer'
  - For example,  has a value [
    { name: "Siam", distance: 10 },
    { name: "Asoke", distance: 40 },
  ];

- **sourceStation** (_A Object of {name, distance}_): station property is an object {name, distance} for set source station when enter door.
  - For example,  has a value 
    { name: "Siam", distance: 10 }

- **pricePerTenKilometer** (_A money_): number of price per 10 kilometers, should be fixed 20 baht per 10 kilometers



## Functions:

- **constructor(_money, _stations)**: 
  - You must assign _money property to money. for setup "money" of Card
  - You must assign _stations property to stations. for setup "stations"
  - Your constructor must initial the "sourceStation" property to an "default" name and "zero" distance in object.
  - Your constructor must initial the "pricePerTenKilometer" follow above properties message


- **setSourceStation(_name)**: No Return, function recevice "_name" should set "sourceStation" from "stations". 

- **enterDoor(_sourceStationName)**: After user enterDoor should set "_sourceStationName" to  "sourceStation" object in class


- **getPrice(_source, _destination)**: Return "price" from a total distance, 
  - A total distance is distance of source station to destination station
  - we have promotion price total distance since 50 kilometers we fixed price at 80 baht
  - calculate "price" from A total distance with "pricePerTenKilometer" 

- **exitDoor(_destinationName)**: Return "total of money" after cut off from cost  
  - money can less than 0  
  - cost from "getPrice" function



## Test Structures

- test('output#1: _constructor_')
- test('output#2: _setSourceStation_')
- test('output#3: _enterDoor process_')
- test('output#4: _getPrice_')
- test('output#5: _extiDoor process_')


## How to run rabbitCard.test
```
npm test rabbitCard.test.js
```