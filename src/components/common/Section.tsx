import { Box, type BoxProps } from "@mui/material";

export default function Section({ sx, ...props }: BoxProps) {
  const customStyles = Array.isArray(sx) ? sx : sx ? [sx] : [];

  return (
    <Box
      component="section"
      sx={[{ py: { xs: 7.5, sm: 9, md: 12 } }, ...customStyles]}
      {...props}
    />
  );
}
