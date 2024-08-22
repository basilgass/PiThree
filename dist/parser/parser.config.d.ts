import { PARSER } from 'piparser/lib/PiParserTypes';
import { AbstractFigure } from '../figures/AbstractFigure';
interface parser_item {
    name: string;
    description: string;
    code: string;
    parameters: string[];
    build: (values: PARSER, figures: Record<string, AbstractFigure>, config: unknown) => unknown;
    create: string;
    option?: string;
}
export declare const parser_config: Record<string, parser_item>;
export {};
