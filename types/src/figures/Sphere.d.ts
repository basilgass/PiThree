import { AbstractFigure, IFigureAppearance } from './AbstractFigure';
import * as THREE from 'three';
interface ISphereShape {
    segments: {
        width: number;
        height: number;
    };
}
export interface ISphereConfig {
    shape?: ISphereShape;
    centerRadius?: {
        center: THREE.Vector3;
        radius: number;
    };
    appearance?: IFigureAppearance;
}
export declare class Sphere extends AbstractFigure {
    #private;
    constructor(scene: THREE.Scene, name: string, config: ISphereConfig);
    get center(): THREE.Vector3;
    get radius(): number;
    get math(): THREE.Sphere;
    computed(): void;
}
export {};
