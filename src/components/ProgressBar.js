import { DataContext } from '@/context/dataContext'
import React, { useContext } from 'react'
import { ProgressSection } from '@/style-components/ProgressSection'
import Step from './Step';


export default function ProgressBar() {
  const {progress} = useContext(DataContext)
 
  const steps = [{
    title: 'Start First Project',
    step: 1,
  }, {
    title: 'Project Details',
    step: 2,
  }, {
    title: 'Create Project',
    step: 3,
  }];

  return (
    <ProgressSection>
      { steps.map(({ title, step }, index) => (
        <Step key={index} stepsLength={steps.length} step={step} title={title} progress={progress} />
      ))}
    </ProgressSection>
  )
}
