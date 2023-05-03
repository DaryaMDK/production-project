import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Currency } from '../../model/types/currency';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {
    value: Currency.RUB,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Readonly = Template.bind({});
Readonly.args = {
    readonly: true,
    value: Currency.RUB,
};

export const Click = Template.bind({});
Click.args = {
    value: Currency.RUB,
    onChange: action('onChange'),
};
