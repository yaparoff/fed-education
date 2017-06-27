import {Flyable} from './interfaces';

class Helicopter implements Flyable {
    private _isRunning: boolean;
    private _flyingHeight: number;
    private _isCanPut: boolean;
    private _landingPosition: any;

    constructor() {
        this._isRunning = false;
        this._flyingHeight = 0;
        this._isCanPut = false;
    }

    public start() {
        this._isRunning = true;
    }

    // взлететь до определенной высоты
    public fly(height: number) {
        if (this._isRunning) {
            this._flyingHeight += height;
            return true;
        }
        return false;
    }
    
    // совершаем посадку по указанным координатам, если возможно.
    public putTransport(position: any): boolean {
        if(this._isCanPut) {
            this._landingPosition = position;
            return true;
        }
        return false;
    }
}