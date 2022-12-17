import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Wallet } from '../../models/wallet';
import { useWallet } from '../../hooks/wallets';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';




export default function SelectLabels() {
  // const [age, setAge] = React.useState('');
  const appState = useWallet();
  // onChange={()=>appState?.HandleChangeChoose() }


  const handleChange = (event: SelectChangeEvent) => {
    appState?.HandleChangeChoose(event.target.value as string);
    
  };



  console.log(appState?.W.choose)
  return (

    <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sel</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={appState?.W.choose}
          label={"age"}
          onChange={handleChange}
        >
          {appState?.W.Wallets.length ?
            appState?.W.Wallets.map((option) => (
              
              <MenuItem key={option.ID} value={option.CharCode}>
                {option.Name}
              </MenuItem>
            )) : <MenuItem >no</MenuItem>}
        </Select>
      </FormControl>
    </Box>



  );
}