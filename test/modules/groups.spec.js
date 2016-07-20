import {xdescribe, describe, it, expect} from '../test.helper';

import * as exports from '../../src/modules/groups';
const { default: module, ...exportedClasses } = exports;

xdescribe("'groups' Module", () => {

	it("exports the expected classes", () => {

		expect(exportedClasses).to.contain.typedResources(
			'Group'
		);
		expect(exportedClasses).to.contain.relationships(
			'HasElement'
		);

	});

});