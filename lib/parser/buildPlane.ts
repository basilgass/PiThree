import { PARSER } from "piparser/lib/PiParserTypes"
import type { AbstractFigure } from "../figures/AbstractFigure"
import type { Point } from "../figures/Point"
import { Line } from "../figures/Line"


export function buildPlane(item: PARSER, figures: Record<string, AbstractFigure>, graphConfig: unknown): unknown {
    // A plane can be given by:
    // - 3 points: A,B,C
    // - a normal vector / line and a point: n,A
    // - an equation: ax + by + cz + d = 0

    if (item.values.length === 1) {
        // It's an equation.
        return {
            equation: item.values[0] as string
        }
    }

    if (item.values.length === 2) {
        // It's a line (normal) and a point
        const [lineName, pointName] = item.values as [string, string]

        const line = (figures[lineName] as Line).direction
        const point = (figures[pointName] as Point).v3

        if (line === undefined || point.x === undefined) { return undefined }

        return {
            fromLine: {
                line: line,
                point: point
            }
        }
    }

    // It's 3 points
    const [AName, BName, CName] = item.values as [string, string, string]

    // Get the figures name
    const A = (figures[AName] as Point).v3,
        B = (figures[BName] as Point).v3,
        C = (figures[CName] as Point).v3

    if (A.x === undefined || B.x === undefined || C.x === undefined) { return undefined }

    return {
        through: { A, B, C }
    }
}