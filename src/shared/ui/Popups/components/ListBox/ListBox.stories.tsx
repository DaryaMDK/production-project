import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'выпадающий список',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: 'выпадающий список',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: 'выпадающий список',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: 'выпадающий список',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: 'выпадающий список',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};
