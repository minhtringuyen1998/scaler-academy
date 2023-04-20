import { ReactElement, ReactNode } from "react";

export interface IModal { 
  show : boolean;
  onHide : () => void
}
export interface IOption {
  value : any,
  label : string,
  icon? : ReactElement | ReactNode  
}

export interface IFlag {
  name:string ; 
  dial_code:string;
  code : string;
}
export interface IUser {
  region? : string;
  dial_code? : string
}