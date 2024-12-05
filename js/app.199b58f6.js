(function(){var e={52283:function(e,t,a){"use strict";var n=a(85471),r=a(95785),i=a(85372),o=function(){var e=this,t=e._self._c;return t(r.A,{attrs:{id:"inspire"}},[t("Topbar"),t(i.A,[t("router-view")],1),t("Footer")],1)},s=[],c=a(47210),d=a(98834),l=a(53275),u=function(){var e=this,t=e._self._c;return t(l.A,{attrs:{padless:""}},[t(c.A,{staticClass:"flex",attrs:{flat:"",tile:"",color:"#f5f5f5"}},[t(d.OQ,{staticClass:"text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),t("strong",[t("a",{attrs:{href:"https://www.cefriel.com"}},[e._v("Cefriel")])])])],1)],1)},m=[],p={name:"Footer"},f=p,h=a(81656),y=(0,h.A)(f,u,m,!1,null,null,null),g=y.exports,b=a(15254),_=a(63243),v=a(71735),w=function(){var e=this,t=e._self._c;return t(b.A,{attrs:{app:"",flat:"","clipped-left":""}},[t("router-link",{attrs:{to:"/"}},[t(_.A,{staticClass:"mx-2",attrs:{src:e.app_logo,"max-height":"40","max-width":"40",contain:""}})],1),t(v.sw,[e._v(e._s(e.app_name))])],1)},A=[],k={name:"App",data(){return{app_name:"Cefriel RDF Metadata Generator",app_logo:a(99467),path_items:[]}}},T=k,C=(0,h.A)(T,w,A,!1,null,null,null),x=C.exports,S={name:"App",components:{Footer:g,Topbar:x},data(){return{app_name:"Cefriel RDF Metadata Generator",app_logo:a(33153),path_items:[],username:window.localStorage.getItem("auth-user")}},methods:{}},j=S,U=(0,h.A)(j,o,s,!1,null,null,null),P=U.exports,O=a(36786);n.Ay.use(O.A);var D=new O.A({theme:{themes:{light:{primary:"#757575"}}}}),N=a(40173),R=a(9238),L=a(51526),E=a(46278),F=a(58230),q=a(18412),I=a(89168),M=function(){var e=this,t=e._self._c;return t("div",[t("PageTitle",{attrs:{title:e.asset_type,show_breadcrumbs:!0}}),t(q.A,{staticClass:"px-10 my-2"},[t(L.A,{staticClass:"py-2",attrs:{cols:"8"}},[t("p",[t("b",[e._v("Fill the form with all the metadata and download the RDF")]),e._v(" representation using "),t("a",{attrs:{href:"https://w3id.org/mobilitydcat-ap/"}},[e._v("mobilityDCAT-AP")]),e._v(". Test and experiment to learn how different information should be described in RDF according to the mobilityDCAT-AP specification. The form is compliant with the minimum profile required by mobilityDCAT-AP."),t("br"),t("br"),e._v(" This page is powered by "),t("b",[e._v("KCONG (Knowledge Catalogue and Governance)")]),e._v(" a complete (meta)data catalogue solution developed by "),t("a",{attrs:{href:"https://www.cefriel.com/"}},[e._v("Cefriel")]),e._v(". If you want to know more visit "),t("a",{attrs:{href:"https://kcong.cefriel.com/"}},[e._v("https://kcong.cefriel.com/")]),e._v(". The page is client-side only so all the information inserted are not collected/stored and can not be retrieved if the page is reloaded.")])]),t(L.A,{staticClass:"text-center py-2",attrs:{cols:"4"}},[t("img",{staticStyle:{"max-height":"100px"},attrs:{src:a(33153),alt:"Company Logo"}})])],1),e._l(e.alert_messages,(function(e,a){return t("Alert",{key:a,attrs:{message:e.message,alert_type:e.alert_type}})})),t(E.A,[t(q.A,[t(L.A,{attrs:{cols:"6"}},[t(F.A,{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("JsonForm",{key:e.formKey,attrs:{value:e.asset,schema:e.asset_schema,options:e.options},on:{"update:model":e.set_asset_value}})],1),t("p",[t("br")]),t(R.A,{staticStyle:{"margin-top":"10px"},on:{click:e.create_object}},[e._v("Generate")])],1),t(L.A,{attrs:{cols:"6"}},[e.saved_asset_rdf?t("div",{staticClass:"rdf-container"},[t(I.A,{staticClass:"mb-3",attrs:{items:e.formats,label:"Select RDF Format"},model:{value:e.selectedFormat,callback:function(t){e.selectedFormat=t},expression:"selectedFormat"}}),t("rdf-editor",{staticClass:"h-full overflow-hidden",attrs:{format:e.selectedFormat,readonly:!0,prefixes:e.editorPrefixes,"auto-parse":"","parse-delay":"1000"},domProps:{value:e.saved_asset_rdf},on:{"parsing-failed":e.onParsingFailed,"prefixes-parsed":e.onPrefixesParsed,serialized:e.onSerialized}}),t(R.A,{staticClass:"mb-2",attrs:{color:"primary"},on:{click:e.downloadRDF}},[e._v("Download RDF")])],1):e._e()])],1)],1)],2)},B=[],G=(a(44114),a(14603),a(47566),a(98721),function(){var e=this,t=e._self._c;return t(E.A,[t(F.A,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-jsf",{attrs:{schema:e.schema,options:e.options},on:{input:function(t){return e.$emit("update:model",t)}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)}),z=[],K=a(73244),Y=(a(88605),{name:"JsonForm",components:{VJsf:K.A},props:{schema:Object,options:Object,value:Object},emits:["update:model"],data(){return{valid:!1,model:this.value||{}}},watch:{value:{handler(e){this.model=e||{}},deep:!0,immediate:!0}},methods:{}}),H=Y,Q=(0,h.A)(H,G,z,!1,null,null,null),W=Q.exports,J=a(89311),V=function(){var e=this,t=e._self._c;return t(E.A,[t(J.A,{staticClass:"text-center",attrs:{value:!!e.message,type:e.alert_type,dismissible:""}},[e._v(" "+e._s(e.message)+" ")])],1)},$=[],X={name:"Alert",props:{message:String,alert_type:String}},Z=X,ee=(0,h.A)(Z,V,$,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e._self._c;return t(E.A,{staticClass:"page-top py-4 mb-8",attrs:{fluid:""}},[t(q.A,[t(L.A,{attrs:{cols:"9"}},[t(q.A,{staticClass:"ml-4"},[t(L.A,[t("h1",{staticClass:"text-capitalize"},[e._v(e._s(e.title||e.remove_underscore))])])],1),null!=e.subtitle?t(q.A,{staticClass:"ml-4"},[t(L.A,[t("h2",{staticClass:"text-capitalize"},[e._v(e._s(e.subtitle||e.remove_underscore))])])],1):e._e(),null!=e.third_line?t(q.A,{staticClass:"ml-4"},[t(L.A,[t("h3",[e._v(" "+e._s(e.third_line||e.remove_underscore)+" ")])])],1):e._e()],1),t(L.A,{attrs:{cols:"3"}},[null!=e.image?t(q.A,[t(_.A,{attrs:{"max-height":"160px",position:"bottom center",src:e.image,contain:""}})],1):e._e()],1)],1)],1)},ne=[],re={name:"PageTitle",components:{},props:{title:{type:String,required:!0},subtitle:{type:String,required:!1},third_line:{type:String,required:!1},freetext:{type:String,required:!1},image:{type:String,required:!1},show_breadcrumbs:{type:Boolean,required:!0}}},ie=re,oe=(0,h.A)(ie,ae,ne,!1,null,"46f3abe2",null),se=oe.exports,ce='{%- set prefix="https://knowledge.c-innovationhub.com/cefriel/data/" -%}\r\n{%- set dcat_content = obj.header -%}\r\n{%- set json_content = obj.content -%}\r\n{%- set asset_name = slugify(dcat_content.name) -%}\r\n{%- set asset_type = "MobilityDataset" -%}\r\n{%- set asset_id = \'<\' + prefix + asset_type + \'#\' + asset_name + \'>\' -%}\r\n{%- set catalogue_id= \'<\' + prefix + \'CefrielDataCatalogue#\' + asset_type + \'>\' -%}\r\n{%- set catalogue_record_id = \'<\' + prefix + \'CefrielDataCatalogueRecord/\' + asset_type + \'#\' + asset_name + \'>\' -%}\r\n{%- set asset_type_url = data_platform_url + \'/assets/\' + asset_name -%}\r\n{%- set freq_iri = {\r\n    "Continuously": "http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT",\r\n    "Never (one-time provision)": "http://publications.europa.eu/resource/authority/frequency/NEVER",\r\n    "On occurrence / irregularly": "http://publications.europa.eu/resource/authority/frequency/IRREG",\r\n    "Up to 1min": "https://w3id.org/mobilitydcat-ap/update-frequency/1min",\r\n    "Up to 5min": "https://w3id.org/mobilitydcat-ap/update-frequency/5min",\r\n    "Up to 10 min": "https://w3id.org/mobilitydcat-ap/update-frequency/10min",\r\n    "Up to 15 min": "https://w3id.org/mobilitydcat-ap/update-frequency/15min",\r\n    "Up to 30 min": "https://w3id.org/mobilitydcat-ap/update-frequency/30min",\r\n    "Up to 1h": "http://publications.europa.eu/resource/authority/frequency/HOURLY",\r\n    "Up to 2h": "http://publications.europa.eu/resource/authority/frequency/BIHOURLY",\r\n    "Up to 3h": "http://publications.europa.eu/resource/authority/frequency/TRIHOURLY",\r\n    "Up to 12h": "https://w3id.org/mobilitydcat-ap/update-frequency/12h",\r\n    "Up to 24h": "http://publications.europa.eu/resource/authority/frequency/DAILY",\r\n    "Up to Weekly": "http://publications.europa.eu/resource/authority/frequency/WEEKLY",\r\n    "Up to Monthly": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",\r\n    "Up to every 2 months": "http://publications.europa.eu/resource/authority/frequency/BIMONTHLY",\r\n    "Up to every 3 months": "http://publications.europa.eu/resource/authority/frequency/QUARTERLY",\r\n    "Up to every 6 months": "https://w3id.org/mobilitydcat-ap/update-frequency/ANNUAL_2",\r\n    "Up to Annual": "http://publications.europa.eu/resource/authority/frequency/ANNUAL",\r\n    "Up to Biennial": "http://publications.europa.eu/resource/authority/frequency/BIENNIAL",\r\n    "Up to Triennial": "http://publications.europa.eu/resource/authority/frequency/TRIENNIAL",\r\n    "Up to Quadrennial": "http://publications.europa.eu/resource/authority/frequency/QUADRENNIAL",\r\n    "Up to Quinquennial": "http://publications.europa.eu/resource/authority/frequency/QUINQUENNIAL",\r\n    "Up to Decennial": "http://publications.europa.eu/resource/authority/frequency/DECENNIAL",\r\n    "Up to Bidecennial": "http://publications.europa.eu/resource/authority/frequency/BIDECENNIAL",\r\n    "Up to Tridecennial": "http://publications.europa.eu/resource/authority/frequency/TRIDECENNIAL",\r\n    "Unknown": "http://publications.europa.eu/resource/authority/frequency/UNKNOWN"\r\n  }\r\n-%}\r\n\r\n@prefix dcterms: <http://purl.org/dc/terms/> .\r\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\r\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\r\n@prefix dcat: <http://www.w3.org/ns/dcat#> .\r\n@prefix vcard: <http://www.w3.org/2006/vcard/> .\r\n@prefix foaf: <http://xmlns.com/foaf/0.1/> .\r\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\r\n@prefix mobilitydcatap: <https://w3id.org/mobilitydcat-ap#> .\r\n@prefix mdata: <https://w3id.org/mobilitydcat-ap/mobility-data-standard/> .\r\n@prefix mtheme: <https://w3id.org/mobilitydcat-ap/mobility-theme/> .\r\n\r\n\r\n{{catalogue_id | safe}} rdf:type dcat:Catalog;\r\n\tdcterms:title "Cefriel RDF Metadata Generator for mobilityDCAT-AP";\r\n\tdcterms:description "Cefriel RDF Metadata Generator for mobilityDCAT-AP powered by KCONG"@en;\r\n\tdcterms:publisher [\r\n\t    rdf:type foaf:Agent;\r\n\t    foaf:name "Mobility Data Publisher";\r\n\t    foaf:mbox "no-reply@cefriel.com";\r\n\t];\r\n\tdcterms:dataset {{asset_id | safe}};\r\n\tdcat:record {{catalogue_record_id | safe}};\r\n\tfoaf:homepage <https://kcong.cefriel.com/>.\r\n\r\n\r\n{{catalogue_record_id | safe}} rdf:type dcat:CatalogRecord ;\r\n\tdcterms:modified "{{dcat_content.last_updated}}"^^xsd:dateTime ;\r\n\tdcterms:created "{{dcat_content.creation_time}}"^^xsd:dateTime ;\r\n\tfoaf:primaryTopic {{asset_id  | safe}} .\r\n\r\n\r\n{{asset_id | safe}} rdf:type dcat:Dataset;\r\n    dcterms:identifier """{{dcat_content.identifier}}""";\r\n    dcterms:title "{{dcat_content.name}}";\r\n    dcterms:description """{{dcat_content.description}}""";\r\n    {%if dcat_content.publisher_name or dcat_content.publisher_email %}\r\n    dcterms:publisher [\r\n\t    rdf:type foaf:Agent;\r\n      {%if dcat_content.publisher_name %}\r\n\t    foaf:name "{{dcat_content.publisher_name}}";\r\n      {%endif%}\r\n      {%if dcat_content.publisher_email %}\r\n\t    foaf:mbox "{{dcat_content.publisher_email}}";\r\n      {%endif%}\r\n    ];\r\n    {%endif%}\r\n    \r\n    {%if json_content.mobility_themes%}\r\n    {% for mtheme in json_content.mobility_themes %}\r\n    mobilitydcatap:mobilityTheme mtheme:{{mtheme | lower | replace(" ", "-") | replace("," , "")}};\r\n    {% endfor %}\r\n    {%endif%}\r\n    {%if \'://\' in json_content.spatial_coverage %}\r\n    dcat:spatial <{{json_content.spatial_coverage}}>;\r\n    {%else%}\r\n    dcat:spatial """{{json_content.spatial_coverage}}""";\r\n    {%endif%}\r\n    {%if json_content.spatial_aggregation%}\r\n    dcat:spatialResolutionInMeters """{{json_content.spatial_aggregation}}""";\r\n    {%endif%}\r\n\r\n    {%if json_content.temporal_coverage_start or json_content.temporal_coverage_end%}\r\n    dcat:temporal [ a dcterms:PeriodOfTime;\r\n      {%if json_content.temporal_coverage_start%}\r\n\t    dcat:startDate """{{json_content.temporal_coverage_start}}""";\r\n      {%endif%}\r\n      {%if json_content.temporal_coverage_end%}\r\n\t    dcat:endDate """{{json_content.temporal_coverage_end}}""";\r\n      {%endif%}\r\n    ];\r\n    {%endif%}\r\n\r\n    {%if json_content.temporal_aggregation%}\r\n    dcat:temporalResolution """{{json_content.temporal_aggregation}}""";\r\n    {%endif%}\r\n\r\n    {%-if json_content.source_asset.id-%}\r\n    dcterms:source <{{json_content.source_asset.id}}>;\r\n    {%-endif-%}\r\n\r\n    {%- set accrual_periodicity = json_content.accrual_periodicity -%}\r\n    dcat:accrualPeriodicity <{{ freq_iri[accrual_periodicity] }}>.\r\n\r\n\r\n  {%if json_content.distributions %}\r\n  {%- for distribution in json_content.distributions -%}\r\n  {%- set distribution_id = \'<\' + prefix + asset_type + \'/Distribution#\' + asset_name + \'-\' + loop.index + \'>\' -%}\r\n  {{asset_id | safe}} dcat:distribution {{distribution_id | safe}} .\r\n\r\n  {{distribution_id | safe}} rdf:type dcat:Distribution;\r\n    mobilitydcatap:mobilityDataStandard mdata:{{distribution.data_schema | lower | replace(" ", "-")}} ;\r\n    {% if \'://\' in json_content.spatial_coverage %}\r\n    dcterms:format <{{distribution.format}}>;\r\n    {%else%}\r\n    dcterms:format "{{distribution.format}}";\r\n    {%endif%}\r\n\t  {%-if json_content.data_sample -%}\r\n    {%- for sample in json_content.data_sample -%}\r\n    adms:sample [\r\n      rdf:type dcat:Distribution;\r\n      dcat:downloadURL <{{sample.url}}>;\r\n      {%-if sample.sample_description -%}\r\n      dcterms:description """{{sample.sample_description}}"""\r\n      {%- endif -%}\r\n    ];\r\n    {%- endfor -%}\r\n\t  {%- endif -%}\r\n\tdcat:accessURL <{{distribution.access_url}}> .\r\n  {%- endfor -%}\r\n  {%- endif -%}\r\n',de=a(28019),le=a.n(de),ue=(a(35574),a(90876)),me=a(44526);const pe=new(le());var fe={name:"AssetCreate",components:{JsonForm:W,PageTitle:se,Alert:te},props:["asset_type"],data(){return{template_engine:null,template:null,valid:null,asset_schema:{},initial_asset:{},asset:{},saved_asset:{},saved_asset_rdf:null,serialized_rdf:null,alert_messages:[],selectedPdf:null,pdfUrl:null,formKey:0,parseError:null,formats:[...ue.T.keys()],selectedFormat:"text/turtle",editorPrefixes:null,options:{ajv:pe,context:{languages:a(87932)}}}},mounted(){this.asset_schema=a(73858),this.template_engine=a(61326),this.template=this.template_engine.compile(ce)},methods:{onParsingFailed(e){console.error("Parsing failed:",e.detail.error),this.parseError=e.detail.error},onPrefixesParsed(e){this.editorPrefixes||(this.editorPrefixes=Object.keys(e.detail.prefixes).join(","))},onSerialized(e){this.serialized_rdf=e.detail.value},downloadRDF(){if(!this.serialized_rdf)return void this.alert_messages.push({message:"No RDF content to download.",alert_type:"error"});const e={"text/turtle":"ttl","application/ld+json":"jsonld","application/rdf+xml":"rdf","application/trig":"trig","application/n-triples":"nt","application/n-quads":"nq","text/n3":"n3"},t=e[this.selectedFormat]||"ttl",a=new Blob([this.serialized_rdf],{type:this.selectedFormat}),n=window.URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.setAttribute("download",`rdf-data.${t}`),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)},set_asset_value(e){this.asset=e},create_object(){function e(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}this.$refs.form.validate(),this.valid?this.alert_messages=[]:this.alert_messages.push({message:"Validation error",alert_type:"error"}),this.asset.header||(this.asset.header={}),this.asset.header.creation_time=(new Date).toISOString(),this.asset.header.last_updated=(new Date).toISOString(),this.asset.header.type=this.asset_type,this.asset.header.id=(0,me.A)();try{this.saved_asset_rdf=this.template.render({obj:this.asset,data_platform_url:"https://kcong.cefriel.com/",slugify:e})}catch(t){console.log(t)}this.saved_asset_rdf=this.saved_asset_rdf.replace(/^\s*\n/gm,"")}}},he=fe,ye=(0,h.A)(he,M,B,!1,null,null,null),ge=ye.exports;n.Ay.use(N.Ay);const be=new N.Ay({mode:"history",routes:[{path:"/mobilitydcatap-ui/",name:"asset_create",component:ge,props:{asset_type:"mobilityDCAT-AP Generator Tool"},meta:{title:"Cefriel RDF Metadata Generator"}}]});var _e=be,ve=a(75993),we=a(76017);n.Ay.config.productionTip=!1,n.Ay.config.ignoredElements=["rdf-editor"],n.Ay.use(ve.Ay),_e.beforeEach(((e,t,a)=>{const{title:n}=e.meta;document.title="function"===typeof n?n(e):n,a()})),n.Ay.filter("formatDate",(function(e){if(e)return(0,we.A)(String(e)).format("MM/DD/YYYY hh:mm")})),n.Ay.filter("remove_underscore",(function(e){return e?(e=e.toString(),e.replaceAll("_"," ")):""})),new n.Ay({vuetify:D,router:_e,render:e=>e(P)}).$mount("#app")},99467:function(e,t,a){"use strict";e.exports=a.p+"img/cefriel_clogo.e1c6dc50.png"},33153:function(e,t,a){"use strict";e.exports=a.p+"img/logo.8c51896c.png"},78982:function(){},47790:function(){},73776:function(){},21638:function(){},92668:function(){},77965:function(){},66089:function(){},79368:function(){},64688:function(){},51069:function(){},15340:function(){},79838:function(){},15182:function(){},87932:function(e){"use strict";e.exports=JSON.parse('[{"code":"ab","name":"Abkhaz"},{"code":"aa","name":"Afar"},{"code":"af","name":"Afrikaans"},{"code":"ak","name":"Akan"},{"code":"sq","name":"Albanian"},{"code":"am","name":"Amharic"},{"code":"ar","name":"Arabic"},{"code":"an","name":"Aragonese"},{"code":"hy","name":"Armenian"},{"code":"as","name":"Assamese"},{"code":"av","name":"Avaric"},{"code":"ae","name":"Avestan"},{"code":"ay","name":"Aymara"},{"code":"az","name":"Azerbaijani"},{"code":"bm","name":"Bambara"},{"code":"ba","name":"Bashkir"},{"code":"eu","name":"Basque"},{"code":"be","name":"Belarusian"},{"code":"bn","name":"Bengali; Bangla"},{"code":"bh","name":"Bihari"},{"code":"bi","name":"Bislama"},{"code":"bs","name":"Bosnian"},{"code":"br","name":"Breton"},{"code":"bg","name":"Bulgarian"},{"code":"my","name":"Burmese"},{"code":"ca","name":"Catalan; Valencian"},{"code":"ch","name":"Chamorro"},{"code":"ce","name":"Chechen"},{"code":"ny","name":"Chichewa; Chewa; Nyanja"},{"code":"zh","name":"Chinese"},{"code":"cv","name":"Chuvash"},{"code":"kw","name":"Cornish"},{"code":"co","name":"Corsican"},{"code":"cr","name":"Cree"},{"code":"hr","name":"Croatian"},{"code":"cs","name":"Czech"},{"code":"da","name":"Danish"},{"code":"dv","name":"Divehi; Dhivehi; Maldivian;"},{"code":"nl","name":"Dutch"},{"code":"dz","name":"Dzongkha"},{"code":"en","name":"English"},{"code":"eo","name":"Esperanto"},{"code":"et","name":"Estonian"},{"code":"ee","name":"Ewe"},{"code":"fo","name":"Faroese"},{"code":"fj","name":"Fijian"},{"code":"fi","name":"Finnish"},{"code":"fr","name":"French"},{"code":"ff","name":"Fula; Fulah; Pulaar; Pular"},{"code":"gl","name":"Galician"},{"code":"ka","name":"Georgian"},{"code":"de","name":"German"},{"code":"el","name":"Greek, Modern"},{"code":"gn","name":"GuaranÃ­"},{"code":"gu","name":"Gujarati"},{"code":"ht","name":"Haitian; Haitian Creole"},{"code":"ha","name":"Hausa"},{"code":"he","name":"Hebrew (modern)"},{"code":"hz","name":"Herero"},{"code":"hi","name":"Hindi"},{"code":"ho","name":"Hiri Motu"},{"code":"hu","name":"Hungarian"},{"code":"ia","name":"Interlingua"},{"code":"id","name":"Indonesian"},{"code":"ie","name":"Interlingue"},{"code":"ga","name":"Irish"},{"code":"ig","name":"Igbo"},{"code":"ik","name":"Inupiaq"},{"code":"io","name":"Ido"},{"code":"is","name":"Icelandic"},{"code":"it","name":"Italian"},{"code":"iu","name":"Inuktitut"},{"code":"ja","name":"Japanese"},{"code":"jv","name":"Javanese"},{"code":"kl","name":"Kalaallisut, Greenlandic"},{"code":"kn","name":"Kannada"},{"code":"kr","name":"Kanuri"},{"code":"ks","name":"Kashmiri"},{"code":"kk","name":"Kazakh"},{"code":"km","name":"Khmer"},{"code":"ki","name":"Kikuyu, Gikuyu"},{"code":"rw","name":"Kinyarwanda"},{"code":"ky","name":"Kyrgyz"},{"code":"kv","name":"Komi"},{"code":"kg","name":"Kongo"},{"code":"ko","name":"Korean"},{"code":"ku","name":"Kurdish"},{"code":"kj","name":"Kwanyama, Kuanyama"},{"code":"la","name":"Latin"},{"code":"lb","name":"Luxembourgish, Letzeburgesch"},{"code":"lg","name":"Ganda"},{"code":"li","name":"Limburgish, Limburgan, Limburger"},{"code":"ln","name":"Lingala"},{"code":"lo","name":"Lao"},{"code":"lt","name":"Lithuanian"},{"code":"lu","name":"Luba-Katanga"},{"code":"lv","name":"Latvian"},{"code":"gv","name":"Manx"},{"code":"mk","name":"Macedonian"},{"code":"mg","name":"Malagasy"},{"code":"ms","name":"Malay"},{"code":"ml","name":"Malayalam"},{"code":"mt","name":"Maltese"},{"code":"mi","name":"MÄori"},{"code":"mr","name":"Marathi (MarÄá¹­hÄ«)"},{"code":"mh","name":"Marshallese"},{"code":"mn","name":"Mongolian"},{"code":"na","name":"Nauru"},{"code":"nv","name":"Navajo, Navaho"},{"code":"nb","name":"Norwegian BokmÃ¥l"},{"code":"nd","name":"North Ndebele"},{"code":"ne","name":"Nepali"},{"code":"ng","name":"Ndonga"},{"code":"nn","name":"Norwegian Nynorsk"},{"code":"no","name":"Norwegian"},{"code":"ii","name":"Nuosu"},{"code":"nr","name":"South Ndebele"},{"code":"oc","name":"Occitan"},{"code":"oj","name":"Ojibwe, Ojibwa"},{"code":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{"code":"om","name":"Oromo"},{"code":"or","name":"Oriya"},{"code":"os","name":"Ossetian, Ossetic"},{"code":"pa","name":"Panjabi, Punjabi"},{"code":"pi","name":"PÄli"},{"code":"fa","name":"Persian (Farsi)"},{"code":"pl","name":"Polish"},{"code":"ps","name":"Pashto, Pushto"},{"code":"pt","name":"Portuguese"},{"code":"qu","name":"Quechua"},{"code":"rm","name":"Romansh"},{"code":"rn","name":"Kirundi"},{"code":"ro","name":"Romanian, [])"},{"code":"ru","name":"Russian"},{"code":"sa","name":"Sanskrit (Saá¹ská¹›ta)"},{"code":"sc","name":"Sardinian"},{"code":"sd","name":"Sindhi"},{"code":"se","name":"Northern Sami"},{"code":"sm","name":"Samoan"},{"code":"sg","name":"Sango"},{"code":"sr","name":"Serbian"},{"code":"gd","name":"Scottish Gaelic; Gaelic"},{"code":"sn","name":"Shona"},{"code":"si","name":"Sinhala, Sinhalese"},{"code":"sk","name":"Slovak"},{"code":"sl","name":"Slovene"},{"code":"so","name":"Somali"},{"code":"st","name":"Southern Sotho"},{"code":"es","name":"Spanish; Castilian"},{"code":"su","name":"Sundanese"},{"code":"sw","name":"Swahili"},{"code":"ss","name":"Swati"},{"code":"sv","name":"Swedish"},{"code":"ta","name":"Tamil"},{"code":"te","name":"Telugu"},{"code":"tg","name":"Tajik"},{"code":"th","name":"Thai"},{"code":"ti","name":"Tigrinya"},{"code":"bo","name":"Tibetan Standard, Tibetan, Central"},{"code":"tk","name":"Turkmen"},{"code":"tl","name":"Tagalog"},{"code":"tn","name":"Tswana"},{"code":"to","name":"Tonga (Tonga Islands)"},{"code":"tr","name":"Turkish"},{"code":"ts","name":"Tsonga"},{"code":"tt","name":"Tatar"},{"code":"tw","name":"Twi"},{"code":"ty","name":"Tahitian"},{"code":"ug","name":"Uyghur, Uighur"},{"code":"uk","name":"Ukrainian"},{"code":"ur","name":"Urdu"},{"code":"uz","name":"Uzbek"},{"code":"ve","name":"Venda"},{"code":"vi","name":"Vietnamese"},{"code":"vo","name":"VolapÃ¼k"},{"code":"wa","name":"Walloon"},{"code":"cy","name":"Welsh"},{"code":"wo","name":"Wolof"},{"code":"fy","name":"Western Frisian"},{"code":"xh","name":"Xhosa"},{"code":"yi","name":"Yiddish"},{"code":"yo","name":"Yoruba"},{"code":"za","name":"Zhuang, Chuang"},{"code":"zu","name":"Zulu"}]')},73858:function(e){"use strict";e.exports=JSON.parse('{"type":"object","properties":{"header":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"identifier":{"type":"string","title":"Identifier","description":"Identifier of the data source.","default":"MY_DATASOURCE"},"name":{"type":"string","title":"Name","description":"Name of the data source","default":"My Data Source"},"description":{"type":"string","title":"Description","description":"Description of the data contained in the data source","default":"My Data Source contains mobility data about mobility things."},"publisher_name":{"type":"string","title":"Publisher name","description":"Name of the entity providing the data source","default":"Cefriel Data Publisher"},"publisher_email":{"title":"Publisher email","type":"string","description":"Email of the entity providing the data source","default":"no-reply@cefriel.com"},"access_url":{"type":"string","title":"Access URL","x-display":"hidden"},"creation_time":{"type":"string","title":"Creation date","x-display":"hidden"},"last_updated":{"type":"string","title":"Modification time","x-display":"hidden"},"type":{"type":"string","title":"Type","x-display":"hidden"},"id":{"type":"string","title":"Identifier","x-display":"hidden"}}},"content":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"mobility_themes":{"title":"Mobility themes","description":"Categories describing the data in the data source. The first level of categories defined by the mobilitydcatap:mobilityTheme vocabulary can be selected. This field is recommended.","type":"array","default":["Other"],"items":{"type":"string","enum":["Static road network data","Geometry","Road width","Number of lanes","Gradients","Junctions","Road classification","Cycle network data","Network geometry and lane character","Network detailed attributes","Network closures/diversions","Pedestrian network data","Pedestrian network geometry","Pedestrian accessibility facilities","Static traffic signs and regulations","Tunnel access conditions","Bridge access conditions","Speed limits","Other static traffic signs","Permanent access restrictions","Other traffic regulations","Traffic circulation plans","Toll information","Location of tolling stations","Identification of tolled roads","Applicable road user charges and payment methods","Payment methods for tolls","Parking, service and rest area information","Car parking locations and conditions","Car parking availability","Service and rest area locations and conditions","Service and rest area availability","Truck parking locations and conditions","Truck parking availability","Park and Ride stops","Bike-parking locations","Filling and charging stations","Location and conditions of charging points","Location and conditions of filling stations","Availability of charging points for electric vehicles","Availability of filling stations","Freight and logistics","Freight delivery regulations","Location of delivery areas","Availability of delivery areas","Dynamic traffic signs and regulations","Road closures and access conditions","Lane closures and access conditions","Bridge closures and access conditions","Tunnel closures and access conditions","Other access restrictions and traffic regulations","Dynamic overtaking bans on heavy goods vehicles","Dynamic speed limits","Direction of travel on reversible lanes","Other temporary traffic management measures or plans","Road work information","Long-term road works","Short-term road works","Road events and conditions","Accidents and incidents","Poor road conditions","Road weather conditions","Real-time traffic data","Traffic volume","Speed","Location and length of queues","Current travel times","Predicted travel times","Expected delays","Waiting time at border crossings to non-EU Member States","Traffic data at border crossings to third countries","General information for trip-planning","Address identifiers","Topographic places","Points of interest","Parameters needed to calculate environmental factors","Parameters needed to calculate costs","Public transport scheduled transport","Stop facilities location and features","Stop facilities geometry and map layout","Stop facilities status of features","Stop facilities accessibility and paths within facility","Operational Calendar","Connection links","Network topology and routes/lines","Transport operators","Timetables static","Real-time estimated departure and arrival times","Planned interchanges between scheduled services","Hours of operation","Vehicle details","Environmental standards for vehicles","Disruptions, delays, cancellations","Basic common standard fares","Passenger classes","Common fare products","Special Fare Products","Basic commercial conditions","Purchase information","Public transport non-scheduled transport","Provider data","Service areas and service times","Locations and stations","Fares","Reservation and purchase options","Accesibility information for vehicles","Environmental standards for vehicles","Sharing and Hiring Services","Bike-sharing Locations and stations","Car-sharing Locations and stations","Bike-hiring Stations","Car-sharing Stations","E-scooter-sharing Locations and stations","Car-sharing Availability","Bike sharing Availability","Car-hiring Availability","Bike-hiring Availability","E-scooter-sharing Availability","Payment methods","Environmental standards for vehicles","Air and space travel","Waterways and water bodies","Other"]}},"accrual_periodicity":{"description":"Describes how often the content of the data source is updated. The usage of the vocabularies http://publications.europa.eu/resource/authority/frequency and https://w3id.org/mobilitydcat-ap/update-frequency is recommended.","title":"Accrual periodicity","type":"string","enum":["Continuously","Never (one-time provision)","On occurrence / irregularly","Up to 1min","Up to 5min","Up to 10 min","Up to 15 min","Up to 30 min","Up to 1h","Up to 2h","Up to 3h","Up to 12h","Up to 24h","Up to Weekly","Up to Monthly","Up to every 2 months","Up to every 3 months","Up to every 6 months","Up to Annual","Up to Biennial","Up to Triennial","Up to Quadrennial","Up to Quinquennial","Up to Decennial","Up to Bidecennial","Up to Tridecennial","Unknown"],"default":"Unknown"},"spatial_coverage":{"type":"string","default":"http://publications.europa.eu/resource/authority/country/ITA","description":"The geographical coverage of the data in the data source.","title":"Area covered"},"temporal_coverage_start":{"type":"string","format":"date","description":"The starting timestamp for the timeframe covered by the data source. This field is recommended.","title":"Timeframe start"},"temporal_coverage_end":{"type":"string","format":"date","description":"The ending timestamp for the timeframe covered by the data source. This field is recommended.","title":"Timeframe end"},"distributions":{"title":"Distributions","description":"A specific representation of a Dataset.","type":"array","items":{"type":"object","properties":{"data_schema":{"description":"The data schema/model adopted to represent the data in the distribution. The data schema/model should be selected from the list defined in the mobilitydcatap:mobility-data-standard vocabulary or defined as TANGENT Reference Conceptual Model.","title":"Data schema/model","type":"string","default":"Other","enum":["DATEX II","OCIT-C","C-ITS","TN-ITS","INSPIRE","GML","NeTEx","SIRI","GTFS","GTFS-RT","GBFS","tpegML","DINO","Other"]},"format":{"type":"string","description":"The format used to encode the data in the distribution. The vocabulary http://publications.europa.eu/resource/dataset/file-type is recommended to serialise the admissible values ","title":"Resource format","default":"http://publications.europa.eu/resource/authority/file-type/CSV"},"access_url":{"type":"string","title":"Access URL.","description":"URL redirecting to a webpage or an endpoint to access the data.","default":"http://www.cefriel.com/data/my_data_source"}}}}}}}}')}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,i){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var i=Object.create(null);a.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return n[e]}}));return o["default"]=function(){return n},a.d(i,o),i}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{13:"06cd2e07",43:"fb5b896b",49:"f2c20221",55:"d111b5d7",109:"350c7c05",148:"2b6347d2",200:"4dc78eed",208:"65de7a32",236:"207c840f",420:"fb240bdb",590:"47d0c120",595:"96320e8c",611:"77fb901c",675:"a10f8029",699:"15a1d044",731:"a686c60c",733:"320f4a50",818:"44b91e54",954:"898da33a",978:"44af7ef6"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mobilitydcatap-ui:";a.l=function(n,r,i,o){if(e[n])e[n].push(r);else{var s,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[r];var m=function(t,a){s.onerror=s.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/mobilitydcatap-ui/"}(),function(){var e={524:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=i);var o=a.p+a.u(t),s=new Error,c=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}};a.l(o,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,o=n[0],s=n[1],c=n[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var l=c(a)}for(t&&t(n);d<o.length;d++)i=o[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(l)},n=self["webpackChunkmobilitydcatap_ui"]=self["webpackChunkmobilitydcatap_ui"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(52283)}));n=a.O(n)})();
//# sourceMappingURL=app.199b58f6.js.map