(self["webpackChunkmobilitydcatap_ui"]=self["webpackChunkmobilitydcatap_ui"]||[]).push([[611],{47793:function(t,e,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,a,r){void 0===r&&(r=a),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[a]}})}:function(t,e,a,r){void 0===r&&(r=a),t[r]=e[a]}),i=this&&this.__exportStar||function(t,e){for(var a in t)"default"===a||Object.prototype.hasOwnProperty.call(e,a)||r(e,t,a)};Object.defineProperty(e,"__esModule",{value:!0}),i(a(49931),e),i(a(88483),e),i(a(92142),e),i(a(62426),e),i(a(43988),e),i(a(36754),e),i(a(88401),e)},49931:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BlankNode=void 0;class a{constructor(t){this.termType="BlankNode",this.value=t}equals(t){return!!t&&"BlankNode"===t.termType&&t.value===this.value}}e.BlankNode=a},88483:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DataFactory=void 0;const r=a(49931),i=a(92142),n=a(62426),s=a(43988),o=a(36754),c=a(88401);let u=0;class l{constructor(t){this.blankNodeCounter=0,t=t||{},this.blankNodePrefix=t.blankNodePrefix||`df_${u++}_`}namedNode(t){return new s.NamedNode(t)}blankNode(t){return new r.BlankNode(t||`${this.blankNodePrefix}${this.blankNodeCounter++}`)}literal(t,e){return new n.Literal(t,e)}variable(t){return new c.Variable(t)}defaultGraph(){return i.DefaultGraph.INSTANCE}quad(t,e,a,r){return new o.Quad(t,e,a,r||this.defaultGraph())}fromTerm(t){switch(t.termType){case"NamedNode":return this.namedNode(t.value);case"BlankNode":return this.blankNode(t.value);case"Literal":return t.language?this.literal(t.value,t.language):t.datatype.equals(n.Literal.XSD_STRING)?this.literal(t.value):this.literal(t.value,this.fromTerm(t.datatype));case"Variable":return this.variable(t.value);case"DefaultGraph":return this.defaultGraph();case"Quad":return this.quad(this.fromTerm(t.subject),this.fromTerm(t.predicate),this.fromTerm(t.object),this.fromTerm(t.graph))}}fromQuad(t){return this.fromTerm(t)}resetBlankNodeCounter(){this.blankNodeCounter=0}}e.DataFactory=l},92142:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultGraph=void 0;class a{constructor(){this.termType="DefaultGraph",this.value=""}equals(t){return!!t&&"DefaultGraph"===t.termType}}e.DefaultGraph=a,a.INSTANCE=new a},62426:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Literal=void 0;const r=a(43988);class i{constructor(t,e){this.termType="Literal",this.value=t,"string"===typeof e?(this.language=e,this.datatype=i.RDF_LANGUAGE_STRING):e?(this.language="",this.datatype=e):(this.language="",this.datatype=i.XSD_STRING)}equals(t){return!!t&&"Literal"===t.termType&&t.value===this.value&&t.language===this.language&&this.datatype.equals(t.datatype)}}e.Literal=i,i.RDF_LANGUAGE_STRING=new r.NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),i.XSD_STRING=new r.NamedNode("http://www.w3.org/2001/XMLSchema#string")},43988:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NamedNode=void 0;class a{constructor(t){this.termType="NamedNode",this.value=t}equals(t){return!!t&&"NamedNode"===t.termType&&t.value===this.value}}e.NamedNode=a},36754:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Quad=void 0;class a{constructor(t,e,a,r){this.termType="Quad",this.value="",this.subject=t,this.predicate=e,this.object=a,this.graph=r}equals(t){return!!t&&("Quad"===t.termType||!t.termType)&&this.subject.equals(t.subject)&&this.predicate.equals(t.predicate)&&this.object.equals(t.object)&&this.graph.equals(t.graph)}}e.Quad=a},88401:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Variable=void 0;class a{constructor(t){this.termType="Variable",this.value=t}equals(t){return!!t&&"Variable"===t.termType&&t.value===this.value}}e.Variable=a},75611:function(t,e,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,a,r){void 0===r&&(r=a),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[a]}})}:function(t,e,a,r){void 0===r&&(r=a),t[r]=e[a]}),i=this&&this.__exportStar||function(t,e){for(var a in t)"default"===a||Object.prototype.hasOwnProperty.call(e,a)||r(e,t,a)};Object.defineProperty(e,"__esModule",{value:!0}),i(a(68225),e)},5916:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ParseError=void 0;class a extends Error{constructor(t,e){const a=t.saxStream._parser;super(t.trackPosition?`Line ${a.line+1} column ${a.column+1}: ${e}`:e)}}e.ParseError=a},68225:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ParseType=e.RdfXmlParser=void 0;const r=a(70742),i=a(64043),n=a(88310),s=a(5916),o=a(47793);class c extends n.Transform{constructor(t){super({readableObjectMode:!0}),this.activeTagStack=[],this.nodeIds={},t&&(Object.assign(this,t),this.options=t),this.dataFactory||(this.dataFactory=new o.DataFactory),this.baseIRI||(this.baseIRI=""),this.defaultGraph||(this.defaultGraph=this.dataFactory.defaultGraph()),this.saxStream=i.createStream(this.strict,{xmlns:!1,position:this.trackPosition}),this.strict||(this.saxStream._parser.looseCase="toString"),this.attachSaxListeners()}static parseNamespace(t,e){const a={};let r=!1;for(const n in t.attributes)n.startsWith("xmlns")&&(5===n.length?(r=!0,a[""]=t.attributes[n]):":"===n.charAt(5)&&(r=!0,a[n.substr(6)]=t.attributes[n]));const i=e&&e.ns?e.ns:[c.DEFAULT_NS];return r?i.concat([a]):i}static expandPrefixedTerm(t,e,a){const r=t.indexOf(":");let i,n;r>=0?(i=t.substr(0,r),n=t.substr(r+1)):(i="",n=t);let o=null,c=null;for(let s=e.length-1;s>=0;s--){const t=e[s][i];if(t){o=t;break}c||(c=e[s][""])}if(!o){if(i&&"xmlns"!==i)throw new s.ParseError(a,`The prefix '${i}' in term '${t}' was not bound.`);o=c||""}return{prefix:i,local:n,uri:o}}static isValidIri(t){return c.IRI_REGEX.test(t)}import(t){const e=new n.PassThrough({readableObjectMode:!0});t.on("error",(t=>a.emit("error",t))),t.on("data",(t=>e.push(t))),t.on("end",(()=>e.push(null)));const a=e.pipe(new c(this.options));return a}_transform(t,e,a){try{this.saxStream.write(t,e)}catch(r){return a(r)}a()}newParseError(t){return new s.ParseError(this,t)}valueToUri(t,e){return this.uriToNamedNode(r.resolve(t,e.baseIRI))}uriToNamedNode(t){if(!c.isValidIri(t))throw this.newParseError(`Invalid URI: ${t}`);return this.dataFactory.namedNode(t)}validateNcname(t){if(!c.NCNAME_MATCHER.test(t))throw this.newParseError(`Not a valid NCName: ${t}`)}attachSaxListeners(){this.saxStream.on("error",(t=>this.emit("error",t))),this.saxStream.on("opentag",this.onTag.bind(this)),this.saxStream.on("text",this.onText.bind(this)),this.saxStream.on("closetag",this.onCloseTag.bind(this)),this.saxStream.on("doctype",this.onDoctype.bind(this))}onTag(t){const e=this.activeTagStack.length?this.activeTagStack[this.activeTagStack.length-1]:null;let a=u.RESOURCE;if(e&&(e.hadChildren=!0,a=e.childrenParseType),e&&e.childrenStringTags){const a=t.name;let r="";for(const e in t.attributes)r+=` ${e}="${t.attributes[e]}"`;const i=`${a}${r}`,n=`<${i}>`;e.childrenStringTags.push(n);const s={childrenStringTags:e.childrenStringTags};return s.childrenStringEmitClosingTag=`</${a}>`,void this.activeTagStack.push(s)}const r={};e?(r.language=e.language,r.baseIRI=e.baseIRI):r.baseIRI=this.baseIRI,this.activeTagStack.push(r),r.ns=c.parseNamespace(t,e),a===u.RESOURCE?this.onTagResource(t,r,e,!e):this.onTagProperty(t,r,e)}onTagResource(t,e,a,i){const n=c.expandPrefixedTerm(t.name,e.ns,this);e.childrenParseType=u.PROPERTY;let s=!0;if(n.uri===c.RDF){if(!i&&c.FORBIDDEN_NODE_ELEMENTS.indexOf(n.local)>=0)throw this.newParseError(`Illegal node element name: ${n.local}`);switch(n.local){case"RDF":e.childrenParseType=u.RESOURCE;case"Description":s=!1}}const o=[],l=[];let d=null,h=!1,p=!1,f=null;for(const u in t.attributes){const i=t.attributes[u],n=c.expandPrefixedTerm(u,e.ns,this);if(a&&n.uri===c.RDF)switch(n.local){case"about":if(d)throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${i} and ${d} where found.`);d=i;continue;case"ID":if(d)throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${i} and ${d} where found.`);this.validateNcname(i),d="#"+i,h=!0;continue;case"nodeID":if(d)throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${i} and ${d} where found.`);this.validateNcname(i),d=i,p=!0;continue;case"bagID":throw this.newParseError("rdf:bagID is not supported.");case"type":f=i;continue;case"aboutEach":throw this.newParseError("rdf:aboutEach is not supported.");case"aboutEachPrefix":throw this.newParseError("rdf:aboutEachPrefix is not supported.");case"li":throw this.newParseError("rdf:li on node elements are not supported.")}else if(n.uri===c.XML){if("lang"===n.local){e.language=""===i?null:i.toLowerCase();continue}if("base"===n.local){e.baseIRI=r.resolve(i,e.baseIRI);continue}}"xml"!==n.prefix&&n.uri&&(o.push(this.uriToNamedNode(n.uri+n.local)),l.push(i))}if(null!==d&&(e.subject=p?this.dataFactory.blankNode(d):this.valueToUri(d,e),h&&this.claimNodeId(e.subject)),e.subject||(e.subject=this.dataFactory.blankNode()),s){const t=this.uriToNamedNode(n.uri+n.local);this.emitTriple(e.subject,this.dataFactory.namedNode(c.RDF+"type"),t,a?a.reifiedStatementId:null)}if(a){if(a.predicate)if(a.childrenCollectionSubject){const t=this.dataFactory.blankNode();this.emitTriple(a.childrenCollectionSubject,a.childrenCollectionPredicate,t,a.reifiedStatementId),this.emitTriple(t,this.dataFactory.namedNode(c.RDF+"first"),e.subject,e.reifiedStatementId),a.childrenCollectionSubject=t,a.childrenCollectionPredicate=this.dataFactory.namedNode(c.RDF+"rest")}else{this.emitTriple(a.subject,a.predicate,e.subject,a.reifiedStatementId);for(let t=0;t<a.predicateSubPredicates.length;t++)this.emitTriple(e.subject,a.predicateSubPredicates[t],a.predicateSubObjects[t],null);a.predicateSubPredicates=[],a.predicateSubObjects=[],a.predicateEmitted=!0}for(let t=0;t<o.length;t++){const r=this.dataFactory.literal(l[t],e.datatype||e.language);this.emitTriple(e.subject,o[t],r,a.reifiedStatementId)}f&&this.emitTriple(e.subject,this.dataFactory.namedNode(c.RDF+"type"),this.uriToNamedNode(f),null)}}onTagProperty(t,e,a){const r=c.expandPrefixedTerm(t.name,e.ns,this);if(e.childrenParseType=u.RESOURCE,e.subject=a.subject,r.uri===c.RDF&&"li"===r.local?(a.listItemCounter||(a.listItemCounter=1),e.predicate=this.uriToNamedNode(r.uri+"_"+a.listItemCounter++)):e.predicate=this.uriToNamedNode(r.uri+r.local),r.uri===c.RDF&&c.FORBIDDEN_PROPERTY_ELEMENTS.indexOf(r.local)>=0)throw this.newParseError(`Illegal property element name: ${r.local}`);e.predicateSubPredicates=[],e.predicateSubObjects=[];let i=!1,n=!1,s=null,o=!0;const l=[],d=[];for(const h in t.attributes){const a=t.attributes[h],r=c.expandPrefixedTerm(h,e.ns,this);if(r.uri===c.RDF)switch(r.local){case"resource":if(s)throw this.newParseError(`Found both rdf:resource (${a}) and rdf:nodeID (${s}).`);if(i)throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:resource (${a})`);e.hadChildren=!0,s=a,o=!1;continue;case"datatype":if(n)throw this.newParseError(`Found both non-rdf:* property attributes and rdf:datatype (${a}).`);if(i)throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:datatype (${a})`);e.datatype=this.valueToUri(a,e);continue;case"nodeID":if(n)throw this.newParseError(`Found both non-rdf:* property attributes and rdf:nodeID (${a}).`);if(e.hadChildren)throw this.newParseError(`Found both rdf:resource and rdf:nodeID (${a}).`);if(i)throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:nodeID (${a})`);this.validateNcname(a),e.hadChildren=!0,s=a,o=!0;continue;case"bagID":throw this.newParseError("rdf:bagID is not supported.");case"parseType":if(n)throw this.newParseError("rdf:parseType is not allowed when non-rdf:* property attributes are present");if(e.datatype)throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:datatype (${e.datatype.value})`);if(s)throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:nodeID or rdf:resource (${s})`);if("Resource"===a){i=!0,e.childrenParseType=u.PROPERTY;const t=this.dataFactory.blankNode();this.emitTriple(e.subject,e.predicate,t,e.reifiedStatementId),e.subject=t,e.predicate=null}else"Collection"===a?(i=!0,e.hadChildren=!0,e.childrenCollectionSubject=e.subject,e.childrenCollectionPredicate=e.predicate,o=!1):"Literal"===a&&(i=!0,e.childrenTagsToString=!0,e.childrenStringTags=[]);continue;case"ID":this.validateNcname(a),e.reifiedStatementId=this.valueToUri("#"+a,e),this.claimNodeId(e.reifiedStatementId);continue}else if(r.uri===c.XML&&"lang"===r.local){e.language=""===a?null:a.toLowerCase();continue}if("xml"!==r.prefix&&"xmlns"!==r.prefix&&r.uri){if(i||e.datatype)throw this.newParseError(`Found illegal rdf:* properties on property element with attribute: ${a}`);e.hadChildren=!0,n=!0,l.push(this.uriToNamedNode(r.uri+r.local)),d.push(this.dataFactory.literal(a,e.datatype||e.language))}}if(null!==s){const t=e.subject;e.subject=o?this.dataFactory.blankNode(s):this.valueToUri(s,e),this.emitTriple(t,e.predicate,e.subject,e.reifiedStatementId);for(let a=0;a<l.length;a++)this.emitTriple(e.subject,l[a],d[a],null);e.predicateEmitted=!0}else o&&(e.predicateSubPredicates=l,e.predicateSubObjects=d,e.predicateEmitted=!1)}emitTriple(t,e,a,r){this.push(this.dataFactory.quad(t,e,a,this.defaultGraph)),r&&(this.push(this.dataFactory.quad(r,this.dataFactory.namedNode(c.RDF+"type"),this.dataFactory.namedNode(c.RDF+"Statement"),this.defaultGraph)),this.push(this.dataFactory.quad(r,this.dataFactory.namedNode(c.RDF+"subject"),t,this.defaultGraph)),this.push(this.dataFactory.quad(r,this.dataFactory.namedNode(c.RDF+"predicate"),e,this.defaultGraph)),this.push(this.dataFactory.quad(r,this.dataFactory.namedNode(c.RDF+"object"),a,this.defaultGraph)))}claimNodeId(t){if(!this.allowDuplicateRdfIds){if(this.nodeIds[t.value])throw this.newParseError(`Found multiple occurrences of rdf:ID='${t.value}'.`);this.nodeIds[t.value]=!0}}onText(t){const e=this.activeTagStack.length?this.activeTagStack[this.activeTagStack.length-1]:null;e&&(e.childrenStringTags?e.childrenStringTags.push(t):e.predicate&&(e.text=t))}onCloseTag(){const t=this.activeTagStack.pop();if(t.childrenStringEmitClosingTag&&t.childrenStringTags.push(t.childrenStringEmitClosingTag),t.childrenTagsToString&&(t.datatype=this.dataFactory.namedNode(c.RDF+"XMLLiteral"),t.text=t.childrenStringTags.join(""),t.hadChildren=!1),t.childrenCollectionSubject)this.emitTriple(t.childrenCollectionSubject,t.childrenCollectionPredicate,this.dataFactory.namedNode(c.RDF+"nil"),t.reifiedStatementId);else if(t.predicate)if(t.hadChildren||t.childrenParseType===u.PROPERTY){if(!t.predicateEmitted){const e=this.dataFactory.blankNode();this.emitTriple(t.subject,t.predicate,e,t.reifiedStatementId);for(let a=0;a<t.predicateSubPredicates.length;a++)this.emitTriple(e,t.predicateSubPredicates[a],t.predicateSubObjects[a],null)}}else this.emitTriple(t.subject,t.predicate,this.dataFactory.literal(t.text||"",t.datatype||t.language),t.reifiedStatementId)}onDoctype(t){t.replace(/<!ENTITY\s+([^\s]+)\s+["']([^"']+)["']\s*>/g,((t,e,a)=>(this.saxStream._parser.ENTITIES[e]=a,"")))}}var u;e.RdfXmlParser=c,c.IRI_REGEX=/^([A-Za-z][A-Za-z0-9+-.]*):[^ "<>{}|\\\[\]`]*$/,c.MIME_TYPE="application/rdf+xml",c.RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#",c.XML="http://www.w3.org/XML/1998/namespace",c.XMLNS="http://www.w3.org/2000/xmlns/",c.DEFAULT_NS={xml:c.XML},c.FORBIDDEN_NODE_ELEMENTS=["RDF","ID","about","bagID","parseType","resource","nodeID","li","aboutEach","aboutEachPrefix"],c.FORBIDDEN_PROPERTY_ELEMENTS=["Description","RDF","ID","about","bagID","parseType","resource","nodeID","aboutEach","aboutEachPrefix"],c.NCNAME_MATCHER=/^([A-Za-z\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}_])([A-Za-z\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}_\-.0-9#xB7\u{0300}-\u{036F}\u{203F}-\u{2040}])*$/u,function(t){t[t["RESOURCE"]=0]="RESOURCE",t[t["PROPERTY"]=1]="PROPERTY"}(u=e.ParseType||(e.ParseType={}))},70742:function(t,e,a){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,a,r){void 0===r&&(r=a),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[a]}})}:function(t,e,a,r){void 0===r&&(r=a),t[r]=e[a]}),i=this&&this.__exportStar||function(t,e){for(var a in t)"default"===a||Object.prototype.hasOwnProperty.call(e,a)||r(e,t,a)};Object.defineProperty(e,"__esModule",{value:!0}),i(a(24806),e)},24806:function(t,e){"use strict";function a(t,e){e=e||"";const a=e.indexOf("#");if(a>0&&(e=e.substr(0,a)),!t.length){if(e.indexOf(":")<0)throw new Error(`Found invalid baseIRI '${e}' for value '${t}'`);return e}if(t.startsWith("?")){const a=e.indexOf("?");return a>0&&(e=e.substr(0,a)),e+t}if(t.startsWith("#"))return e+t;if(!e.length){const e=t.indexOf(":");if(e<0)throw new Error(`Found invalid relative IRI '${t}' for a missing baseIRI`);return i(t,e)}const n=t.indexOf(":");if(n>=0)return i(t,n);const s=e.indexOf(":");if(s<0)throw new Error(`Found invalid baseIRI '${e}' for value '${t}'`);const o=e.substr(0,s+1);if(0===t.indexOf("//"))return o+i(t,n);let c;if(e.indexOf("//",s)===s+1){if(c=e.indexOf("/",s+3),c<0)return e.length>s+3?e+"/"+i(t,n):o+i(t,n)}else if(c=e.indexOf("/",s+1),c<0)return o+i(t,n);if(0===t.indexOf("/"))return e.substr(0,c)+r(t);let u=e.substr(c);const l=u.lastIndexOf("/");return l>=0&&l<u.length-1&&(u=u.substr(0,l+1),"."===t[0]&&"."!==t[1]&&"/"!==t[1]&&t[2]&&(t=t.substr(1))),t=u+t,t=r(t),e.substr(0,c)+t}function r(t){const e=[];let a=0;while(a<t.length)switch(t[a]){case"/":if("."===t[a+1])if("."===t[a+2]){if(!n(t[a+3])){e.push([]),a++;break}e.pop(),t[a+3]||e.push([]),a+=3}else{if(!n(t[a+2])){e.push([]),a++;break}t[a+2]||e.push([]),a+=2}else e.push([]),a++;break;case"#":case"?":e.length||e.push([]),e[e.length-1].push(t.substr(a)),a=t.length;break;default:e.length||e.push([]),e[e.length-1].push(t[a]),a++;break}return"/"+e.map((t=>t.join(""))).join("/")}function i(t,e){let a=e+1;e>=0?"/"===t[e+1]&&"/"===t[e+2]&&(a=e+3):"/"===t[0]&&"/"===t[1]&&(a=2);const i=t.indexOf("/",a);if(i<0)return t;const n=t.substr(0,i),s=t.substr(i);return n+r(s)}function n(t){return!t||"#"===t||"?"===t||"/"===t}Object.defineProperty(e,"__esModule",{value:!0}),e.removeDotSegmentsOfPath=e.removeDotSegments=e.resolve=void 0,e.resolve=a,e.removeDotSegments=r,e.removeDotSegmentsOfPath=i},64043:function(t,e,a){var r=a(48287)["Buffer"];(function(t){t.parser=function(t,e){return new n(t,e)},t.SAXParser=n,t.SAXStream=d,t.createStream=l,t.MAX_BUFFER_LENGTH=65536;var e,i=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function n(e,a){if(!(this instanceof n))return new n(e,a);var r=this;o(r),r.q=r.c="",r.bufferCheckPosition=t.MAX_BUFFER_LENGTH,r.opt=a||{},r.opt.lowercase=r.opt.lowercase||r.opt.lowercasetags,r.looseCase=r.opt.lowercase?"toLowerCase":"toUpperCase",r.tags=[],r.closed=r.closedRoot=r.sawRoot=!1,r.tag=r.error=null,r.strict=!!e,r.noscript=!(!e&&!r.opt.noscript),r.state=S.BEGIN,r.strictEntities=r.opt.strictEntities,r.ENTITIES=r.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),r.attribList=[],r.opt.xmlns&&(r.ns=Object.create(m)),void 0===r.opt.unquotedAttributeValues&&(r.opt.unquotedAttributeValues=!e),r.trackPosition=!1!==r.opt.position,r.trackPosition&&(r.position=r.line=r.column=0),A(r,"onready")}function s(e){for(var a=Math.max(t.MAX_BUFFER_LENGTH,10),r=0,n=0,s=i.length;n<s;n++){var o=e[i[n]].length;if(o>a)switch(i[n]){case"textNode":P(e);break;case"cdata":O(e,"oncdata",e.cdata),e.cdata="";break;case"script":O(e,"onscript",e.script),e.script="";break;default:C(e,"Max buffer length exceeded: "+i[n])}r=Math.max(r,o)}var c=t.MAX_BUFFER_LENGTH-r;e.bufferCheckPosition=c+e.position}function o(t){for(var e=0,a=i.length;e<a;e++)t[i[e]]=""}function c(t){P(t),""!==t.cdata&&(O(t,"oncdata",t.cdata),t.cdata=""),""!==t.script&&(O(t,"onscript",t.script),t.script="")}t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(t){function e(){}e.prototype=t;var a=new e;return a}),Object.keys||(Object.keys=function(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push(a);return e}),n.prototype={end:function(){R(this)},write:q,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){c(this)}};try{e=a(88310).Stream}catch(X){e=function(){}}e||(e=function(){});var u=t.EVENTS.filter((function(t){return"error"!==t&&"end"!==t}));function l(t,e){return new d(t,e)}function d(t,a){if(!(this instanceof d))return new d(t,a);e.apply(this),this._parser=new n(t,a),this.writable=!0,this.readable=!0;var r=this;this._parser.onend=function(){r.emit("end")},this._parser.onerror=function(t){r.emit("error",t),r._parser.error=null},this._decoder=null,u.forEach((function(t){Object.defineProperty(r,"on"+t,{get:function(){return r._parser["on"+t]},set:function(e){if(!e)return r.removeAllListeners(t),r._parser["on"+t]=e,e;r.on(t,e)},enumerable:!0,configurable:!1})}))}d.prototype=Object.create(e.prototype,{constructor:{value:d}}),d.prototype.write=function(t){if("function"===typeof r&&"function"===typeof r.isBuffer&&r.isBuffer(t)){if(!this._decoder){var e=a(83141).StringDecoder;this._decoder=new e("utf8")}t=this._decoder.write(t)}return this._parser.write(t.toString()),this.emit("data",t),!0},d.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},d.prototype.on=function(t,a){var r=this;return r._parser["on"+t]||-1===u.indexOf(t)||(r._parser["on"+t]=function(){var e=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),r.emit.apply(r,e)}),e.prototype.on.call(r,t,a)};var h="[CDATA[",p="DOCTYPE",f="http://www.w3.org/XML/1998/namespace",T="http://www.w3.org/2000/xmlns/",m={xml:f,xmlns:T},E=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,b=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,g=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function _(t){return" "===t||"\n"===t||"\r"===t||"\t"===t}function I(t){return'"'===t||"'"===t}function D(t){return">"===t||_(t)}function F(t,e){return t.test(e)}function y(t,e){return!F(t,e)}var S=0;for(var w in t.STATE={BEGIN:S++,BEGIN_WHITESPACE:S++,TEXT:S++,TEXT_ENTITY:S++,OPEN_WAKA:S++,SGML_DECL:S++,SGML_DECL_QUOTED:S++,DOCTYPE:S++,DOCTYPE_QUOTED:S++,DOCTYPE_DTD:S++,DOCTYPE_DTD_QUOTED:S++,COMMENT_STARTING:S++,COMMENT:S++,COMMENT_ENDING:S++,COMMENT_ENDED:S++,CDATA:S++,CDATA_ENDING:S++,CDATA_ENDING_2:S++,PROC_INST:S++,PROC_INST_BODY:S++,PROC_INST_ENDING:S++,OPEN_TAG:S++,OPEN_TAG_SLASH:S++,ATTRIB:S++,ATTRIB_NAME:S++,ATTRIB_NAME_SAW_WHITE:S++,ATTRIB_VALUE:S++,ATTRIB_VALUE_QUOTED:S++,ATTRIB_VALUE_CLOSED:S++,ATTRIB_VALUE_UNQUOTED:S++,ATTRIB_VALUE_ENTITY_Q:S++,ATTRIB_VALUE_ENTITY_U:S++,CLOSE_TAG:S++,CLOSE_TAG_SAW_WHITE:S++,SCRIPT:S++,SCRIPT_ENDING:S++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach((function(e){var a=t.ENTITIES[e],r="number"===typeof a?String.fromCharCode(a):a;t.ENTITIES[e]=r})),t.STATE)t.STATE[t.STATE[w]]=w;function A(t,e,a){t[e]&&t[e](a)}function O(t,e,a){t.textNode&&P(t),A(t,e,a)}function P(t){t.textNode=v(t.opt,t.textNode),t.textNode&&A(t,"ontext",t.textNode),t.textNode=""}function v(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function C(t,e){return P(t),t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c),e=new Error(e),t.error=e,A(t,"onerror",e),t}function R(t){return t.sawRoot&&!t.closedRoot&&x(t,"Unclosed root tag"),t.state!==S.BEGIN&&t.state!==S.BEGIN_WHITESPACE&&t.state!==S.TEXT&&C(t,"Unexpected end"),P(t),t.c="",t.closed=!0,A(t,"onend"),n.call(t,t.strict,t.opt),t}function x(t,e){if("object"!==typeof t||!(t instanceof n))throw new Error("bad call to strictFail");t.strict&&C(t,e)}function L(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,a=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(a.ns=e.ns),t.attribList.length=0,O(t,"onopentagstart",a)}function j(t,e){var a=t.indexOf(":"),r=a<0?["",t]:t.split(":"),i=r[0],n=r[1];return e&&"xmlns"===t&&(i="xmlns",n=""),{prefix:i,local:n}}function M(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),-1!==t.attribList.indexOf(t.attribName)||t.tag.attributes.hasOwnProperty(t.attribName))t.attribName=t.attribValue="";else{if(t.opt.xmlns){var e=j(t.attribName,!0),a=e.prefix,r=e.local;if("xmlns"===a)if("xml"===r&&t.attribValue!==f)x(t,"xml: prefix must be bound to "+f+"\nActual: "+t.attribValue);else if("xmlns"===r&&t.attribValue!==T)x(t,"xmlns: prefix must be bound to "+T+"\nActual: "+t.attribValue);else{var i=t.tag,n=t.tags[t.tags.length-1]||t;i.ns===n.ns&&(i.ns=Object.create(n.ns)),i.ns[r]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else t.tag.attributes[t.attribName]=t.attribValue,O(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}}function U(t,e){if(t.opt.xmlns){var a=t.tag,r=j(t.tagName);a.prefix=r.prefix,a.local=r.local,a.uri=a.ns[r.prefix]||"",a.prefix&&!a.uri&&(x(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),a.uri=r.prefix);var i=t.tags[t.tags.length-1]||t;a.ns&&i.ns!==a.ns&&Object.keys(a.ns).forEach((function(e){O(t,"onopennamespace",{prefix:e,uri:a.ns[e]})}));for(var n=0,s=t.attribList.length;n<s;n++){var o=t.attribList[n],c=o[0],u=o[1],l=j(c,!0),d=l.prefix,h=l.local,p=""===d?"":a.ns[d]||"",f={name:c,value:u,prefix:d,local:h,uri:p};d&&"xmlns"!==d&&!p&&(x(t,"Unbound namespace prefix: "+JSON.stringify(d)),f.uri=d),t.tag.attributes[c]=f,O(t,"onattribute",f)}t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,t.tags.push(t.tag),O(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase()?t.state=S.TEXT:t.state=S.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function B(t){if(!t.tagName)return x(t,"Weird empty close tag."),t.textNode+="</>",void(t.state=S.TEXT);if(t.script){if("script"!==t.tagName)return t.script+="</"+t.tagName+">",t.tagName="",void(t.state=S.SCRIPT);O(t,"onscript",t.script),t.script=""}var e=t.tags.length,a=t.tagName;t.strict||(a=a[t.looseCase]());var r=a;while(e--){var i=t.tags[e];if(i.name===r)break;x(t,"Unexpected close tag")}if(e<0)return x(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",void(t.state=S.TEXT);t.tagName=a;var n=t.tags.length;while(n-- >e){var s=t.tag=t.tags.pop();t.tagName=t.tag.name,O(t,"onclosetag",t.tagName);var o={};for(var c in s.ns)o[c]=s.ns[c];var u=t.tags[t.tags.length-1]||t;t.opt.xmlns&&s.ns!==u.ns&&Object.keys(s.ns).forEach((function(e){var a=s.ns[e];O(t,"onclosenamespace",{prefix:e,uri:a})}))}0===e&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=S.TEXT}function G(t){var e,a=t.entity,r=a.toLowerCase(),i="";return t.ENTITIES[a]?t.ENTITIES[a]:t.ENTITIES[r]?t.ENTITIES[r]:(a=r,"#"===a.charAt(0)&&("x"===a.charAt(1)?(a=a.slice(2),e=parseInt(a,16),i=e.toString(16)):(a=a.slice(1),e=parseInt(a,10),i=e.toString(10))),a=a.replace(/^0+/,""),isNaN(e)||i.toLowerCase()!==a?(x(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(e))}function k(t,e){"<"===e?(t.state=S.OPEN_WAKA,t.startTagPosition=t.position):_(e)||(x(t,"Non-whitespace before first tag."),t.textNode=e,t.state=S.TEXT)}function V(t,e){var a="";return e<t.length&&(a=t.charAt(e)),a}function q(e){var a=this;if(this.error)throw this.error;if(a.closed)return C(a,"Cannot write after close. Assign an onready handler.");if(null===e)return R(a);"object"===typeof e&&(e=e.toString());var r=0,i="";while(1){if(i=V(e,r++),a.c=i,!i)break;switch(a.trackPosition&&(a.position++,"\n"===i?(a.line++,a.column=0):a.column++),a.state){case S.BEGIN:if(a.state=S.BEGIN_WHITESPACE,"\ufeff"===i)continue;k(a,i);continue;case S.BEGIN_WHITESPACE:k(a,i);continue;case S.TEXT:if(a.sawRoot&&!a.closedRoot){var n=r-1;while(i&&"<"!==i&&"&"!==i)i=V(e,r++),i&&a.trackPosition&&(a.position++,"\n"===i?(a.line++,a.column=0):a.column++);a.textNode+=e.substring(n,r-1)}"<"!==i||a.sawRoot&&a.closedRoot&&!a.strict?(_(i)||a.sawRoot&&!a.closedRoot||x(a,"Text data outside of root node."),"&"===i?a.state=S.TEXT_ENTITY:a.textNode+=i):(a.state=S.OPEN_WAKA,a.startTagPosition=a.position);continue;case S.SCRIPT:"<"===i?a.state=S.SCRIPT_ENDING:a.script+=i;continue;case S.SCRIPT_ENDING:"/"===i?a.state=S.CLOSE_TAG:(a.script+="<"+i,a.state=S.SCRIPT);continue;case S.OPEN_WAKA:if("!"===i)a.state=S.SGML_DECL,a.sgmlDecl="";else if(_(i));else if(F(E,i))a.state=S.OPEN_TAG,a.tagName=i;else if("/"===i)a.state=S.CLOSE_TAG,a.tagName="";else if("?"===i)a.state=S.PROC_INST,a.procInstName=a.procInstBody="";else{if(x(a,"Unencoded <"),a.startTagPosition+1<a.position){var o=a.position-a.startTagPosition;i=new Array(o).join(" ")+i}a.textNode+="<"+i,a.state=S.TEXT}continue;case S.SGML_DECL:if(a.sgmlDecl+i==="--"){a.state=S.COMMENT,a.comment="",a.sgmlDecl="";continue}a.doctype&&!0!==a.doctype&&a.sgmlDecl?(a.state=S.DOCTYPE_DTD,a.doctype+="<!"+a.sgmlDecl+i,a.sgmlDecl=""):(a.sgmlDecl+i).toUpperCase()===h?(O(a,"onopencdata"),a.state=S.CDATA,a.sgmlDecl="",a.cdata=""):(a.sgmlDecl+i).toUpperCase()===p?(a.state=S.DOCTYPE,(a.doctype||a.sawRoot)&&x(a,"Inappropriately located doctype declaration"),a.doctype="",a.sgmlDecl=""):">"===i?(O(a,"onsgmldeclaration",a.sgmlDecl),a.sgmlDecl="",a.state=S.TEXT):I(i)?(a.state=S.SGML_DECL_QUOTED,a.sgmlDecl+=i):a.sgmlDecl+=i;continue;case S.SGML_DECL_QUOTED:i===a.q&&(a.state=S.SGML_DECL,a.q=""),a.sgmlDecl+=i;continue;case S.DOCTYPE:">"===i?(a.state=S.TEXT,O(a,"ondoctype",a.doctype),a.doctype=!0):(a.doctype+=i,"["===i?a.state=S.DOCTYPE_DTD:I(i)&&(a.state=S.DOCTYPE_QUOTED,a.q=i));continue;case S.DOCTYPE_QUOTED:a.doctype+=i,i===a.q&&(a.q="",a.state=S.DOCTYPE);continue;case S.DOCTYPE_DTD:"]"===i?(a.doctype+=i,a.state=S.DOCTYPE):"<"===i?(a.state=S.OPEN_WAKA,a.startTagPosition=a.position):I(i)?(a.doctype+=i,a.state=S.DOCTYPE_DTD_QUOTED,a.q=i):a.doctype+=i;continue;case S.DOCTYPE_DTD_QUOTED:a.doctype+=i,i===a.q&&(a.state=S.DOCTYPE_DTD,a.q="");continue;case S.COMMENT:"-"===i?a.state=S.COMMENT_ENDING:a.comment+=i;continue;case S.COMMENT_ENDING:"-"===i?(a.state=S.COMMENT_ENDED,a.comment=v(a.opt,a.comment),a.comment&&O(a,"oncomment",a.comment),a.comment=""):(a.comment+="-"+i,a.state=S.COMMENT);continue;case S.COMMENT_ENDED:">"!==i?(x(a,"Malformed comment"),a.comment+="--"+i,a.state=S.COMMENT):a.doctype&&!0!==a.doctype?a.state=S.DOCTYPE_DTD:a.state=S.TEXT;continue;case S.CDATA:"]"===i?a.state=S.CDATA_ENDING:a.cdata+=i;continue;case S.CDATA_ENDING:"]"===i?a.state=S.CDATA_ENDING_2:(a.cdata+="]"+i,a.state=S.CDATA);continue;case S.CDATA_ENDING_2:">"===i?(a.cdata&&O(a,"oncdata",a.cdata),O(a,"onclosecdata"),a.cdata="",a.state=S.TEXT):"]"===i?a.cdata+="]":(a.cdata+="]]"+i,a.state=S.CDATA);continue;case S.PROC_INST:"?"===i?a.state=S.PROC_INST_ENDING:_(i)?a.state=S.PROC_INST_BODY:a.procInstName+=i;continue;case S.PROC_INST_BODY:if(!a.procInstBody&&_(i))continue;"?"===i?a.state=S.PROC_INST_ENDING:a.procInstBody+=i;continue;case S.PROC_INST_ENDING:">"===i?(O(a,"onprocessinginstruction",{name:a.procInstName,body:a.procInstBody}),a.procInstName=a.procInstBody="",a.state=S.TEXT):(a.procInstBody+="?"+i,a.state=S.PROC_INST_BODY);continue;case S.OPEN_TAG:F(b,i)?a.tagName+=i:(L(a),">"===i?U(a):"/"===i?a.state=S.OPEN_TAG_SLASH:(_(i)||x(a,"Invalid character in tag name"),a.state=S.ATTRIB));continue;case S.OPEN_TAG_SLASH:">"===i?(U(a,!0),B(a)):(x(a,"Forward-slash in opening tag not followed by >"),a.state=S.ATTRIB);continue;case S.ATTRIB:if(_(i))continue;">"===i?U(a):"/"===i?a.state=S.OPEN_TAG_SLASH:F(E,i)?(a.attribName=i,a.attribValue="",a.state=S.ATTRIB_NAME):x(a,"Invalid attribute name");continue;case S.ATTRIB_NAME:"="===i?a.state=S.ATTRIB_VALUE:">"===i?(x(a,"Attribute without value"),a.attribValue=a.attribName,M(a),U(a)):_(i)?a.state=S.ATTRIB_NAME_SAW_WHITE:F(b,i)?a.attribName+=i:x(a,"Invalid attribute name");continue;case S.ATTRIB_NAME_SAW_WHITE:if("="===i)a.state=S.ATTRIB_VALUE;else{if(_(i))continue;x(a,"Attribute without value"),a.tag.attributes[a.attribName]="",a.attribValue="",O(a,"onattribute",{name:a.attribName,value:""}),a.attribName="",">"===i?U(a):F(E,i)?(a.attribName=i,a.state=S.ATTRIB_NAME):(x(a,"Invalid attribute name"),a.state=S.ATTRIB)}continue;case S.ATTRIB_VALUE:if(_(i))continue;I(i)?(a.q=i,a.state=S.ATTRIB_VALUE_QUOTED):(a.opt.unquotedAttributeValues||C(a,"Unquoted attribute value"),a.state=S.ATTRIB_VALUE_UNQUOTED,a.attribValue=i);continue;case S.ATTRIB_VALUE_QUOTED:if(i!==a.q){"&"===i?a.state=S.ATTRIB_VALUE_ENTITY_Q:a.attribValue+=i;continue}M(a),a.q="",a.state=S.ATTRIB_VALUE_CLOSED;continue;case S.ATTRIB_VALUE_CLOSED:_(i)?a.state=S.ATTRIB:">"===i?U(a):"/"===i?a.state=S.OPEN_TAG_SLASH:F(E,i)?(x(a,"No whitespace between attributes"),a.attribName=i,a.attribValue="",a.state=S.ATTRIB_NAME):x(a,"Invalid attribute name");continue;case S.ATTRIB_VALUE_UNQUOTED:if(!D(i)){"&"===i?a.state=S.ATTRIB_VALUE_ENTITY_U:a.attribValue+=i;continue}M(a),">"===i?U(a):a.state=S.ATTRIB;continue;case S.CLOSE_TAG:if(a.tagName)">"===i?B(a):F(b,i)?a.tagName+=i:a.script?(a.script+="</"+a.tagName,a.tagName="",a.state=S.SCRIPT):(_(i)||x(a,"Invalid tagname in closing tag"),a.state=S.CLOSE_TAG_SAW_WHITE);else{if(_(i))continue;y(E,i)?a.script?(a.script+="</"+i,a.state=S.SCRIPT):x(a,"Invalid tagname in closing tag."):a.tagName=i}continue;case S.CLOSE_TAG_SAW_WHITE:if(_(i))continue;">"===i?B(a):x(a,"Invalid characters in closing tag");continue;case S.TEXT_ENTITY:case S.ATTRIB_VALUE_ENTITY_Q:case S.ATTRIB_VALUE_ENTITY_U:var c,u;switch(a.state){case S.TEXT_ENTITY:c=S.TEXT,u="textNode";break;case S.ATTRIB_VALUE_ENTITY_Q:c=S.ATTRIB_VALUE_QUOTED,u="attribValue";break;case S.ATTRIB_VALUE_ENTITY_U:c=S.ATTRIB_VALUE_UNQUOTED,u="attribValue";break}if(";"===i){var l=G(a);a.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(l)?(a.entity="",a.state=c,a.write(l)):(a[u]+=l,a.entity="",a.state=c)}else F(a.entity.length?N:g,i)?a.entity+=i:(x(a,"Invalid character in entity name"),a[u]+="&"+a.entity+i,a.entity="",a.state=c);continue;default:throw new Error(a,"Unknown state: "+a.state)}}return a.position>=a.bufferCheckPosition&&s(a),a}
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */S=t.STATE,String.fromCodePoint||function(){var t=String.fromCharCode,e=Math.floor,a=function(){var a,r,i=16384,n=[],s=-1,o=arguments.length;if(!o)return"";var c="";while(++s<o){var u=Number(arguments[s]);if(!isFinite(u)||u<0||u>1114111||e(u)!==u)throw RangeError("Invalid code point: "+u);u<=65535?n.push(u):(u-=65536,a=55296+(u>>10),r=u%1024+56320,n.push(a,r)),(s+1===o||n.length>i)&&(c+=t.apply(null,n),n.length=0)}return c};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:a,configurable:!0,writable:!0}):String.fromCodePoint=a}()})(e)}}]);
//# sourceMappingURL=611.77fb901c.js.map