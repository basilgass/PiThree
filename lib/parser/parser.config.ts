import { PARSER } from "piparser/lib/PiParserTypes"
import { AbstractFigure } from "../figures/AbstractFigure"
import { buildPoint } from "./buildPoint"
import { buildLine } from "./buildLine"
import { buildPlane } from "./buildPlane"
import { buildArc } from "./buildArc"

interface parser_item {
    name: string
    description: string
    code: string
    parameters: string[]
    build: (values: PARSER, figures: Record<string, AbstractFigure>, config: unknown) => unknown,
    create: string
    option?: string
}
export const parser_config: Record<string, parser_item> = {
    pt: {
        name: 'point',
        description: 'Create a point',
        code: 'A(3,4)',
        parameters: [],
        build: buildPoint,
        create: 'point'
    },
    line: {
        name: 'line',
        description: 'Create a line',
        code: 'AB',
        parameters: [],
        build: buildLine,
        create: 'line'
    },
    seg: {
        name: 'segment',
        description: 'Create a segement',
        code: 'AB.',
        parameters: [],
        build: buildLine,
        create: 'line'
    },
    ray: {
        name: 'ray',
        description: 'Create a ray',
        code: 'AB[',
        parameters: [],
        build: buildLine,
        create: 'line'
    },
    vec: {
        name: 'vector',
        description: 'Create a vector',
        code: 'vAB',
        parameters: [],
        build: buildLine,
        create: 'line'
    },
    plane: {
        name: 'plane',
        description: 'Create a plane',
        code: 'A,B,C | n,A | ax+by+cz+d=0',
        parameters: [],
        build: buildPlane,
        create: 'plane'
    },
    arc: {
        name: 'arc',
        description: 'Create an arc',
        code: 'a=arc A,B,C',
        parameters: [],
        build: buildArc,
        create: 'arc'
    }
}