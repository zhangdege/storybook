import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Button } from "./components/Buttons"

export default {
  title: 'Example/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ( args ) => <Button {...args}>{args.label}</Button>

export const normal = Template.bind( {} );
normal.args = {
  label: 'normal'
};

export const primary = Template.bind( {} );
primary.args = {
  label: 'primary',
  primary: true
};

export const warning = Template.bind( {} );
warning.args = {
  label: 'warning',
  warning: true
};

export const danger = Template.bind( {} );
danger.args = {
  label: 'danger',
  danger: true
};