import MainLayout from "../Components/Layouts/mainLayout";
import ContextProvider from "../Context/ContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ContextProvider>
    </>
  );
}

export default MyApp;
