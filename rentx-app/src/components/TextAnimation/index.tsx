import React, { ReactNode } from 'react'
import { PresenceTransition } from 'native-base'

interface TextAnimationProps {
  isVisible?: boolean
  children: ReactNode
}

export function TextAnimation({
  isVisible = true,
  children,
}: TextAnimationProps) {
  return (
    <PresenceTransition
      visible={isVisible}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 150,
        },
      }}
    >
      {children}
    </PresenceTransition>
  )
}
