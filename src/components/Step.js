import React from 'react'
import { StepBlock, StepPoint, StepLine } from '@/style-components/ProgressSection'

export default function Step({step, title, progress, stepsLength }) {
  const activeStep = step===progress;
  const currentStep = progress >= step + 1 ? 'completed' : 'incomplete';
  const currentLine = progress - 1 >= step ? 'completed' : 'incomplete';

  return (
    <>
        <StepBlock  step={currentStep} active={activeStep}>
            <StepPoint  step={currentStep} />
            <p>{title}</p>
            </StepBlock>
        {step !== stepsLength && <StepLine step={currentLine}/>}
  </>
  )
}
