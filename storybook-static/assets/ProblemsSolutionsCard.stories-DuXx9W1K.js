import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as b,C as r,T as x,t as c,P as m,l as d,a as y}from"./index-BdIeNpLP.js";import{I as w}from"./index-C5UEvmQu.js";import{R as N}from"./index-CW6WZ4Iu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ch27aLP-.js";import"./index-CvLvJ4fi.js";const j="_themeRoot_1738n_2",k="_cardContentTop_1738n_13",T="_authorContainer_1738n_23",M="_title_1738n_28",v="_author_1738n_23",R="_desc_1738n_41",t={themeRoot:j,cardContentTop:k,authorContainer:T,title:M,author:v,desc:R},s=({CustomLink:n,href:_,item:f,to:C})=>{const{author:a,title:L,custom_fields:g={}}=f,{item_type:i,short_desc:l}=g;return e.jsxs(b,{className:t.themeRoot,"data-theme":"problems-solutions",children:[e.jsx(r,{align:"left",position:"top",className:t.cardContentTop,children:i?e.jsx(w,{label:i}):null}),e.jsxs(r,{position:"middle",children:[e.jsx(x,{text:L,className:t.title}),e.jsx("div",{className:t.authorContainer,children:a.length>0?e.jsxs("p",{className:t.author,children:["by ",c(a.join(", "),100)]}):null}),l?e.jsx("div",{className:t.desc,dangerouslySetInnerHTML:{__html:c(l,125)}}):null]}),e.jsx(r,{align:"right",position:"bottom",children:e.jsx(N,{CustomLink:n,href:_,to:C})})]})};s.propTypes={CustomLink:m.elementType,href:d,to:d,item:m.shape({}).isRequired};s.__docgenInfo={description:"",methods:[],displayName:"Card",props:{CustomLink:{description:"",type:{name:"elementType"},required:!1},href:{description:"",type:{name:"custom",raw:`(props, propName, componentName) => {
  const { href, to, CustomLink } = props;
  if (!href && !to) {
    return new Error(\`\${componentName}: either 'href' or 'to' must be provided.\`);
  }
  if (to && !CustomLink) {
    return new Error(\`\${componentName}: 'CustomLink' is required when 'to' is used.\`);
  }
  return null;
}`},required:!1},to:{description:"",type:{name:"custom",raw:`(props, propName, componentName) => {
  const { href, to, CustomLink } = props;
  if (!href && !to) {
    return new Error(\`\${componentName}: either 'href' or 'to' must be provided.\`);
  }
  if (to && !CustomLink) {
    return new Error(\`\${componentName}: 'CustomLink' is required when 'to' is used.\`);
  }
  return null;
}`},required:!1},item:{description:"",type:{name:"shape",value:{}},required:!0}}};const $="68939323ab51d85485c5e4e6",q="683c8b39a69afc1a2534bf77",I=!0,P="Awesome-LLM: a curated list of Large Language Model ",E=["Hannibal046"],S="Awesome LLM is a curated list of papers about large language models, especially relating to ChatGPT. It also contains frameworks for LLM training, tools to deploy LLM, courses and tutorials about LLM and all publicly available LLM checkpoints and APIs.",A="https://github.com/Hannibal046/Awesome-LLM",H="awesome-llm-a-curated-list-of-large-language-model-68939323ab51d85485c5e4e6",B={short_desc:"A curated list of LLM papers, tools, courses, and public model checkpoints.",item_type:"Solution",linked_items:"",has_linked_items:"Unlinked",most_viewed:"",topic_areas:""},G=2,O={_id:$,_collection:q,published:I,title:P,author:E,desc:S,resource_url:A,slug:H,custom_fields:B,page_views:G},Q={title:"Themes/Problems & Solutions",component:s,decorators:[n=>e.jsx(y,{children:n()})]},o=()=>e.jsx(s,{item:O});o.__docgenInfo={description:"",methods:[],displayName:"Card"};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"() => <ProblemsSolutionsCard item={item} />",...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const W=["Card"];export{o as Card,W as __namedExportsOrder,Q as default};
