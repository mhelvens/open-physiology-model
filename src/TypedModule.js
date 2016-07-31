import Module                       from './Module';
import {Typed}                      from './modules/typed';
import {humanMsg, mapOptionalArray} from './util/misc';

import defaults  from 'lodash-bound/defaults';
import mapValues from 'lodash-bound/mapValues';
import omitBy    from 'lodash-bound/omitBy';

/**
 * Typed Modules allow to more easily create related
 * Type, Template and HasType classes. For example,
 * to create LyphType and LyphTemplate resources and
 * their HasType relationship from one description.
 **/
export default class TypedModule extends Module {

	TYPED_RESOURCE(config) {
		return mapOptionalArray(config, (conf) => {
			
			const SuperClass = conf.extends || Typed;
			
			config::defaults({
				properties: {},
				patternProperties: {}
			});
			
			const [
				typeProperties,
				templateProperties,
				typePatternProperties,
				templatePatternProperties
		    ] = [
		    	['properties',        'Type',     'Template'],
			    ['properties',        'Template', 'Type'    ],
			    ['patternProperties', 'Type',     'Template'],
			    ['patternProperties', 'Template', 'Type'    ]
			].map(([key, wanted, unwanted]) => config[key]
				::omitBy(desc => !desc[wanted] && desc[unwanted])
				::mapValues((desc) => {
				if (desc[wanted]) { return { ...desc[wanted], typeCheck: desc.typeCheck } }
				return { ...desc };
			}));
			
			const NewType = this.RESOURCE({
				
				name: `${conf.name}Type`,
				
				extends: SuperClass.Type,
				
				instanceSingular: conf.singular,
				instancePlural:   conf.plural || `${conf.singular}s`,
				
				singular: `${conf.singular} type`,
				
				singleton: conf.singleton,
				
				properties:        typeProperties,
				patternProperties: typePatternProperties
				
			});
			
			const NewTemplate = this.RESOURCE({
				
				name: `${conf.name}Template`,
				
				extends: SuperClass.Template,
				
				instanceSingular: conf.singular,
				instancePlural:   conf.plural || `${conf.singular}s`,
				
				singular: `${conf.singular} template`,
				
				properties:        templateProperties,
				patternProperties: templatePatternProperties
				
			});
			
			const NewHasType = this.RELATIONSHIP({
				
				name: 'HasType',
				
				extends: SuperClass.HasType,
				
				singular: 'has type',
				
				1: [NewTemplate, '1..1', { anchors: true, key: 'type' }],
				2: [NewType,     '0..*',                               ]
				
			});
			
			return {
				...conf,
				isTypedResource: true,
				Type:            NewType,
				Template:        NewTemplate,
				HasType:         NewHasType
			};
		});

	}

}
