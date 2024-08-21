import { PARSER } from "piparser/lib/PiParserTypes"
import type { AbstractFigure } from "../figures/AbstractFigure"
import type { Point } from "../figures/Point"

import * as THREE from 'three'

export function buildLine(item: PARSER, figures: Record<string, AbstractFigure>, graphConfig: unknown): unknown {
    const [AName, BName] = item.values as [string, string]

    // Get the figures name
    const A: THREE.Vector3 = (figures[AName] as Point).v3,
        B: THREE.Vector3 = (figures[BName] as Point).v3

    if (A.x === undefined || B.x === undefined) { return undefined }


    if (item.key === 'line') {
        return {
            type: 'line',
            through: { A, B }
        }
    }

    if (item.key === 'seg') {
        return {
            type: 'segment',
            through: { A, B }
        }
    }

    if (item.key === 'ray') {
        return {
            type: 'ray',
            through: { A, B }
        }
    }

    if (item.key === 'vec') {
        return {
            type: 'vector',
            through: { A, B }
        }
    }
}