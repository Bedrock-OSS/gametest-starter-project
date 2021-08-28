import { Commands, World } from "mojang-minecraft";

World.events.tick.subscribe((tick_event) => {
  let should_trigger = tick_event.currentTick % 100 == 0;
  let player_count = World.getPlayers().length;
  if (should_trigger && player_count > 0) {
    let seconds = tick_event.currentTick % 20;
    Commands.run(`tellraw @a {"rawtext":[{"text":"It has been ${seconds} seconds"}]}`, World.getDimension("overworld"));
  }
});
