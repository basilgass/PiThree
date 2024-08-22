import { CSS2DRenderer, OrbitControls } from 'three/examples/jsm/Addons.js';
import { IGraphConfig, IGraphConstructorConfig, TeXConverterType } from './pithree.types';
import { AbstractFigure } from './figures/AbstractFigure';
import * as THREE from 'three';
type createConfig = (config: any, name: string) => AbstractFigure;
export declare class Graph {
    #private;
    constructor(id: string | HTMLElement, config?: IGraphConstructorConfig);
    get container(): HTMLElement;
    get config(): IGraphConfig;
    get figures(): Record<string, AbstractFigure>;
    get renderer(): THREE.WebGLRenderer;
    get css2DRenderer(): CSS2DRenderer;
    get controls(): OrbitControls;
    get camera(): THREE.PerspectiveCamera;
    get scene(): THREE.Scene;
    get converter(): TeXConverterType;
    get create(): Record<string, createConfig>;
    mount(): this;
    onResize(): this;
    toggleGrid(value?: boolean): void;
    toggleAxis(value?: boolean): void;
    clear(): void;
    updateLayout(): this;
    update(): this;
}
export {};
