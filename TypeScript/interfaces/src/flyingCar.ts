import {Drivable, Flyable} from './interfaces';

class FlyingCar implements Drivable, Flyable {
    private _isRunning: boolean;
    private _distance: number;
    private _height: number;
    private _isCanPut: boolean;
    private _landingPosition: any;

    constructor() {
        this._isRunning = false;
        this._distance = 0;
        this._height = 0;
        this._isCanPut = false;
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

    // совершаем посадку по указанным координатам, если возможно.
    public putTransport(position: any) {
        if(this._isCanPut) {
            this._landingPosition = position;
            return true;
        }
        return false;
    }

    // Получить расстояние от начала.
    public getPosition(): number {
        return this._distance;
    }

}