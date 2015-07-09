var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function ScoreBoard() {
            // PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 5;
            this.livesLabel = new createjs.Text("LIVES:", "50px Consolas", "#BFFF00");
            this.scoreLabel = new createjs.Text("YOUR SCORE:", "50px Consolas", "#BFFF00");
            this.scoreLabel.x = 350;
            stage.addChild(this.livesLabel);
            stage.addChild(this.scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
