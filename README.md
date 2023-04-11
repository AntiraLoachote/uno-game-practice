## LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# UnoCard Requirements

Write a class called _UnoCard_ that contains two property called _name_, _centerCards_ and functions as follows:

## Properties:

- **centerCards** (_An array of {cardNo, color}_): The center card property is an array type which card a collection of {cardNo, color} objects.
  - For example, centerCard property has a value [
    { cardNo: 1, color: "red" },
    { cardNo: 2, color: "red" },
  ]
- **name** (_A Name_): name of member on Uno Game should be string.
- **cardOnHands** (_An array of {cardNo, color}_): card on hands for member property is an array type which card a collection of {cardNo, color} objects.
  - For example, centerCard property has a value [
    { cardNo: 1, color: "red" },
    { cardNo: 2, color: "red" },
  ]

## Functions:

- **constructor(_name, _centerCards)**: creates a new LoyaltyPoint object with the provided parameter customerId.
  - You must assign name property to named from "_name".
  - You must assign centerCards property to named from "_centerCards".
  - Your constructor must initial the "cardOnHands" property to an empty array ([]).


- **pickNewCard(cardNo, color)**: Returns the new length of cardOnHands array in case adding a new card into array successfully,  member must has card limit at 3 cards in the cardOnHands array, otherwise should return undefined if member take a limit.

- **pasteCard()**: move your card on hands to center cards if you having some color or cardNo of Card match with last of centerCards array. if moving card successfully should return move status be true, otherwise not match should return move status be false



## Test Structures

- test('output#1: _constructor_')
- test('output#2: _constructor and add centerCards_')
- test('output#3: _pick a new card should return length of cardOnHands_')
- test('output#4: _limit 3 card on hands should not allow pick a new card_')
- test('output#5: _paste matching card_')
- test('output#5: _cannot paste when card not match_')