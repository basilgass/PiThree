import { PARSER_VALUES } from "piparser/lib/PiParserTypes"
import { AbstractFigure } from "./figures/AbstractFigure"

export interface XYZ { x: number, y: number, z: number }

export interface IGraphConstructorConfig {
    backgroundColor?: string;
    grid?: boolean,
    axis?: boolean,
    tex?: TeXConverterType
}
export interface IGraphConfig {
    backgroundColor: string,
}

export interface IParserConfig {
    parameters?: string,
    code?: string
    tex?: TeXConverterType,
}
export type TeXConverterType = (value: string) => string

export interface IParserSettings {
    grid?: boolean,
    axis?: boolean,
    label?: boolean,
    tex?: boolean
}

export type IParserValues = PARSER_VALUES | AbstractFigure
export interface IParserParameters {
    value: IParserValues,
    options: IParserValues[]
}