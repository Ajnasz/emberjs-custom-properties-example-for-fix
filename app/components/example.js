import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['example'],
	prop: null,
	customProperties: [ 'foo' ],

	foo: computed('prop.num', function () {
		return `${this.get('prop.num')}px`;
	}),
});
