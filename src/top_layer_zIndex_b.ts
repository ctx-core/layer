import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { top_layer_b, top_layer_Ctx } from './top_layer_b'
const key = 'top_layer_zIndex'
export interface top_layer_zIndex_Ctx extends top_layer_Ctx {
	top_layer_zIndex?:top_layer_zIndex_T
}
export const top_layer_zIndex_b = _b<top_layer_zIndex_Ctx, typeof key>(key, ctx=>
	derived$(
		top_layer_b(ctx),
		$top_layer=>$top_layer?.zIndex
	) as top_layer_zIndex_T
)
export type $top_layer_zIndex_T = number
export interface top_layer_zIndex_T extends Readable$<$top_layer_zIndex_T> {}
