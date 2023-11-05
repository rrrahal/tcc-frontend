import * as React from 'react'

import { cn } from '../../lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  setText?: React.Dispatch<React.SetStateAction<string>>
  text?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, setText, text, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        onChange={(e) => setText && setText(e.target.value)}
        ref={ref}
        {...props}
        placeholder='Please type your venture description'
        value={text}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
