import {PARSER} from "piparser/lib/PiParserTypes"
import type {AbstractFigure} from "../figures/AbstractFigure"
import type {Point} from "../figures/Point"
import * as THREE from 'three'
import {ISphereConfig} from "../figures/Sphere.ts";

export function buildSphere(item: PARSER, figures: Record<string, AbstractFigure>, graphConfig: unknown): unknown {
    // A plane can be given by:
    // - 3 points: A,B,C
    // - a normal vector / line and a point: n,A
    // - an equation: ax + by + cz + d = 0

    if (item.values.length === 0) {
        return undefined
    }

    const cfg: ISphereConfig = {
        shape: {
            segments: {
                width: 32,
                height: 32
            }
        }
    }

    const [center, radius, width, height] = item.values

    if (cfg.shape) {
        cfg.shape.segments = {
            width: +width > 12 ? +width : 32,
            height: +height > 12 ? +height :
                +width > 12 ? +width : 32
        }
    }

    cfg.centerRadius = {
        center: (figures[center as string] as Point).v3,
        radius: +radius
    }

    return cfg
}
