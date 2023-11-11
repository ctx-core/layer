import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { top_layer_ } from '../top_layer/index.js'
export const [
	top_layer_zIndex$_,
	top_layer_zIndex_,
] = val__be_computed_pair_('top_layer_zIndex', ctx=>
	nullish__none_([top_layer_(ctx)], top_layer=>
		top_layer ? top_layer.zIndex : null))
export { top_layer_zIndex$_ as top_layer_zIndex__ }
