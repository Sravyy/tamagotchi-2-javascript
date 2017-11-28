export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happinessLevel = 10;
    this.restLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setAttention() {
      setInterval(() => {
        this.happinessLevel--;
      }, 1000);
    }

    setRest() {
      setInterval(() => {
        this.restLevel--;
      }, 1000);
    }

    dead() {
      if(this.foodLevel <= 0 || this.happinessLevel <= 0 || this.restLevel <= 0)
      {
        return true
      }
      else{
        return false
      }
    }

    feed() {
      this.foodLevel = 10;
      this.happinessLevel = 5;
    }

    play(){
      this.happinessLevel = 10;
    }

    rest(){
      this.rest = 10;
    }




























}
