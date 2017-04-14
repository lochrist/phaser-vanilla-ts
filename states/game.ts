export class Game extends Phaser.State {
    constructor() {
        super();
    }

    create() {
        let text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'This MY game', {
            font: '42px Arial', fill: '#ffffff', align: 'center'
        });
        text.anchor.set(0.5);

        this.input.onDown.add(this.endGame, this);
    }

    update() {

    }

    endGame() {
        this.game.state.start('gameover');
    }
}