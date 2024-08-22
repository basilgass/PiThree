import { PARSER } from "piparser/lib/PiParserTypes"
import type { AbstractFigure } from "../figures/AbstractFigure"
import type { Point } from "../figures/Point"
import { Line } from "../figures/Line"


export function buildPlane(item: PARSER, figures: Record<string, AbstractFigure>, graphConfig: unknown): unknown {
    // A plane can be given by:
    // - 3 points: A,B,C
    // - a normal vector / line and a point: n,A
    // - an equation: ax + by + cz + d = 0

    if (item.values.length === 0) { return undefined }

    const cfg = {} as Record<string, unknown>

    const equ = item.values[0] as string
    if (typeof equ === 'string' && equ.includes('=0')) {
        // It's an equation.

        if (item.values.length > 1) { cfg.shape = detectShape(item, 1) }

        cfg.equation = item.values[0] as string

        return cfg
    }

    if (item.values.length >= 2) {
        // It's a line (normal) and a point
        const [lineName, pointName] = item.values as [string, string]

        const line = (figures[lineName] as Line).direction
        const point = (figures[pointName] as Point).v3

        if (item.values.length > 2) { cfg.shape = detectShape(item, 2) }

        if (line !== undefined || point !== undefined) {
            cfg.fromLine = {
                line,
                point
            }
        }
    }

    // It's 3 points
    const [AName, BName, CName] = item.values as [string, string, string]

    if (AName === undefined || BName === undefined || CName === undefined) { return undefined }
    // Get the figures name
    const A = (figures[AName] as Point).v3,
        B = (figures[BName] as Point).v3,
        C = (figures[CName] as Point).v3

    if (A.x === undefined || B.x === undefined || C.x === undefined) { return undefined }

    // If there are more than 3 values, the rest are for the shape
    if (item.values.length > 3) { cfg.shape = detectShape(item, 3) }
    return {
        through: { A, B, C }
    }
}

function detectShape(item: PARSER, index: number) {
    const [width, height, rotate] = item.values.slice(index) as number[]
    return {
        width: width ?? 10,
        height: height ?? width,
        rotate: rotate ?? 0
    }
}