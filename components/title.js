const Title = ({ text, size, color }) => {
  const textColor = color === "white" ? "#fff" : "rgb(68, 68, 68)";
  return (
    <div style={{ padding: "2rem" }} className="flex">
      <div
        style={{
          borderTop: "2px solid " + textColor,
          borderBottom: "2px solid " + textColor,
          margin: "1rem",
          padding: "1rem",
          display: "inline-block",
          color: textColor,
        }}
      >
        <h1 className={size + " text-center"}>{text}</h1>
      </div>
    </div>
  );
};

export default Title;
