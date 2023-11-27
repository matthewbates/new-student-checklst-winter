import ExpandLess from "@mui/icons-material/ExpandLess";

export const Arrow = ({ index, activeIndex }) => {
  return (
    <ExpandLess
      sx={{
        transition: "0.3s ease",
        transform: index === activeIndex ? "rotate(180deg)" : "0deg",
      }}
    />
  );
};
