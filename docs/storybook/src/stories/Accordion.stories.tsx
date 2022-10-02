/* eslint-disable react/function-component-definition */
import { Accordion } from "@starter/core";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Accordion>;

const data = [
  {
    id: "1",
    title: "Accordion Item #1",
    text: "This is the first item's accordion body.",
  },
  {
    id: "2",
    title: "Accordion Item #2",
    text: "This is the second item's accordion body.",
  },
  {
    id: "3",
    title: "Accordion Item #3",
    text: "This is the third item's accordion body.",
  },
];

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion className="accordion" defaultKey="3" as="div" {...args}>
    {data.map((item) => {
      return (
        <Accordion.Item key={item.id} itemKey={item.id}>
          <Accordion.Header
            headerClassName="accordion-header"
            buttonClassName="accordion-button"
            collapsedClassName="collapsed"
          >
            {item.title}
          </Accordion.Header>
          <Accordion.Body
            className="accordion-collapse collapse"
            showClassName="show"
          >
            <strong>{item.text}</strong>
          </Accordion.Body>
        </Accordion.Item>
      );
    })}
  </Accordion>
);

export const Primary = Template.bind({});
/* Primary.args = {
  defaultKey: "3",
  as: "div",
  itemKey: "3",
  collapsedClassName: "collapsed",
  showClassName: "show",
} */

/* export const BasicAccordion = () => (
  <Accordion className="accordion" defaultKey="3" as="div">
    {data.map((item) => {
      return (
        <Accordion.Item key={item.id} itemKey={item.id}>
          <Accordion.Header
            headerClassName="accordion-header"
            buttonClassName="accordion-button"
            openClassName="collapsed"
          >
            {item.title}
          </Accordion.Header>
          <Accordion.Body
            className="accordion-collapse collapse"
            openClassName="show"
          >
            <strong>{item.text}</strong>
          </Accordion.Body>
        </Accordion.Item>
      )
    })}
  </Accordion>
)
 */
