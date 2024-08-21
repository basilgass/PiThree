import { PARSER } from "piparser/lib/PiParserTypes"
import type { AbstractFigure } from "../figures/AbstractFigure"


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
        // TODO: Implement the projection
    }
}