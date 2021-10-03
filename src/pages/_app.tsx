import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'effector-react/ssr'
import { hydrate } from 'effector'

import { root } from 'root'
import { useScope } from 'lib/next-effector/useScope'

import '../styles.css'

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  const scope = useScope(root, pageProps.initialState)

  if (pageProps.initialState) {
    hydrate(scope, { values: pageProps.initialState })
  }

  return (
    <Provider value={scope}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default Application
