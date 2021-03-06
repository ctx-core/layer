import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { top_layer$_b } from './top_layer$_b.js'
import type { layer_Ctx } from './layer_Ctx.js'
const key = 'top_layer_zIndex$'
export const top_layer_zIndex$_b:B<layer_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		top_layer$_b(ctx),
		top_layer=>top_layer?.zIndex
	) as top_layer_zIndex$_T
)
export type top_layer_zIndex$_T = Readable$<number>
