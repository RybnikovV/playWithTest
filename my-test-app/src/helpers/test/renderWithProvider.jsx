import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';

export const renderWitchProvider = (component, initState = {}) => {
  return render(
    <Provider store={createReduxStore(initState)}>
      {component}
    </Provider>
  )
};