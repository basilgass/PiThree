import { Line2 } from 'three/examples/jsm/Addons.js';
import { Label } from './Label';
import { TeXConverterType } from '../pithree.types';
import * as THREE from 'three';
export interface IFigureAppearance {
    opacity: number;
    color: string;
    width?: number;
    dashed?: boolean | number;
    borderColor?: string;
}
export declare abstract class AbstractFigure {
    #private;
    constructor(scene: THREE.Scene, name: string);
    get scene(): THREE.Scene;
    set scene(scene: THREE.Scene);
    get name(): string;
    set name(name: string);
    get appearance(): IFigureAppearance;
    set appearance(appearance: IFigureAppearance);
    get mesh(): THREE.Mesh | THREE.Group;
    set mesh(mesh: THREE.Mesh | THREE.Group);
    get line(): Line2 | undefined;
    get arrow(): THREE.Mesh | undefined;
    get label(): Label | undefined;
    abstract computed(): void;
    update(): this;
    color(color: string): this;
    dash(dash: boolean | number): this;
    dot(): this;
    mark(): this;
    lineWidth(width: number): this;
    fill(color: string, opacity?: number): this;
    addLabel(label: string, asTeX: boolean, converter: TeXConverterType): this;
    hide(): this;
}
