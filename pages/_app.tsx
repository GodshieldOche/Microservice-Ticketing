import App, { AppInitialProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { wrapper } from '../redux/store'
import '../styles/globals.css'
import buildClient from "../api/build-client"


class MyApp extends App<AppInitialProps> {

  public static getInitialProps = wrapper.getInitialAppProps(store => async context => {
    const client = buildClient(context.ctx);
    const { data } = await client.get('/api/users/currentuser');

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        currentUser: data.user
      },
    };

  });

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout currentUser={pageProps.currentUser}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default wrapper.withRedux(MyApp) 
