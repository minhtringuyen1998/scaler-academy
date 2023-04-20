import React from "react";
import InputComponent from "components/UI/input/Input";
import { Typo } from "components/UI/text/Text";
import { Form } from "./styles";
import { useForm, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Row } from "react-bootstrap";
import AcademyButton from "components/UI/academy-button/AcademyButton";
const FormLoginMail = (props: any) => {
  const { control, register, handleSubmit } = useForm();

  return (
    <Form
      method="POST"
      onSubmit={handleSubmit((val) => {
        console.log(val);
      })}
    >
      <InputComponent
        placeholder="Enter your mobile number"
        label="Email"
        required
        classes={["mt-3"]}
        type="text"
        // {...register("mail")}
      />
      <InputComponent
        placeholder="Enter your mobile number"
        label="Password"
        required
        classes={["mt-3"]}
        type="password"
        // {...register("password")}
      />
      <ReCAPTCHA
        className="mt-3"
        size="normal"
        sitekey="6Lff6IklAAAAAFvqnpQLYl9XQ1BvZpJE22Lp6pmo"
      />
      <Row className="mt-4">
        <Col xs={6}>
          <AcademyButton
            classes={["bold"]}
            variant="secondary"
            mode="solid"
            content="Login"
            type="submit"
          />
        </Col>
        <Col xs={6} className="d-flex justify-content-end align-items-center">
          {!props.isShowLoginWithMail ? (
            <Typo
              color="#1c6bf3"
              bold="bold"
              classes={["text-under"]}
              isClick
              onclick={() => {
                props.changeForm(true);
              }}
            >
              continue using mail
            </Typo>
          ) : (
            <Typo
              color="#1c6bf3"
              bold="bold"
              classes={["text-under"]}
              isClick
              onclick={() => {
                props.changeForm(false);
              }}
            >
              continue using phone
            </Typo>
          )}
        </Col>
      </Row>
    </Form>
  );
};
export default FormLoginMail;
