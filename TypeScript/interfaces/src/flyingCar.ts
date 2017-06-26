import {Drivable, Flyable} from './interfaces';

class FlyingCar implements Drivable, Flyable {
    private _isRunning: boolean;
    private _distance: number;
    private _height: number;

    constructor() {
        this._isRunning = false;
        this._distance = 0;
        this._height = 0;
    }
    public start() {
        this._isRunning = true;
    }

    public drive(distance: number): boolean {
        if (this._isRunning) {
            this._distance += distance;
            return true; 
        }
        return false;
    }
    
    public fly(height: number): boolean {
        if (this._isRunning) {
            this._height += height;
            return true;
        }
        return false;
    }

    public getLandingPosition(): any {

    }

    public getPosition(): number {
        return this._distance;
    }

}