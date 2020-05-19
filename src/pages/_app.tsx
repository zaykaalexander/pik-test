import * as React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '../styled';

export default class _App extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}
