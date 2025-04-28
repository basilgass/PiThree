import { Line2 } from 'three/examples/jsm/Addons.js';
import { AbstractFigure, IFigureAppearance } from './AbstractFigure';
import * as THREE from 'three';
export interface IArcConfig {
    radius: number | THREE.Vector3;
    start: THREE.Vector3;
    center: THREE.Vector3;
    end: THREE.Vector3;
    mark?: boolean;
    appearance?: IFigureAppearance;
    arrow?: {
        width: number;
        length: number;
    };
}
export declare class Arc extends AbstractFigure {
    #private;
    constructor(scene: THREE.Scene, name: string, config: IArcConfig);
    get start(): THREE.Vector3;
    get end(): THREE.Vector3;
    get center(): THREE.Vector3;
    get config(): IArcConfig;
    get AB(): THREE.Vector3;
    get AC(): THREE.Vector3;
    get angle(): number;
    get radius(): number;
    get line(): Line2;
    get arrow(): THREE.Mesh | undefined;
    computed(): void;
}
