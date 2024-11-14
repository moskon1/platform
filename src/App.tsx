import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { GambaUi } from "gamba-react-ui-v2";
import { useTransactionError } from "gamba-react-v2";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Modal } from "./components/Modal";
import { TOS_HTML } from "./constants";
import { useToast } from "./hooks/useToast";
import { useUserStore } from "./hooks/useUserStore";
import Dashboard from "./sections/Dashboard/Dashboard";
import Game from "./sections/Game/Game";
import Header from "./sections/Header";
import RecentPlays from "./sections/RecentPlays/RecentPlays";
import Toasts from "./sections/Toasts";
import { MainWrapper, TosInner, TosWrapper } from "./styles";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function ErrorHandler() {
  const walletModal = useWalletModal();
  const toast = useToast();
  const [error, setError] = React.useState<Error>();

  useTransactionError((error) => {
    if (error.message === "NOT_CONNECTED") {
      walletModal.setVisible(true);
      return;
    }
    toast({
      title: "❌ Transaction error",
      description: error.error?.errorMessage ?? error.message,
    });
  });

  return (
    <>
      {error && (
        <Modal onClose={() => setError(undefined)}>
          <h1>Error occured</h1>
          <p>{error.message}</p>
        </Modal>
      )}
    </>
  );
}

export default function App() {
  const newcomer = useUserStore((state) => state.newcomer);
  const set = useUserStore((state) => state.set);

  return (
    <>
      {newcomer && (
        <Modal>
          <h1>Welcome</h1>
          <TosWrapper>
            <TosInner dangerouslySetInnerHTML={{ __html: TOS_HTML }} />
          </TosWrapper>
          <p>By playing on our platform, you confirm your compliance.</p>
          <GambaUi.Button main onClick={() => set({ newcomer: false })}>
            Acknowledge
          </GambaUi.Button>
        </Modal>
      )}
      <ScrollToTop />
      <ErrorHandler />
      <Header />
      <Toasts />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
        <h2 style={{ textAlign: "center" }}>Recent Plays</h2>
        <RecentPlays />

        <div
          id="3d"
          className="w-full h-[70vh] aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-21 lg:aspect-h-9"
        >
          <iframe
            className="w-full h-full"
            src="https://oncyber.io/cybearz?coords=10.44x3.79x-18.34x-1.76"
          ></iframe>
        </div>
      </MainWrapper>
    </>
  );
}
