import { nullish__none_ } from 'ctx-core/nullish'
import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { top_layer_ } from '../top_layer/index.js'
export const [
	top_layer_zIndex$_,
	top_layer_zIndex_,
] = id_be_memo_pair_(
	'top_layer_zIndex',
	ctx=>nullish__none_([top_layer_(ctx)],
		top_layer=>
			top_layer.zIndex))
export { top_layer_zIndex$_ as top_layer_zIndex__ }
