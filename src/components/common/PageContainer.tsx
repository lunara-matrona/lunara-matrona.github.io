import { Container, type ContainerProps } from "@mui/material";

export default function PageContainer({ sx, ...props }: ContainerProps) {
  const customStyles = Array.isArray(sx) ? sx : sx ? [sx] : [];

  return (
    <Container
      maxWidth={false}
      sx={[
        { width: "100%", maxWidth: "1180px !important", px: { xs: 2, sm: 3 } },
        ...customStyles,
      ]}
      {...props}
    />
  );
}
