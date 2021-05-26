const Title = ({ text, size }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          width: "15rem",
          borderBottom: "2px solid rgb(68, 68, 68)",
          margin: "0 auto 1rem",
        }}
      ></div>
      <h1 className={size + " text-center"}>{text}</h1>
      <div
        style={{
          width: "15rem",
          borderBottom: "2px solid rgb(68, 68, 68)",
          margin: "1rem auto 0",
        }}
      ></div>
    </div>
  );
};

export default Title;
