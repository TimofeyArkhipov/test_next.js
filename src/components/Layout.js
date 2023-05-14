import React, { Component } from 'react'
import ProgressSteps from './ProgressBar'
import { Wrapper } from '@/style-components/MainSection'
import { StyledMain } from '@/style-components/MainSection'

export default function Layout({children}) {
  return (
    <Wrapper>
        <ProgressSteps/>
        <StyledMain>{children}</StyledMain>
    </Wrapper>
  )
}
