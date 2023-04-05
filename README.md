# [battlesquares](https://seanstephenbrian.github.io/battleship/)

**battlesquares** is a 'battleship'-inspired web game exemplifying key concepts in OOP and test-driven 
development.

javascript objects -- including a top-level `Game` object, as well as `Gameboard`, `Player`, `Ship`, 
and `Square` objects -- contain the game state. game controller and DOM-manipulation scripts manage the 
flow of the game, updating the game state and rendering the current view to the page as the game 
progresses. the computer opponent has basic 'intelligence', knowing to try all surrounding squares once 
it gets a hit.

i used jest to unit test the various game objects before building out the user interface.