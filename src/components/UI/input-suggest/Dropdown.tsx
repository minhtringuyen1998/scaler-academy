import { IFlag } from "interface";
import React, { useEffect, useState } from "react";
import { Typo } from "../text/Text";
import {
  DropdownContainer,
  IconWrapper,
  InputSuggest,
  Option,
  Options,
  IconDropdown,
} from "./style";
import { Flag } from "../flag/Flag";
import { AiOutlineDown } from "react-icons/ai";
import clsx from "clsx";
import { renderKeyProps } from "utils/fnc";
import { useDispatch, useSelector } from "react-redux";
import { getRegion, useGetRegionUser } from "reducers/user/userSlice";
import { useGetCodeRegionQuery } from "sever/code-region-api/codeApi";
const OptionRender = (props: any) => {
  const { dial_code, index, otpSelect, code, onSelect, name } = props;
  return (
    <Option
      onClick={(e) => {
        e.stopPropagation();
        onSelect({ dial_code, code, name });
      }}
      key={renderKeyProps(dial_code, index)}
      className={clsx(
        otpSelect?.dial_code === dial_code && "selected",
        "dropdown-item"
      )}
    >
      <IconWrapper>
        <Flag flag={code.toLowerCase()} />
      </IconWrapper>
      <Typo>{dial_code}</Typo>
    </Option>
  );
};
export const Dropdown = (props: any) => {
  const [showOption, setShowOption] = useState<boolean>(false);
  const [inputCode, setInputCode] = useState<string>("");
  const [otpSelect, setOtpSelect] = useState<IFlag>();
  const userRegion = useSelector(useGetRegionUser);
  const { data: dialCode } = useGetCodeRegionQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userRegion && dialCode?.length) {
      let regionUser = dialCode.find((otp) => otp.code == userRegion?.region);
      if (regionUser) {
        setOtpSelect(regionUser);
        dispatch(
          getRegion({
            dial_code: regionUser.dial_code,
            region: regionUser.code,
          })
        );
      }
    }
  }, [userRegion, dialCode]);
  return (
    <DropdownContainer className="active__input code__region">
      <Option
        onClick={() => {
          setShowOption(true);
        }}
        className="selected"
      >
        {!showOption ? (
          <>
            {otpSelect?.code && (
              <IconWrapper>
                <Flag flag={otpSelect?.code.toLowerCase()} />
              </IconWrapper>
            )}
            {otpSelect && <Typo>{otpSelect.dial_code}</Typo>}
          </>
        ) : (
          <>
            <InputSuggest
              autoFocus={showOption}
              onChange={(e) => setInputCode(e.target.value)}
            />
          </>
        )}
        <IconDropdown animation={showOption}>
          <AiOutlineDown />
        </IconDropdown>
      </Option>
      <Options show={showOption}>
        {dialCode &&
          dialCode.map((otp: IFlag, index: number) => {
            return (
              <OptionRender
                onSelect={(otpP: IFlag) => {
                  setOtpSelect(otpP);
                  setShowOption(false);
                }}
                key={renderKeyProps(otp.code, otp.name)}
                {...otp}
                index={index}
                otpSelect={otpSelect}
              />
            );
          })}
      </Options>
    </DropdownContainer>
  );
};
