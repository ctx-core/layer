import { nullish__none_ } from '@ctx-core/function'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { top_layer_ } from '../top_layer/index.js'
export const [
	top_layer_zIndex$_,
	top_layer_zIndex_,
] = be_computed_pair_(ctx=>
	nullish__none_([top_layer_(ctx)], top_layer=>
		top_layer ? top_layer.zIndex : null))
	.config({ id: 'top_layer_zIndex' })
export { top_layer_zIndex$_ as top_layer_zIndex__ }
