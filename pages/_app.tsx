import type { AppProps } from 'next/app';
import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';

export default function App({ Component }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
