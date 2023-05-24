import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'shared/redesigned/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    width: '400px',
    height: '300px',
};
