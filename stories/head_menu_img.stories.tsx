import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Svg } from './components/HeadmenuImg'

export default {
  title: 'Example/svg',
  component: Svg,
} as ComponentMeta<typeof Svg>

const Template: ComponentStory<typeof Svg> = ( args ) => <Svg {...args} ></Svg>

export const normal = Template.bind( {} );
normal.args = {
  src: "http://localhost:3000/head_menu.svg",
  transform: false
};


/**
 * 注释：这里translform没有效果，配合usetate在页面中生效
 */