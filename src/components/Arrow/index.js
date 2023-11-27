import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Arrow = ({ index, activeIndex }) => {
  return (
    <KeyboardArrowRightIcon
      sx={{
        transition: "0.3s ease",
        transform: index === activeIndex ? "rotate(90deg)" : "0deg",
      }}
    />
  );
};
