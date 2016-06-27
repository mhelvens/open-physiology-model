////////////////////////////////////////////////////////////////////////////////
// Module / Resource / Relationship Factory                                   //
////////////////////////////////////////////////////////////////////////////////

function setId(config) {
	config.id = config.id || config.name;
}

function augmentWithJsonSchema(config) {
	return {
		...config,
		schema: {
			$schema:             'http://json-schema.org/draft-04/schema#',
			type:                'Object',
			properties:           { ...config.properties                 },
			patternProperties:    { ...config.patternProperties          },
			additionalProperties: ( config.additionalProperties === true )

			// TODO: have this object conform to json schema syntax
			//     : - add 'required' field?
			//     : - sanitize config.properties
			//     : - add properties '1' and '2' to it (if config.isRelationship)

			// TODO: fold superclass properties, patternProperties, etc. into this
			//     : - fold property flags into each other
		}
	};
}

export default class module {

	normalizeConfig(config) {
		if (typeof config === 'function') { config = config(this) }
		if (!Array.isArray(config))       { config = [config]     }
		return config;
	}

	RESOURCE(config) {
		for (let conf of this.normalizeConfig(config)) {
			conf.isResource = true;
			setId                (conf);
			augmentWithJsonSchema(conf);
			this.constructor[conf.id] = this[conf.id] = conf;
		}
		return this;
	}

	RELATIONSHIP(config) {
		for (let conf of this.normalizeConfig(config)) {
			conf.isRelationship = true;
			setId                (conf);
			augmentWithJsonSchema(conf);

			// TODO: normalize 1: / 2: array notation
			//     : - implement left-to-right and right-to-left perspectives

			this.constructor[conf.id] = this[conf.id] = conf;
		}
		return this;
	}

}

////////////////////////////////////////////////////////////
// RESOURCE({
//
//     name: 'ResourceName',
//
//     extends: <superclass>,
//     abstract: <true/false>,
//
//     singular: 'singular name',
//     plural:   'plural names',
//
//     properties: {
//         ...properties
//     },
//     patternProperties: {
//         ...patternProperties
//     },
//     ...options
// })
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// RELATIONSHIP({
//
//     name: 'RelationshipName',
//
//     1: [ ResourceType1, [c1min, c1max], { ...options1to2 },
//     2: [ ResourceType2, [c2min, c2max], { ...options2to1 },
//
//     properties: {
//         ...properties
//     },
//
//     ...options
// })
//
// This means that RelationshipName is a type of c1-to-c2 relationship
// (c stands for cardinality: many-to-many, one-to-many, etc. both sides
// have a min and max) between ResourceType1 resources and ResourceType2 resources.
// So: "a ResourceType1 resource can be related to 'c1' ResourceType2 resource(s),
//      exposed through through the key 'options1to2.key' in that resource"
// and vice versa, if a key field is present, which is not mandatory.
//
// A couple of possible options:
// - options1to2.sustains:     when the last related ResourceType1 instance is deleted,
//                             the ResourceType2 instance that is being sustained by it is deleted automatically
// - options1to2.anchors:      a ResourceType2 instance cannot be deleted
//                             while there are still ResourceType1 instances related with it
// - options1to2.implicit:     (only when c2min > 0) a new ResourceType2 instance, plus this kind of relationship,
//                             is automatically created for a new ResourceType1 instance;
// - options1to2.getSummary:   a human-readable explanation of the corresponding REST endpoint for HTTP GET
// - options1to2.putSummary:   a human-readable explanation of the corresponding REST endpoint for HTTP PUT
// - options1to2.deleteSummary:a human-readable explanation of the corresponding REST endpoint for HTTP DELETE
// - options.readOnly:         this relationship type is managed programmatically, not to be exposed through the API directly
// - options.noCycles:         no cycles of this relationship type are allowed
// - options.symmetric:        this relationship type is bidirectional, 1->2 always implies 2->1; TODO: implement when needed
// - options.antiReflexive:    a resource may not be related to itself with this type;            TODO: implement when needed
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// Cardinalities                                                              //
////////////////////////////////////////////////////////////////////////////////

// just use 0, 1, 2, where appropriate
export const MANY = Infinity;
