import { createTheme, MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import '@mantine/core/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
     <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default CustomApp;
