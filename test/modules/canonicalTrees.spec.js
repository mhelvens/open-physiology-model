import {describe, it, expect} from '../test.helper';

import moduleFactory from '../../src/modules/omegaTrees';


describe("'canonicalTrees' Module", () => {
	
	let module;
	beforeEach(() => { module = moduleFactory() });
	
	it("exports the expected classes", () => {
		
		expect(module.classes).to.contain.resources(
			'CanonicalTree',
			'CanonicalTreeBranch'
		);
		expect(module.classes).to.contain.relationships(
			'BranchesTo',
			'IsConveyedBy'
		);
		
	});

});