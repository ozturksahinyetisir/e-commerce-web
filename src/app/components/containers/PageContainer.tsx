import React from 'react'

const PageContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className ='px-5 md:px-30'>{children}</div>
  )
}

export default PageContainer