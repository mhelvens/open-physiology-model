import Module,                      from './Module';
import {Typed, Type, IsSubtypeOf}   from './modules/typed';
import {humanMsg, mapOptionalArray} from './util/misc';

import defaults  from 'lodash-bound/defaults';
import mapValues from 'lodash-bound/mapValues';
import omitBy    from 'lodash-bound/omitBy';
import isArray   from 'lodash-bound/isArray';
import {IsRelatedTo} from "./modules/resources";

/**
 * Typed Modules allow to more easily create related
 * Type, Template and HasType classes. For example,
 * to create LyphType and LyphTemplate resources and
 * their HasType relationship from one description.
 **/
export default class TypedModule extends Module {

	TYPED_RESOURCE(config) {
		return mapOptionalArray(config, (conf) => {
			
			let superClasses = conf.extends || [Typed];
			if (!superClasses::isArray()) { superClasses = [superClasses] }
			
			let subClasses = conf.extendedBy || [];
			if (!subClasses::isArray()) { subClasses = [subClasses] }
			
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
				
				extends:    superClasses.map(sc => sc.Type),
				extendedBy: subClasses  .map(sc => sc.Type),
				
				instanceSingular: conf.singular,
				instancePlural:   conf.plural || `${conf.singular}s`,
				
				singular: `${conf.singular} type`,
				
				singleton: conf.singleton,
				
				properties:        typeProperties,
				patternProperties: typePatternProperties
				
			});
			
			const NewTemplate = this.RESOURCE({
				
				name: `${conf.name}Template`,
				
				extends:    superClasses.map(sc => sc.Template),
				extendedBy: subClasses  .map(sc => sc.Template),
				
				instanceSingular: conf.singular,
				instancePlural:   conf.plural || `${conf.singular}s`,
				
				singular: `${conf.singular} template`,
				
				properties:        templateProperties,
				patternProperties: templatePatternProperties
				
			});
			
			const NewHasType = this.RELATIONSHIP({
				
				name: `HasType`,
				
				extends: IsRelatedTo,
				// extends:    superClasses.map(sc => sc.HasType), // can this work?
				// extendedBy: subClasses  .map(sc => sc.HasType),
				
				// TODO: in order to give call this `${conf.name}_HasType`,
				//     : and maintain a proper class hierarchy, we'll need
				//     : to allow someone to set `-->HasType` on an entity,
				//     : and recognize this as also setting `-->${conf.name}_HasType`,
				//     : because of the 1..1 cardinality on the whole domain hierarchy.
				//     : Alternatively, we may want to allow a class to be identified
				//     : by more than just the name. We wouldn't want
				//     : `-->${conf.name}_HasType` to be visible as a settable field.
				
				singular: 'has type',
				
				1: [NewTemplate, '1..1', { anchors: true, key: 'type' }],
				2: [NewType,     '0..*',                               ]
				
			});
			
			const NewIsSubtypeOf = this.RELATIONSHIP({
				
				name: `IsSubtypeOf`,
				
				extends: IsRelatedTo,
				// extends:    superClasses.map(sc => sc.IsSubtypeOf), // can this work?
				// extendedBy: subClasses  .map(sc => sc.IsSubtypeOf), // see TODO above
				
				singular: "is subtype of",
				
				1: [Type, '0..*', {                key: 'subtypes'   }],
				2: [Type, '0..*', { anchors: true, key: 'supertypes' }],
				
				noCycles: true
				
			});
			
			return {
				...conf,
				isTypedResource: true,
				Type:            NewType,
				Template:        NewTemplate,
				HasType:         NewHasType,
				IsSubtypeOf:     NewIsSubtypeOf
			};
		});

	}

}
