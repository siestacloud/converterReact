export interface ResponseWallets {
  Date: string
  PreviousDate: string
  PreviousURL: string
  Timestamp: string
  Valute: [
    {
      ID: string
      NumCode: string
      CharCode: string
      Nominal: number
      Name: string
      Value: number
      Previous: number
    }

  ]
}

export interface StateApp {
  result: number
  choose: string
  Error: string
  Loading: boolean
  Wallets: Wallet[]

}

export interface Wallet {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
}