import module from '../Module';

import resources,   {Resource, IsRelatedTo} from './resources';
import measurables, {Measurable}            from './measurables';


const m = new module('research', [resources, measurables]);
export default m;


export const Correlation = m.RESOURCE({/////////////////////////////////////////////////////////////////

	name: 'Correlation',

	extends: Resource,

	singular: "correlation",

	properties: {
		'comment': { type: 'string' }
	}

});//////////////////////////////////////////////////////////////////////////


export const InvolvesMeasurable = m.RELATIONSHIP({

	name: 'InvolvesMeasurable',

	extends: IsRelatedTo,

	singular: "involves measurable",

	1: [Correlation,         '0..*', { anchors: true, key: 'measurables' }],
	2: [Measurable.Template, '0..*',                                      ],

});


export const ClinicalIndex= m.RESOURCE({/////////////////////////////////////////////////////////////////

	name: 'ClinicalIndex',

	extends: Resource,

	singular: "clinical index",
	plural:   "clinical indices"

});//////////////////////////////////////////////////////////////////////////


export const EncompassesClinicalIndex = m.RELATIONSHIP({

	name: 'EncompassesClinicalIndex',

	extends: IsRelatedTo,

	singular: "encompasses clinical index",

	1: [ClinicalIndex, '0..*', { anchors: true, key: 'children' }],
	2: [ClinicalIndex, '0..1', {                key: 'parent'   }],

	noCycles: true,

});


export const InvolvesClinicalIndex = m.RELATIONSHIP({

	name: 'InvolvesClinicalIndex',

	extends: IsRelatedTo,

	singular: "involves clinical index",

	1: [Correlation,   '0..*', { anchors: true, key: 'clinicalIndices' }],
	2: [ClinicalIndex, '0..*',                                          ],

});


export const Publication = m.RESOURCE({/////////////////////////////////////////////////////////////////

	name: 'Publication',

	extends: Resource,

	singular: "publication"

});//////////////////////////////////////////////////////////////////////////


export const InvolvesPublication = m.RELATIONSHIP({

	name: 'InvolvesPublication',

	extends: IsRelatedTo,

	singular: "involves publication",

	1: [Correlation, '0..1', { anchors: true, key: 'publication' }],
	2: [Publication, '0..*',                                      ],

});