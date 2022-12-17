import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectLabels from './select';
import { useWallet } from '../../hooks/wallets';



export default function Converter() {

  const appState = useWallet();
  const [value, setValue] = React.useState('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value)

    if (+event.target.value) {

      appState?.W.Wallets.forEach(element => {

        if (element.CharCode == appState.W.choose) {

          appState?.HandleChangeResult(+event.target.value * +element.Value)
        }

      });
    }

  }

  return (
    <>
      <Box
        component="form"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 3 }}
        noValidate
        autoComplete="off"
      >

        <SelectLabels />
        <TextField sx={{ minWidth: 350 }} id="outlined-basic" label="Введите номинал" variant="outlined" onChange={changeHandler} />
      </Box>

      <div className='result'><p>{appState?.W.result} руб</p></div>
    </>
  );
}




