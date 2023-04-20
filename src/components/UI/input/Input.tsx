import React, { useEffect, useState } from "react";
import { Dropdown } from "../input-suggest/Dropdown";
import {
  Input,
  Label,
  InputContainer,
  LabelScope,
  Required,
  WrapperInput,
  ExplainText,
  ErrorMessage,
  TextEdit,
} from "./style";
import clsx from "clsx";
import { ErrorType } from "enum";
export interface IInputProps {
  disable?: boolean | false;
  onchange?: (val: any) => void;
  placeholder?: string;
  isPhone?: boolean;
  label?: string;
  required?: boolean;
  error?: string;
  classes?: string[];
  name?: string;
  onblur?: (val: any) => void;
  type?: "tel" | "text" | "password";
  explainText?: string;
  value?: any;
  ref?: any;
}
const InputComponent = (props: IInputProps) => {
  const {
    disable = false,
    onchange = () => {},
    placeholder = "",
    isPhone,
    label,
    required,
    error,
    classes = [],
    name,
    onblur = () => {},
    type = "text",
    explainText,
    value,
    ref,
  } = props;
  const [errMsg, setErrMsg] = useState<string>();
  useEffect(() => {
    if (error) {
      if (error === ErrorType.REQUIRED) {
        setErrMsg("Required Field");
      } else if (error === ErrorType.ISHAVENUMBER) {
        setErrMsg("Username should not contain number");
      } else if (error === ErrorType.PATTERN && name === "email") {
        setErrMsg("You have entered an invalid email address!");
      } else if (error && name === "phoneNumber") {
        setErrMsg("Invalid mobile phone");
      } else if (error === ErrorType.VALIDVALUEGRADUATION) {
        setErrMsg("Value must greater than or equal to 1973");
      } else if (error && name === "otp") {
        setErrMsg("OTP is invalid. Please enter correct password");
      }
    } else {
      setErrMsg("");
    }
  }, [error]);
  return (
    <InputContainer className={clsx(...classes)}>
      <LabelScope label={label}>
        <Label>{label}</Label>
        {required && <Required>*</Required>}
      </LabelScope>
      {explainText && <ExplainText>{explainText}</ExplainText>}
      <WrapperInput>
        {isPhone && <Dropdown />}
        <Input
          error={errMsg}
          name={name}
          onBlur={(e) => onblur(e.target.value)}
          disabled={disable}
          placeholder={placeholder}
          onChange={(e) => {
            onchange(e.target.value);
          }}
          type={type}
          value={value}
          ref={ref}
        />
        {disable && label === "Mobile Number" && <TextEdit>edit</TextEdit>}
      </WrapperInput>
      {errMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
    </InputContainer>
  );
};
export default InputComponent;
