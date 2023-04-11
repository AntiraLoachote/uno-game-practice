const { template } = require("@babel/core");
const { re } = require("@babel/core/lib/vendor/import-meta-resolve");

class UnoCard {
  constructor(_name, _centerCards = []) {
    this.centerCards = _centerCards;
    this.name = _name;
    this.cardOnHands = [];
  }

  pickNewCard(cardNo, color) {
    if (this.cardOnHands.length === 3) {
      return undefined;
    } else {
      this.cardOnHands.push({ cardNo, color });
      return this.cardOnHands.length;
    }
  }

  pasteCard() {
    const lastCard = this.centerCards[this.centerCards.length - 1];
    const matchingIndex = this.cardOnHands.findIndex(
      (i) => i.cardNo === lastCard.cardNo || i.color === lastCard.color
    );
    if (matchingIndex == -1) {
      return false;
    } else {
      const removeCard = this.cardOnHands.splice(matchingIndex, 1);
      this.centerCards.push(...removeCard);
      return true;
    }
  }
}

module.exports = UnoCard;
