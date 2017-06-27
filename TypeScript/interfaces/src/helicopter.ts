import {Flyable} from './interfaces';

class Helicopter implements Flyable {
    private _isRunning: boolean;
    private _height: number;

    constructor() {
        this._isRunning = false;
        this._height = 0;
    }

    public start() {
        this._isRunning = true;
    }

    // взлететь до определенной высоты
    public fly(height: number) {
        if (this._isRunning) {
            this._height += height;
            return true;
        }
        return false;
    }
    
    // совершаем посадку.
    public putTransport(): any {
        this._height = 0;
        this._isRunning = false;
    }
}