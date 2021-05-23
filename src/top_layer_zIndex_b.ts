import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { top_layer_b } from './top_layer_b'
import type { layer_Ctx } from './layer_Ctx'
const key = 'top_layer_zIndex'
export const top_layer_zIndex_b = _b<layer_Ctx, typeof key>(key, ctx=>
	derived$(
		top_layer_b(ctx),
		$top_layer=>$top_layer?.zIndex
	) as top_layer_zIndex_T
)
export type $top_layer_zIndex_T = number
export interface top_layer_zIndex_T extends Readable$<$top_layer_zIndex_T> {}
