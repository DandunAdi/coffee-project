const Title = ({ text, size }) => {
  return (
    <div style={{ padding: "2rem" }} className="flex">
      <div
        style={{
          borderTop: "2px solid rgb(68, 68, 68)",
          borderBottom: "2px solid rgb(68, 68, 68)",
          margin: "1rem",
          padding: "1rem",
          display: "inline-block",
        }}
      >
        <h1 className={size + " text-center"}>{text}</h1>
      </div>
    </div>
  );
};

export default Title;
