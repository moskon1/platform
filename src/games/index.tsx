import { GameBundle } from "gamba-react-ui-v2";
import React from "react";

export const GAMES: GameBundle[] = [
  {
    id: "slots",
    meta: {
      background: "#5465ff",
      name: "Slots",
      image: "/games/slots.png",
      description: `
        Slots is the quintessential game of luck and anticipation. Spin the reels and match symbols to win, with potential rewards displayed upfront. A fair and exciting game, Slots offers a classic casino experience tailored for digital enjoyment.
      `,
    },
    app: React.lazy(() => import("./Slots")),
  },
  {
    id: "flip",
    meta: {
      name: "Flip",
      description: `
        Flip offers a straightforward yet thrilling gamble: choose Heads or Tails and double your money or lose it all. This simple, high-stakes game tests your luck and decision-making with every flip of the coin.
      `,
      image: "/games/flip.png",
      background: "#ffe694",
    },
    app: React.lazy(() => import("./Flip")),
  },

  {
    id: "plinko",
    meta: {
      background: "#7272ff",
      image: "/games/plinko.png",
      name: "Plinko",
      description: `
        Plinko is played by dropping chips down a pegged board where they randomly fall into slots with varying win amounts. Each drop is a mix of anticipation and strategy, making Plinko an endlessly entertaining game of chance.
        ⚠️ Under development. Results shown might be incorrect. ⚠️
      `,
    },
    app: React.lazy(() => import("./Plinko")),
  },
  {
    id: "crash",
    meta: {
      background: "#de95e8",
      image: "/games/crash.png",
      name: "Crash",
      description: `
      Predict a multiplier target and watch a rocket attempt to reach it. If the rocket crashes before the target, the player loses; if it reaches or exceeds the target, the player wins.
      `,
    },
    app: React.lazy(() => import("./CrashGame")),
  },
];
