import React  from "react"
import styled from "@emotion/styled"

import { theme } from '../styles'

const TechListUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  margin: 0;

  li {
    margin-right: 10px;
    font-size: 12px;
    color: ${theme.colors.darkLight};
  }
`

const TechList = ({ items }) => {

  return (
    <TechListUl>
    { items.map(item => <li key={item} >{item}</li> )}
    </TechListUl>
  )

}



export default TechList
