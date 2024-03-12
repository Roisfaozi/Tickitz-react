import React from 'react'
import {
  StepDescription,
  StepDivider,
  StepNumber,
  Stepper,
  Stepwrapper,
} from '../stepper'

function Steps({ stepTotal, currentStep }) {
  const stepsArray = Array.from({ length: stepTotal }, (_, index) => index + 1)
  return (
    <div className='md:flex hidden items-center justify-between gap-3 md:mb-12 mb-6'>
      {stepsArray.map((step) => {
        let stepStatus = 'default'

        if (step < currentStep) {
          stepStatus = 'done'
        } else if (step === currentStep) {
          stepStatus = 'active'
        }

        return (
          <React.Fragment key={step}>
            <Stepper>
              <Stepwrapper variant={stepStatus}>
                <StepNumber variant={stepStatus}>{step}</StepNumber>
              </Stepwrapper>
              <StepDescription
                className={
                  stepStatus === 'default' ? 'text-secondary' : 'font-medium'
                }>
                Fill Form
              </StepDescription>
            </Stepper>
            {step !== stepTotal && <StepDivider />}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Steps
