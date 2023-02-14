import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import { StateContext } from "../lib/context";
// To have access to all user at all level auth0 users
import { UserProvider } from "@auth0/nextjs-auth0";
// Adding react hot toast
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster />
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
