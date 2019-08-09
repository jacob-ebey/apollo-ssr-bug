import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../lib/withApollo';

export const config = { amp: true };

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props as any;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp as any);