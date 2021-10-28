import styled from "styled-components"
interface buttonProps {
  readonly primary?: boolean
  readonly warning?: boolean
  readonly danger?: boolean
}

// button
export const Button = styled.button<buttonProps>`
  background: ${props => props.primary ? "palevioletred" : props.warning ? "yellow" : props.danger ? 'red' : "white"};
  color: ${props => props.primary ? "white" : props.warning ? "red" : props.danger ? "yellow" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
