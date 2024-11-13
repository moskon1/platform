import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useUserStore } from "../../hooks/useUserStore";

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0 !important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background-color 0.2s ease;
    color: black;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`;

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(
    -45deg,
    #ffb07c,
    #ff3e88,
    #2969ff,
    #ef3cff,
    #ff3c87
  );
  background-size: 300% 300%;
  animation: welcome-fade-in 0.5s ease, backgroundGradient 30s ease infinite;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 1s;
    }
  }

  & > div {
    padding: 0px;
    filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))
      drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`;

export function WelcomeBanner() {
  const wallet = useWallet();
  const walletModal = useWalletModal();
  const store = useUserStore();
  const copyInvite = () => {
    store.set({ userModal: true });
    if (!wallet.connected) {
      walletModal.setVisible(true);
    }
  };

  useEffect(() => {
    // Check if the Twitter script is already loaded
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {" "}
      <Welcome>
        <div>
          <h1>Cybeario Casino</h1>
          <p>A fair, simple and decentralized casino on Solana.</p>
          <img src="./cybeario.png" width={500} height={500} alt="" />
        </div>
        <Buttons>
          <button onClick={copyInvite}>💸 Copy Invite</button>

          <button
            onClick={() => window.open("https://t.me/cybearzz", "_blank")}
          >
            💬 Telegram
          </button>

          <button onClick={() => window.open("https://cybearz.com", "_blank")}>
            💬 CybearZ
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.launchmynft.io/collections/5ytvtJJMJycyocpgowh4FTkUNyTJgcDFc9pvnNUF17a7/DNxKky5UZcXE5TUBy3pc",
                "_blank"
              )
            }
          >
            💬 CybearZ NFT
          </button>
        </Buttons>
      </Welcome>
    </>
  );
}
