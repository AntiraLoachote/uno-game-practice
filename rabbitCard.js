const { template } = require("@babel/core");
const { re } = require("@babel/core/lib/vendor/import-meta-resolve");

class RabbitCard {
  constructor(_money = 0, _stations = []) {
    this.money = _money;
    this.stations = _stations;
    this.sourceStation = { name: "default", distance: 0 };
    this.pricePerTenKilometer = 20;
  }

  setSourceStation(_name) {
    const _sourceStation = this.stations.find(
      (station) => station.name === _name
    );
    if (_sourceStation) {
      this.sourceStation = _sourceStation;
    }
  }

  enterDoor(_sourceStationName) {
    if (this.money > 0) {
      this.setSourceStation(_sourceStationName);
      return true;
    } else {
      return false;
    }
  }

  getPrice(_sourceStationName, _destinationName) {
    const _sourceStation = this.stations.find(
      (station) => station.name === _sourceStationName
    );

    const _destinationStation = this.stations.find(
      (station) => station.name === _destinationName
    );

    const distance = _destinationStation.distance - _sourceStation.distance;

    if (distance >= 50) {
      return 80;
    } else {
      const price = (distance * this.pricePerTenKilometer) / 10;
      return price;
    }
  }

  exitDoor(_destinationName) {
    const cost = this.getPrice(this.sourceStation.name, _destinationName);
    this.money = this.money - cost;
    return this.money;
  }
}

module.exports = RabbitCard;
