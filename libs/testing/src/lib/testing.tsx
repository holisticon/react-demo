import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React, { PropsWithChildren } from 'react';
import { Router } from 'react-router-dom';


const Wrapper = ({children}: PropsWithChildren<{}>) => {
  const history = createMemoryHistory();
  return (<Router history={history}>
    {children}
  </Router>)
}

const customRender: typeof render = (ui, options) => 
  render(ui, {wrapper: Wrapper, ...options})

export { customRender as render };
