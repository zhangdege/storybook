import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components'

interface MenuItemProps {
  readonly label: string
  readonly index?: string
}
const Item = styled.div`
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
const MenuItem: NextPage<MenuItemProps> = ( props ) => {
  const route = useRouter()
  if ( props.index ) {
    return (
      <Item onClick={() => { route.push( props.index as string ) }}>{props.label}</Item>
    )

  }
  return (
    <Item>{props.label}</Item>
  )
}

export default MenuItem