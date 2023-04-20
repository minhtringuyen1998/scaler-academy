import clsx from "clsx";
import React, { useState } from "react";
import {
  BackDrop,
  Container,
  LoginContainer,
  Header,
  Body,
  FormLogin,
  Line,
  SocialIcons,
  ImgSocial,
  SocialIcon,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Typo } from "components/UI/text/Text";
import { useForm, Controller } from "react-hook-form";
import FormLoginMobile from "./components/FormLoginMobile/FormLoginMobile";
import FormLoginMail from "./components/FormLoginMail/FormLoginMail";
import FormSignUp from "./components/FormSignUp/FormSignUp";
import { useDispatch } from "react-redux";
import { closeModal } from "reducers/modal/ModalSlice";
const Login = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const [isFormSignUp, setIsFormSignUp] = useState<boolean>(false);
  const [isLoginWithMail, setIsLoginWithMail] = useState<boolean>(false);
  return (
    <Container>
      <BackDrop open={props.show} />
      <LoginContainer open={props.show}>
        <Header>
          <AiOutlineClose
            size={26}
            className="icon__close"
            onClick={() => {
              dispatch(closeModal());
            }}
          />
        </Header>
        <Body>
          {!isFormSignUp ? (
            <>
              <FormLogin>
                <Typo size="32px" bold="bold" classes={["mb-3"]}>
                  Login
                </Typo>
                <Typo>
                  or{" "}
                  <Typo
                    bold="800"
                    inline
                    color="#1c6bf3"
                    onclick={() => setIsFormSignUp(!isFormSignUp)}
                    isClick
                  >
                    create your scaler account
                  </Typo>
                </Typo>
                {!isLoginWithMail ? (
                  <FormLoginMobile
                    isShowLoginWithMail={isLoginWithMail}
                    changeForm={(check: boolean) => setIsLoginWithMail(check)}
                  />
                ) : (
                  <FormLoginMail
                    isShowLoginWithMail={isLoginWithMail}
                    changeForm={(check: boolean) => setIsLoginWithMail(check)}
                  />
                )}
              </FormLogin>
              <Line>
                <Typo inline>Or</Typo>
              </Line>
              <Typo color="#5b6f81" classes={["mt-1 mb-4", "text-center"]}>
                Login in using
              </Typo>
              <SocialIcons className="justify-content-center">
                <SocialIcon className="auth-social__item gtm-track-element">
                  <a href="#">
                    <ImgSocial
                      data-gtm-element="facebook"
                      src="https://assets.scaler.com/assets/auth/fb-oauth-517731fada42c712a42e21bf11e592ed9aaa24d6444e251754a3d828f7b5b28e.png.gz"
                      alt="facebook-oauth"
                    />
                  </a>
                </SocialIcon>
                <SocialIcon className="auth-social__item gtm-track-element">
                  <a href="#">
                    <ImgSocial
                      data-gtm-element="linkedin"
                      src="https://assets.scaler.com/assets/auth/ln-oauth-8fa2b2518a2b8c74034e267e3a26c0c808fe6c7f90e7602b8ce823a77ed13f8e.png.gz"
                      alt="linkedin-oauth"
                    />
                  </a>
                </SocialIcon>
                <SocialIcon className="auth-social__item gtm-track-element">
                  <a href="#">
                    <ImgSocial
                      data-gtm-element="github"
                      src="https://assets.scaler.com/assets/auth/git-oauth-6e42df27a979324867fb032ee90829f1b437b1452e1656ad8350e1e2999851ba.png.gz"
                      alt="github-oauth"
                    />
                  </a>
                </SocialIcon>
                <SocialIcon className="auth-social__item gtm-track-element">
                  <a href="#">
                    <ImgSocial
                      data-gtm-element="google"
                      src="https://assets.scaler.com/assets/auth/google-oauth-24cba186e53a1c30ef682062820af75fb8fb0814bd1d6ef1c448e888dfe39323.png.gz"
                      alt="google-oauth"
                    />
                  </a>
                </SocialIcon>
              </SocialIcons>
            </>
          ) : (
            <FormSignUp changeForm={() => setIsFormSignUp(!isFormSignUp)} />
          )}
        </Body>
      </LoginContainer>
    </Container>
  );
};
export default Login;
