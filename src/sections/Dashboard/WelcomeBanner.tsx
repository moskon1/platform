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

  animation: welcome-fade-in 0.5s ease, backgroundGradient 30s ease infinite;
  border-radius: 10px;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 200px;
    height: 200px;
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
    grid-template-columns: 2fr 0fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
  & img {
    width: 100%; /* Ensures the image fills the container */
    height: auto;
    border-radius: 10px;
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
        <div className="relative py-12 overflow-hidden  sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
              {/* Left Section */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-white-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">
                  Cybeario Casino✨
                </h1>
                <p className="mt-5 text-lg font-medium text-gray-900 lg:mt-8">
                  A fair, simple and decentralized casino on Solana.
                </p>
                <div className="mt-8 lg:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.launchmynft.io/collections/5ytvtJJMJycyocpgowh4FTkUNyTJgcDFc9pvnNUF17a7/DNxKky5UZcXE5TUBy3pc"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gray-900 hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    CybearZ NFTs
                  </a>
                  <a
                    href="https://cybearz.com"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gray-900 hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    CybearZ
                  </a>
                  <a
                    href="https://t.me/cybearzz"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gray-900 hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://x.com/cybearzz"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gray-900 hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Twitter
                  </a>
                </div>

                <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
                  <div>
                    <p className="text-4xl font-bold text-white-900">3333</p>
                    <p className="mt-2 text-base font-medium text-black-500">
                      CybearZ
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
                <div className="w-full sm:w-2/3 lg:w-full max-w-sm">
                  <div className="overflow-hidden bg-white rounded shadow-xl">
                    <div className="aspect-w-2 aspect-h-2">
                      <img
                        className="object-cover w-full h-full"
                        src="/cybeario.png"
                        alt="Digital Artwork"
                      />
                    </div>
                    <div className="p-8">
                      <p className="text-lg font-bold text-gray-900">Cyberio</p>
                      <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                        Reserved Price
                      </p>
                      <div className="flex items-end mt-1">
                        <p className="text-lg font-bold text-gray-900">
                          0.05 SOL
                        </p>
                      </div>
                      <div className="grid grid-cols-2 mt-7 gap-x-4">
                        <a
                          href="https://www.launchmynft.io/collections/5ytvtJJMJycyocpgowh4FTkUNyTJgcDFc9pvnNUF17a7/DNxKky5UZcXE5TUBy3pc"
                          className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white bg-gray-900 hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          role="button"
                        >
                          Get a Cybear
                        </a>
                        <a
                          href="#3d"
                          className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 bg-transparent border border-gray-300 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          role="button"
                        >
                          View 3D Museum
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Welcome>
    </>
  );
}
