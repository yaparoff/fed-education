export interface Drivable {

    // Запускает зажигание автомобиля, чтобы он мог двигаться.
    start(): void;
    
    // Пытается проехать расстояние. Возвращает true или false в зависимости от того, была ли поездка успешна.
    drive(distance: number): boolean;
    
    // Получить расстояние от начала.
    getPosition(): number;
}

export interface Flyable {
    start(): void;
    fly(height: number): boolean;
    putTransport(position: any): boolean;    
}
