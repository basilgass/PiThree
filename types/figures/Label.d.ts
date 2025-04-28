import { CSS2DObject } from 'three/examples/jsm/Addons.js';
import { AbstractFigure } from './AbstractFigure';
import { TeXConverterType } from '../pithree.types';
interface ILabelConfig {
    content?: string;
    asTeX?: boolean;
    converter: TeXConverterType;
}
export declare class Label {
    #private;
    constructor(obj: AbstractFigure, config: ILabelConfig);
    get mesh(): CSS2DObject;
    get text(): string;
    update(value: string, asTeX?: boolean): this;
}
export {};
