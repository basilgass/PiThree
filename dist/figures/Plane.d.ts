import { AbstractFigure, IFigureAppearance } from './AbstractFigure';
import * as THREE from 'three';
interface IPlaneShape {
    rotate: number;
    width: number;
    height: number;
}
export interface IPlaneConfig {
    shape?: IPlaneShape;
    through?: {
        A: THREE.Vector3;
        B: THREE.Vector3;
        C: THREE.Vector3;
    };
    fromLine?: {
        line: {
            A: THREE.Vector3;
            direction: THREE.Vector3;
        };
        point: THREE.Vector3;
    };
    equation?: string;
    appearance?: IFigureAppearance;
}
export declare class Plane extends AbstractFigure {
    #private;
    constructor(scene: THREE.Scene, name: string, config: IPlaneConfig);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get math(): THREE.Plane;
    computed(): void;
}
export {};
