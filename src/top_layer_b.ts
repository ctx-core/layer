import { _b } from '@ctx-core/object'
import { _last } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { Layer, layer_a1_b, layer_a1_Ctx } from './layer_a1_b'
const key = 'top_layer'
export interface top_layer_Ctx extends layer_a1_Ctx {
	top_layer?:Readable$<Layer|undefined>
}
export const top_layer_b = _b<top_layer_Ctx, typeof key>(key, ctx=>
	derived$(
		layer_a1_b(ctx),
		$layer_a1=>
			_last($layer_a1)))
