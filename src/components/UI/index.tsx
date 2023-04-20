import InputComponent from "./input/Input";

export * from "./text/Text";
export * from "./input/Input";

const Component = () => {
  return (
    <section className="section" style={{ padding: "10px" }}>
      <InputComponent
        required
        label="Mobile Number"
        placeholder="Enter your mobile number"
        isPhone={true}
      />
    </section>
  );
};
export default Component;
