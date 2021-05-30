import { _b } from '@ctx-core/object'
import { last_ } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { Layer, layer_a$_b } from './layer_a$_b'
import type { layer_Ctx } from './layer_Ctx'
const key = 'top_layer$'
export const top_layer$_b = _b<layer_Ctx, typeof key>(key, ctx=>
	derived$(
		layer_a$_b(ctx),
		layer_a=>
			last_(layer_a)))
export type top_layer$_T = Readable$<Layer|undefined>
