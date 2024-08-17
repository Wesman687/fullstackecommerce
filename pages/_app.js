
import store from "../redux/store.js";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
