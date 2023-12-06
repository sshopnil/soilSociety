export enum GLOBALKEYS{
    myIp4Addr = 'http://192.168.0.164:3000'//copy this and comment 
    //paste the same variable with diff ip address
}

export type Auth = {
    isLoggedIn: boolean,
    setLoggedIn: (val : boolean)=> void
}

export type CurrUser = {
    email: string
}