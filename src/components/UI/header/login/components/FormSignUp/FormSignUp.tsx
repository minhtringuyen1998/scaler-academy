import React, { useEffect, useState } from "react";
import InputComponent from "components/UI/input/Input";
import { Typo } from "components/UI/text/Text";
import {
  FormSignUpContainer,
  Form,
  Line,
  SocialIcons,
  ImgSocial,
  SocialIcon,
  Capchar,
} from "./styles";
import { useForm, Controller } from "react-hook-form";
import AcademyButton from "components/UI/academy-button/AcademyButton";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Col, Row } from "react-bootstrap";
import { auth, db } from "firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { setUserProperties } from "firebase/analytics";
import { setDoc, doc, updateDoc } from "firebase/firestore";

const FormSignUp = (props: any) => {
  const [step, setStep] = useState("INPUT_PHONENUMBER");
  const [counter, setCounter] = useState(60);
  const addUser = async (userInfo: any) => {
    await updateDoc(doc(db, "users", userInfo.uid), {
      fullName: userInfo.displayName,
      email: userInfo.email,
      graduation: userInfo.graduation,
      token: userInfo.accessToken,
      phoneNumber: userInfo.phoneNumber,
    });
  };
  useEffect(() => {
    let timer =
      (step === "VERIFY_OTP" &&
        counter > 0 &&
        setInterval(() => setCounter(counter - 1), 1000)) ||
      "";
    return () => clearInterval(timer);
  }, [counter, step]);
  const codeRegion = useSelector(
    (state: RootState) => state.userSlice.dial_code
  );
  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "Nguyen Minh Tri ",
      email: "nguyenminhtri531998@gmail.com",
      phoneNumber: "984234352",
      graduation: "2021",
      otp: "",
    },
  });
  const generateRecapcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recapchar",
      {
        size: "invisible",
        callback: (response: any) => {
          setStep("VERIFY_OTP");
        },
      },
      auth
    );
  };
  const requestOtp = () => {
    if (Object.keys(errors).length == 0) {
      let phoneNumber: string = `${codeRegion}${getValues("phoneNumber")}`;
      generateRecapcha();
      let appVerifier: any = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      {step === "INPUT_PHONENUMBER" && (
        <>
          <FormSignUpContainer>
            <Typo size="24px">
              Ready to become a <b>Rockstar Developer?</b>
            </Typo>
            <Form name="signUp" method="POST">
              <Controller
                rules={{
                  required: true,
                  validate: {
                    ishavenumber: (v) => {
                      return !/\d/.test(v);
                    },
                  },
                }}
                name="fullName"
                control={control}
                render={({ field: { onChange, value = "", ref } }) => (
                  <InputComponent
                    placeholder="Enter your name"
                    label="Full Name"
                    required
                    onchange={(val) => onChange(val)}
                    value={value}
                    error={errors.fullName?.type}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                }}
                render={({ field: { onChange, value = "" } }) => (
                  <InputComponent
                    label="Email"
                    required
                    placeholder="Enter your email"
                    onchange={(val) => onChange(val)}
                    value={value}
                    name="email"
                    error={errors.email?.type}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: true,
                  minLength: 9,
                  maxLength: 9,
                  validate: {
                    phonenumber: (val) =>
                      /([3|5|7|8|9])+([0-9]{8})\b/.test(val),
                  },
                }}
                render={({ field: { onChange, value = "", ref } }) => (
                  <InputComponent
                    onchange={(val) => onChange(val)}
                    value={value}
                    label="Phone Number"
                    placeholder="Enter your mobile number"
                    required
                    isPhone
                    explainText="OTP will be sent to this number for verification"
                    error={errors.phoneNumber?.type}
                    name="phoneNumber"
                  />
                )}
              />
              <Controller
                rules={{
                  required: true,
                  validate: {
                    validValue: (val) => parseInt(val) >= 1973,
                  },
                }}
                name="graduation"
                control={control}
                render={({ field: { onChange, value = "" } }) => (
                  <InputComponent
                    onchange={(val) => onChange(val)}
                    value={value}
                    label="Graduation Year"
                    required
                    placeholder="Year of Graduation"
                    error={errors.graduation?.type}
                  />
                )}
              />
              <Capchar>
                <div id="recapchar" />
              </Capchar>

              <AcademyButton
                classes={["bold", "my-3"]}
                variant="secondary"
                mode="solid"
                content="Sign Up"
                type="button"
                fullWidth
                onClick={() => {
                  requestOtp();
                }}
              />
            </Form>
          </FormSignUpContainer>
          <Typo color="inherit" classes={["text-center"]}>
            Already a member?{" "}
            <Typo
              color="#1c6bf3"
              bold="800"
              classes={["text-uppercase"]}
              inline
              onclick={props.changeForm}
              isClick
            >
              LOGIN
            </Typo>
          </Typo>
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
      )}
      {step === "VERIFY_OTP" && (
        <>
          <Typo size="32px">
            <b>Verify mobile</b>
          </Typo>
          <Typo size="16px" color="inherit" classes={["mt-2"]}>
            We've sent an OTP to your mobile number
          </Typo>
          <InputComponent
            value={`${codeRegion}${getValues("phoneNumber")}`}
            disable
            label="Mobile Number"
            required
            classes={["mt-3"]}
          />
          <Controller
            control={control}
            name="otp"
            rules={{
              required: true,
              minLength: 6,
              maxLength: 6,
              pattern: /^[0-9]/,
            }}
            render={({ field: { onChange, value = "", name } }) => (
              <InputComponent
                onchange={(val) => onChange(val)}
                value={value}
                label="OTP"
                required
                error={errors.otp?.type}
                name={name}
              />
            )}
          />
          <Row className="flex">
            <Col xs={8}>
              <AcademyButton
                classes={["bold", "my-3"]}
                variant="secondary"
                mode="solid"
                content="Verify and Register"
                type="submit"
                onClick={handleSubmit(async (val) => {
                  let confirmationResult = window.confirmationResult;
                  confirmationResult
                    .confirm(val.otp)
                    .then((result: any) => {
                      const user = result.user;
                      if (user) {
                        user.displayName = val.fullName;
                        user.email = val.email;
                        user["graduation"] = val.graduation;
                        addUser(user);
                        localStorage.setItem("userInfo", user);
                      }
                    })
                    .catch((error: any) => {
                      setError("otp", {
                        type: "invalidOTP",
                      });
                    });
                })}
              />
            </Col>
            <Col
              xs={4}
              className="d-flex justify-content-end align-items-center"
            >
              {counter > 0 ? (
                <Typo>Resend OTP {counter}s</Typo>
              ) : (
                <Typo>Resend OTP via SMS</Typo>
              )}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default FormSignUp;
