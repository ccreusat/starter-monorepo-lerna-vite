var d=Object.defineProperty;var n=(o,t)=>d(o,"name",{value:t,configurable:!0});import{j as a}from"./jsx-runtime.8ff63c1d.js";import"./iframe.d19f0c38.js";const r=n(({primary:o=!1,size:t="medium",backgroundColor:l,label:s,...i})=>{const c=o?"btn-primary":"btn-secondary";return a("button",{type:"button",className:["btn",`btn-${t}`,c].join(" "),style:{backgroundColor:l},...i,children:s})},"Button");r.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:'"medium"',computed:!1},required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?"},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const f={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
`,locationsMap:{primary:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}},secondary:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}},large:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}},small:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}}}}},title:"Components/Core/Button",component:r,argTypes:{backgroundColor:{control:"color"}}},e=n(o=>a(r,{...o}),"Template"),m=e.bind({});m.args={primary:!0,label:"Button"};const p=e.bind({});p.args={label:"Button"};const u=e.bind({});u.args={size:"large",label:"Button"};const y=e.bind({});y.args={size:"small",label:"Button"};const T=["Primary","Secondary","Large","Small"];export{u as Large,m as Primary,p as Secondary,y as Small,T as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories.45f67e0a.js.map
