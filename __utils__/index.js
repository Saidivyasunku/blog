import React from 'react'
import { mount,shallow } from 'enzyme'


export const mountWithMock = (
  Component,
  initialProps = {},
) => {  
  return mount(
      <Component {...initialProps} />
  )
}
export const shallowWithMock = (
  Component,
  initialProps = {},
) => {
  React.useLayoutEffect = React.useEffect
  return shallow(
      <Component {...initialProps} />
  )
}
