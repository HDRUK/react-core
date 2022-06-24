import { useTheme } from "@emotion/react";
import { css } from "@emotion/css";
import { getCommonStyles } from "../../theme";
import { CommonStyleProps } from "../../types";

const useCommonStyles: any = (props: CommonStyleProps) => {
  const theme = useTheme();

  return css`
    ${getCommonStyles(props, theme)}
  `;
};

export default useCommonStyles;
