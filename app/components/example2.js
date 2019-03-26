import Component from '@ember/component';

export default Component.extend({
	foo: null,
	init() {
		this._super(...arguments);
		this.set('foo', {num: 1})
	},
	actions: {
		btnClick() {
			this.incrementProperty('foo.num');
		}
	}
});
