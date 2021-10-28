import styled, { keyframes } from "styled-components"
interface svgProps {
  readonly src: string
}
const routed = keyframes`
  from{
    transform:rotate(0deg)
  }to{
    transform:rotate(90deg)
  }
`
export const Svg = styled.img<svgProps>`
  src:${props => props.src};
  :hover{
      animation: ${routed} 1s;
      animation-fill-mode:forwards;}
`