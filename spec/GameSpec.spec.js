<reference path = "/jssp.js"></reference>
describe("Space Game", function() {
    beforeEach(function() {
      // Set up the DOM elements required for testing
      document.body.innerHTML = `
        <div class="info">
          <p>PLAYER-<span id="name"></span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp SCORE-<span id="score">0</span></p>
        </div>
        <div class="game-window">
          <img id="player" src="ufo.png">
          <div class="robo">
            <div style='left:3vw;'></div>
            <div style='left:11vw;'></div>
            <div style='left:19vw;'></div>
            <div style='left:27vw;'></div>
            <div style='left:35vw;'></div>
            <div style='left:43vw;'></div>
            <div style='left:51vw;'></div>
            <div style='left:59vw;'></div>
            <div style='left:67vw;'></div>
            <div style='left:75vw;'></div>
            <div style='left:83vw;'></div>
            <div style='left:91vw;'></div>
          </div>
        </div>
      `;
    });
  
    it("should reset the game state", function() {
      // Mock user input
      spyOn(window, 'prompt').and.returnValue('Test Player');
  
      // Trigger a keypress event
      var event = new KeyboardEvent('keypress', {
        key: 'r'
      });
      window.dispatchEvent(event);
  
      // Check if the game state is reset
      expect(document.querySelector("#name").innerHTML).toEqual('Test Player');
      expect(document.querySelector("#score").innerHTML).toEqual('0');
      expect(parseInt(document.querySelector("#player").style.top)).toEqual(60);
      expect(parseInt(document.querySelector("#player").style.left)).toEqual(50);
      document.querySelectorAll(".robo > div").forEach(function(robot) {
        expect(parseInt(robot.style.top)).toEqual(9);
      });
    }); 
  });
  