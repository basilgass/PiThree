import { Line2 } from 'three/examples/jsm/Addons.js';
import { AbstractFigure, IFigureAppearance } from './AbstractFigure';
import * as THREE from 'three';
export interface ILineConfig {
    type: 'line' | 'segment' | 'vector' | 'ray';
    arrow?: {
        width: number;
        length: number;
    };
    through?: {
        A: THREE.Vector3;
        B: THREE.Vector3;
    };
    plane?: {
        point: THREE.Vector3;
        normal: THREE.Vector3;
    };
    parallel?: {
        point: THREE.Vector3;
        direction: THREE.Vector3;
    };
    appearance?: IFigureAppearance;
}
export declare class Line extends AbstractFigure {
    #private;
    constructor(scene: THREE.Scene, name: string, config: ILineConfig);
    get A(): THREE.Vector3;
    get B(): THREE.Vector3;
    get direction(): THREE.Vector3;
    get config(): ILineConfig;
    get line(): Line2;
    get math(): THREE.Line3;
    computed(): void;
}
