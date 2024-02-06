import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../router/AppRouter'

export const renderWitchRouter = (component, initRoute='/') => {
  return render(
    <MemoryRouter initialEntries={[initRoute]}>
      <AppRouter></AppRouter>
      {component}
    </MemoryRouter>
  )
};