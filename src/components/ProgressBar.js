import { DataContext } from '@/context/dataContext'
import React, { useContext } from 'react'
import { ProgressSection } from '@/style-components/ProgressSection'
import { Stepper, Step, StepLabel  } from '@mui/material'

export default function ProgressBar() {

  const {progress} = useContext(DataContext)

  const steps = ['1111', '2222', '3333']

  return (
    <ProgressSection>

      <Stepper>
        <Step>
          <StepLabel>Register your name</StepLabel>
        </Step>
        <Step>
          <StepLabel>Register your email</StepLabel>
        </Step>
        <Step>
          <StepLabel>Click on Finish</StepLabel>
        </Step>
      </Stepper>


      {/* <div>
        <div></div>
        <p>Start First Project</p>
      </div>
      <div>
        <div></div>
        <p>Project Details</p>
      </div>
      <div>
        <div></div>
        <p>Create Project</p>
      </div> */}
    </ProgressSection>
  )
}
