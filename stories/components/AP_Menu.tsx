import { NextPage } from 'next'
import React, { useState } from 'react'
import styled, { keyframes } from "styled-components"
import { Svg } from './HeadmenuImg'
interface AP_MenuProps {
  readonly display?: string
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
      animation: ${routed} 1s;
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
const MenuItem = styled.div<AP_MenuProps>`
   display: flex;
   height: 50px;
   width: 100px;
   color: black;
   align-items: center;
   justify-content: center;
   border-bottom: 1px solid #f4f4f4;
   :hover{
     background-color: #ccc;
     font-size: 18px;
   }
   :last-child{
    border-bottom: none;
   }
`


const AP_Menu: NextPage<AP_MenuProps> = () => {
  const [form, setForm] = useState<boolean>()
  return (
    <Menu>
      <Svg src="head_menu.svg" style={{ background: "white" }} onClick={() => { setForm( !form ) }} />
      <MenuItemsGroup className="menuItems-group">
        <MenuItem>首页</MenuItem>
        <MenuItem>解决方案</MenuItem>
        <MenuItem>行业案例</MenuItem>
        <MenuItem>新闻动态</MenuItem>
        <MenuItem>关于我们</MenuItem>
      </MenuItemsGroup>
    </Menu>
  )
}

export default AP_Menu