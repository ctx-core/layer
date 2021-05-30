import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { top_layer$_b } from './top_layer$_b'
import type { layer_Ctx } from './layer_Ctx'
const key = 'top_layer_zIndex$'
export const top_layer_zIndex$_b = _b<layer_Ctx, typeof key>(key, ctx=>
	derived$(
		top_layer$_b(ctx),
		top_layer=>top_layer?.zIndex
	) as top_layer_zIndex$_T
)
export type top_layer_zIndex_T = number
export interface top_layer_zIndex$_T extends Readable$<top_layer_zIndex_T> {}
