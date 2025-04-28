import { Graph } from './Graph';
import { IParserConfig } from './pithree.types';
export declare const PARSER_PARAMETERS_KEYS: string[];
export declare class Draw extends Graph {
    #private;
    constructor(id: string | HTMLElement, config?: IParserConfig);
    refreshLayout(parameters?: string): this;
    refresh(code: string): void;
}
