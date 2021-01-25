import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/static/personalStyles.css'

export default function MyApp({ Component, pageProps }) {
    return <Component{...pageProps} />
}