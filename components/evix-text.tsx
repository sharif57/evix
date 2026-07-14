import React from 'react'

interface EvixTextProps {
  className?: string
  withReg?: boolean
}

export const EvixText = ({ className = "", withReg = true }: EvixTextProps) => {
  return (
    <span className={className}>
      <span>EV</span>IX{withReg && <sup>®</sup>}
    </span>
  )
}
