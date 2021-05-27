const GoTopButton = () => {
  return (
    <div
      className="flex"
      style={{
        width: "2.5rem",
        height: "2.5rem",
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        backgroundColor: "rgba(0,0,0,0.28)",
      }}
    >
      <svg
        className="mk-svg-icon"
        data-name="mk-icon-chevron-up"
        data-cacheid="icon-60ae3f13e2ad2"
        style={{ height: "16px", width: "16px", color: "#fff" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1792 1792"
      >
        <path
          fill="currentColor"
          d="M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"
        ></path>
      </svg>
    </div>
  );
};

export default GoTopButton;
