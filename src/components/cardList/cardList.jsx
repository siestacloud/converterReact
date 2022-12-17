import React from 'react';
// import '../App.scss';
import Container from '@mui/material/Container';
import WalletCard from './card';

import Box from '@mui/material/Box';
import { useWallet } from '../../hooks/wallets';

function CardList() {
  const appState = useWallet();
  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }} >
        {
          appState.W.Wallets.map(wallet => <WalletCard key={wallet.ID} {...wallet}></WalletCard>)
        }

      </Box>

    </>



  );
}

export default CardList;
