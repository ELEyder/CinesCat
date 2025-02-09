import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({
  children = "Button",
  type,
  onClick,
  block = false,
  variant = "primary",
  to = "",
  setMedia,
}) => {
  const navigate = useNavigate();

  if (type === "reset" && setMedia) {
    return (
      <label
        className={variant === "primary" ? styles.button : styles.secondary}
        htmlFor="media"
      >
        {children}
        <input
          type="file"
          name="media"
          id="media"
          className={styles.media}
          accept=".jpg, .gif, .mp4"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              setMedia(file);
            }
          }}
        />
      </label>
    );
  } else if (type === "header") {
    return (
      <button
        type={type}
        className={variant === "primary" ? styles.button : styles.secondary}
        {...(to ? { onClick: () => navigate(to) } : { onClick })}
        style={{ height: "70px" }}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type={type}
        className={variant === "primary" ? styles.button : styles.secondary}
        {...(to ? { onClick: () => navigate(to) } : { onClick })}
        style={block ? { display: "block", width: "100%" } : {}}
      >
        {children}
      </button>
    );
  }
};

export default Button;
