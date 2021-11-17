import { last_ } from '@ctx-core/array'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { Layer, layer_a$_b } from './layer_a$_b.js'
import type { layer_Ctx } from './layer_Ctx.js'
const key = 'top_layer$'
export const top_layer$_b:B<layer_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		layer_a$_b(ctx),
		layer_a=>
			last_(layer_a)))
export type top_layer$_T = Readable$<Layer|undefined>
