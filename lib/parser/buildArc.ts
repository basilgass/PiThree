import { PARSER } from "piparser/lib/PiParserTypes"
import type { AbstractFigure } from "../figures/AbstractFigure"
import type { Point } from "../figures/Point"
import * as THREE from 'three'


export function buildArc(item: PARSER, figures: Record<string, AbstractFigure>, graphConfig: unknown): unknown {
    const [AName, BName, CName, radiusName] = item.values as [string, string, string, string]

    // Get the figures name
    const start: THREE.Vector3 = (figures[AName] as Point).v3,
        center: THREE.Vector3 = (figures[BName] as Point).v3,
        end: THREE.Vector3 = (figures[CName] as Point).v3,
        radius = Object.hasOwn(figures, radiusName) ? figures[radiusName] : parseFloat(radiusName)

    if (start.x === undefined || center.x === undefined || end.x === undefined) { return undefined }

    return {
        start,
        end,
        center,
        radius
    }
}