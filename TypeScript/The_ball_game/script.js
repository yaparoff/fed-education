var Ball = (function () {
    function Ball() {
        this._height = 500;
        this._width = 500;
        this._size = 40;
        this._S = 10;
        this._field = document.querySelector('.container');
        this._ball = document.createElement('div');
        this._field.appendChild(this._ball);
        this._ball.classList.add('ball');
        this._ball.style.width = this._size + 'px';
        this._ball.style.height = this._size + 'px';
        this._ball.style.top = (Math.random() * (this._height - this._size)) + 'px';
        this._ball.style.left = (Math.random() * (this._width - this._size)) + 'px';
        this._ball.direction = Math.random() * 6.28;
        this._pos = this._ball.getBoundingClientRect();
        this._ball.realTop = this._pos.top;
        this._ball.realLeft = this._pos.left;
    }
    Ball.prototype.move = function () {
        this._ball.realTop += Math.sin(this._ball.direction) * this._S;
        this._ball.realLeft += Math.cos(this._ball.direction) * this._S;
        if (this._ball.realTop + this._size > this._height ||
            this._ball.realLeft + this._size > this._width ||
            this._ball.realTop < 0 || this._ball.realLeft < 0) {
            this._ball.direction += Math.PI / 2;
            return this.move();
        }
        this._ball.style.top = this._ball.realTop + "px";
        this._ball.style.left = this._ball.realLeft + "px";
    };
    return Ball;
}());
var ball = new Ball();
setInterval(ball.move.bind(ball), 17);
