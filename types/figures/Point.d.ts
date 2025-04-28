import { AbstractFigure } from './AbstractFigure';
import * as THREE from 'three';
export interface IPointConfig {
    coordinates?: {
        x: number;
        y: number;
        z: number;
    };
    projection?: {
        object: THREE.Vector3;
        target: unknown;
    };
    color?: string;
    size?: number;
}
export declare class Point extends AbstractFigure {
    #private;
    constructor(scene: THREE.Scene, name: string, config: IPointConfig);
    get v3(): THREE.Vector3;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
    get config(): IPointConfig;
    computed(): void;
}
