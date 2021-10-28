import { NextPage } from 'next'
import React, { useState } from 'react'
import styled, { keyframes } from "styled-components"
import { Svg } from './HeadmenuImg'
import MenuItem from './MenuItem'
interface AP_MenuProps {
  readonly display?: string
  readonly route?: string
}
// head_menu animation
const routed = keyframes`
  from{
    transform:rotate(0deg)
  }to{
    transform:rotate(90deg)
  }
`
const route = keyframes`
  from{
    transform:rotate(90deg)
  }to{
    transform:rotate(0deg)
  }
`

const Menu = styled.div<AP_MenuProps>`
  display: flex;
  flex-direction:column;
  width: 100px;
  .menuItems-group{
    display: none;
    transition: all 1000ms;
  }
  img{
    border:1px solid #cccc;
    border-radius: 5px;
    height: 50px;
    width: 50px;
  }
  :hover img{
      animation: ${routed} 0.1s;
      animation-fill-mode:forwards;
    }
  :hover .menuItems-group{
    display: block;
    transition: all 1000ms;
  }
`
const MenuItemsGroup = styled.div<AP_MenuProps>`
  border:1px solid #f4f4f4f4;
  border-radius: 0px 5px 5px 5px ;
  width: 100px;
  overflow: hidden;
  font-size: small;
  background-color: white;
  display: block;
`

const AP_Menu: NextPage<AP_MenuProps> = ( props ) => {
  const [form, setForm] = useState<boolean>()
  return (
    <Menu>
      <Svg src="head_menu.svg" style={{ background: "white" }} onClick={() => { setForm( !form ) }} />
      <MenuItemsGroup className="menuItems-group">
        <MenuItem label="首页" index="/" />
        <MenuItem label="解决方案" index="/jiejuefangan" />
        <MenuItem label="行业案例" />
        <MenuItem label="新闻动态" />
        <MenuItem label="关于我们" />
      </MenuItemsGroup>
    </Menu>
  )
}

export default AP_Menu