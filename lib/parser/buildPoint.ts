import { PARSER } from "piparser/lib/PiParserTypes"
import type { AbstractFigure } from "../figures/AbstractFigure"
import { Point } from "../figures/Point"
import { Line } from "../figures/Line"
import { Plane } from "../figures/Plane"


export function buildPoint(item: PARSER, figures: Record<string, AbstractFigure>, graphConfig: unknown): unknown {

    if (item.key === 'pt') {
        const config = {
            coordinates: {
                x: item.values[0] as number,
                y: item.values[1] as number,
                z: item.values[2] as number
            }
        }
        return config
    }

    if (item.key === 'proj') {
        const [object, projection] = item.values
        const objectFigure = figures[object as string]
        const projectionFigure = figures[projection as string]

        if (objectFigure === undefined) {
            throw new Error(`Figure ${object as string} not found`)
        }
        if (projectionFigure === undefined) {
            throw new Error(`Figure ${projection as string} not found`)
        }

        if (
            (objectFigure instanceof Point && (projectionFigure instanceof Line || projectionFigure instanceof Plane)) ||
            (objectFigure instanceof Line && projectionFigure instanceof Plane)
        ) {
            // Projection of a point on a line
            return {
                projection: {
                    object: objectFigure,
                    target: projectionFigure
                }
            }
        }


        // TODO: Implement the projection
    }
}