import { NextPage } from 'next'
import React, { useState } from 'react'
import styled from "styled-components"
interface menuItemsProps {

}
const MenuItem = styled.div<menuItemsProps>`
   height: 50px;
`
const MenuItems: NextPage<menuItemsProps> = () => {
  const [form, setForm] = useState<boolean>()
  return (
    <MenuItem>
      items
    </MenuItem>
  )
}

export default MenuItems