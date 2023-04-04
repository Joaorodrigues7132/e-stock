import React from 'react'
import { Container } from './styles'

export default function SidebarItem({ Icon, Text }){
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}