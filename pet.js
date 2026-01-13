class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 0; // 0 = full, 100 = starving
    this.happiness = 100; // 0 = sad, 100 = delighted
  }

  // Feed pet to reduce hunger and increase happiness
  feed() {
    this.hunger = Math.max(0, this.hunger - 20); // Set hunger to the larger of 0 or current hunger - 20 (i.e., decrease hunger)
    this.happiness = Math.min(100, this.happiness + 10); // Set happiness to the smaller of 100 or current happiness + 10 (i.e., increase happiness)
    console.log(`${this.name} has been fed!`);
  }

  // Play with pet to increase happiness and hunger
  play() {
    this.happiness = Math.min(100, this.happiness + 20); // Set happiness to the smaller of 100 or current happiness + 20 (i.e., increase happiness)
    this.hunger = Math.min(100, this.hunger + 10); // Set hunger to the smaller of 100 or current hunger + 10 (i.e., increase hunger)
    console.log(`${this.name} had fun playing!`);
  }

  // Time ticks...
  tick() {
    this.hunger = Math.min(100, this.hunger + 5); // Set hunger to the smaller of 100 or current hunger + 5 (i.e., increase hunger)
    this.happiness = Math.max(0, this.happiness - 5); // Set happiness to the larger of 0 or current happiness - 5 (i.e., decrease happiness)
  }

  // Get current mood status of the pet
  getStatus() {
    let mood = "neutral";
    this.happiness > 70 && (mood = "delighted");
    this.happiness < 30 && (mood = "sad");
    this.hunger > 70 && (mood = "hungry");
    return `${this.name} is ${mood}. Hunger: ${this.hunger}/100, Happiness: ${this.happiness}/100`;
  }
}

export default Pet;
