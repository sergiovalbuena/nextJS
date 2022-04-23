import {AppProps} from 'next/app'
import Layout from '../components/Layout/Layout';

function MyApp({Component, pageProps}:  AppProps){
    //Provders, context/providers, theme, data
    //layout
    //props adiconales 
    //return <Component {...pageProps} title={''} />
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;