import { _b } from '@ctx-core/object'
import { _last } from '@ctx-core/array'
import { derived$ } from '@ctx-core/store'
import { layer_a1_b } from './layer_a1_b'
import type { layer_Ctx } from './layer_Ctx'
const key = 'top_layer'
export const top_layer_b = _b<layer_Ctx, typeof key>(key, ctx=>
	derived$(
		layer_a1_b(ctx),
		$layer_a1=>
			_last($layer_a1)))
