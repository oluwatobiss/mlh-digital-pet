# Digital Pet

A simple digital pet simulator built with JavaScript and Node.js. Care for your virtual pet by feeding it, playing with it, and managing its hunger and happiness levels over time.

## Features

- Create and name your pet
- Feed your pet to reduce hunger and boost happiness
- Play with your pet to increase happiness (but it also increases hunger)
- Time passes with each "tick," gradually increasing hunger and decreasing happiness
- Check your pet's status to see its current mood, hunger, and happiness levels

## How to Play

1. **Create a Pet**: Instantiate a new `Pet` object with a name.
2. **Interact**:
   - Use `feed()` to decrease hunger by 20 and increase happiness by 10.
   - Use `play()` to increase happiness by 20 and hunger by 10.
   - Call `tick()` to simulate the passage of time, increasing hunger by 5 and decreasing happiness by 5.
3. **Monitor Status**: Use `getStatus()` to view your pet's mood, which is determined by happiness and hunger levels:
   - Delighted: Happiness > 70
   - Sad: Happiness < 30
   - Hungry: Hunger > 70
   - Neutral: Otherwise
4. **Goal**: Keep your pet happy and fed! If hunger reaches 100 or happiness reaches 0, your pet may become unhappy.

The included `index.js` demonstrates a sample interaction with a pet named "Bella."

## How to Run

1. Ensure you have Node.js installed (version 14 or higher recommended).
2. Clone or download the project files.
3. Open a terminal in the project directory (`digital-pet`).
4. Run the app with:
   ```
   node index.js
   ```
5. View the console output to see the pet's status and interactions.

## Project Structure

- `index.js`: Main entry point demonstrating pet interactions.
- `pet.js`: Contains the `Pet` class with all pet logic.
- `package.json`: Project configuration for Node.js.

## Requirements

- Node.js (with ES module support)

## License

MIT License

## Contributing

Feel free to fork and contribute improvements, such as adding more features (e.g., age, health) or a graphical interface.
