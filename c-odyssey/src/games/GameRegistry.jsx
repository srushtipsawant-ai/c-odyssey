import RockPaperScissors from "./RockPaperScissors";
import TicTacToe from "./TicTacToe";
import MemoryMatch from "./MemoryMatch";
import NumberGuess from "./NumberGuess";


import ReactionTimer from "./ReactionTimer";

import NumberTap from "./NumberTap";
import ColorMatch from "./ColorMatch";
import MemorySequence from "./MemorySequence";
import PatternMemory from "./PatternMemory";


import Mastermind from "./Mastermind";




const GameRegistry = {


rock: RockPaperScissors,

tictactoe: TicTacToe,

memory: MemoryMatch,

guess: NumberGuess,


reaction: ReactionTimer,



numbertap: NumberTap,

colormatch: ColorMatch,

sequence: MemorySequence,

pattern:PatternMemory,





mastermind:Mastermind,




};


export default GameRegistry;