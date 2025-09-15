import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as b,C as o,c as j,T as w,b as N,t as q,P as t,l as u,a as T}from"./index-BdIeNpLP.js";import{F as v}from"./index-Ch27aLP-.js";import{B as z}from"./index-CzrtGobS.js";import{R as A}from"./index-CW6WZ4Iu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CvLvJ4fi.js";const k="_themeRoot_1wl90_2",B="_recentlyAddedBorder_1wl90_13",E="_fileSize_1wl90_17",F="_title_1wl90_24",R="_part_1wl90_31",$="_desc_1wl90_40",I="_recentlyAdded_1wl90_13",S="_recentIcon_1wl90_58",r={themeRoot:k,recentlyAddedBorder:B,fileSize:E,title:F,part:R,desc:$,recentlyAdded:I,recentIcon:S},a=({CustomLink:i,href:c,item:y,to:l})=>{const{title:g,desc:m,custom_fields:n={}}=y,{form_type:C,part:Y,recently_added:p,size:x}=n;return e.jsxs(b,{className:`${r.themeRoot} ${p?r.recentlyAddedBorder:""}   `,"data-theme":"datamarts",children:[e.jsxs(o,{position:"top",children:[e.jsx(z,{children:C}),e.jsx("p",{className:r.fileSize,children:j(x)})]}),e.jsxs(o,{position:"middle",children:[e.jsx(w,{CustomLink:i,href:c,to:l,text:g,height:"52px",className:r.title}),n.part?e.jsx("p",{className:r.part,children:`Part(s) ${N(n.part)}`}):null,m?e.jsx("p",{className:r.desc,children:q(m,110)}):null]}),e.jsx(o,{align:"right",position:"bottom",children:e.jsx(A,{CustomLink:i,href:c,label:"Learn More",to:l})}),p?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:r.recentlyAdded}),e.jsx("span",{className:r.recentIcon,children:e.jsx(v,{})})]}):null]})};a.propTypes={CustomLink:t.elementType,href:u,to:u,item:t.shape({title:t.string,desc:t.string,author:t.arrayOf(t.string),custom_fields:t.shape({form_type:t.string,part:t.arrayOf(t.string),recently_added:t.bool,size:t.oneOfType([t.string,t.number])})}).isRequired};a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{CustomLink:{description:"",type:{name:"elementType"},required:!1},href:{description:"",type:{name:"custom",raw:`(props, propName, componentName) => {
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
}`},required:!1},item:{description:"",type:{name:"shape",value:{title:{name:"string",required:!1},desc:{name:"string",required:!1},author:{name:"arrayOf",value:{name:"string"},required:!1},custom_fields:{name:"shape",value:{form_type:{name:"string",required:!1},part:{name:"arrayOf",value:{name:"string"},required:!1},recently_added:{name:"bool",required:!1},size:{name:"union",value:[{name:"string"},{name:"number"}],required:!1}},required:!1}}},required:!0}}};const L="67cefae870c03882bcff2a64",O="678d25291eceb5d121099200",D=!0,G="Basic Fields",M=[""],P="This data mart holds various fields from Form 990 EZ based on the most requested fields by users",Z="",V="basic-fields-67cefae870c03882bcff2a64",W={category:["Missions and Programs","Grants and Funds","Individuals and Relationships","Geography"],part:["1","2","3","4","5","6"],recently_added:"Recently Added",size:955.5,form_type:"990EZ",last_updated:"2025-03-07",dataset_documentation:"https://docs.google.com/spreadsheets/d/1UnOtFmbaVz0cWBkjhbclIGmQOZCtWFYy-GeNATJNI3c/edit?userstoinvite=sbuller%40salesforce.com&sharingaction=manageaccess&role=writer&gid=1673448678#gid=1673448678",download_url:"https://gt990datalake-analytics-and-datamarts.s3.us-east-1.amazonaws.com/EfileDataMarts/2025_03_06_All_Years_990EZStandardFields.csv"},d={_id:L,_collection:O,published:D,title:G,author:M,desc:P,resource_url:Z,slug:V,custom_fields:W},te={title:"Themes/Datamarts",component:a},s=()=>e.jsxs(T,{children:[e.jsx(a,{item:d}),e.jsx(a,{item:{...d,custom_fields:{...d.custom_fields,recently_added:!1}}})]});s.__docgenInfo={description:"",methods:[],displayName:"Card"};var f,_,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <CardContainer>
    <DatamartsCard item={item} />
    <DatamartsCard item={{
    ...item,
    custom_fields: {
      ...item.custom_fields,
      recently_added: false
    }
  }} />
  </CardContainer>`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const re=["Card"];export{s as Card,re as __namedExportsOrder,te as default};
