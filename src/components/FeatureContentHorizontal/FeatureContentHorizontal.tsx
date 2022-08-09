/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Box from "components/Box";
import { Card, CardBody } from "components/Card";

import * as styles from "./FeatureContent.styles";
import { FeatureContentHorizontalProps } from "./FeatureContentHorizontal.types";
import FeatureContentBody from "../FeatureContent/FeatureContentBody";
import FeatureContentHeader from "../FeatureContent/FeatureContentHeader";

const FeatureContentHorizontal = ({
  media,
  header,
  body,
  ...outerProps
}: FeatureContentHorizontalProps) => {
  return (
    <Card maxWidth="500px" {...outerProps}>
      <CardBody>
        <Box
          display="grid"
          gridTemplateColumns="1fr 200px"
          gridTemplateRows="1fr"
        >
          <Box m={-2} gridColumn="1">
            {header && <FeatureContentHeader>{header}</FeatureContentHeader>}
            <FeatureContentBody>{body}</FeatureContentBody>
          </Box>
          {media && (
            <Box
              gridColumn="2"
              position="relative"
              minHeight="254px"
              maxWidth="200px"
            >
              <div css={styles.media}>{media}</div>
            </Box>
          )}
        </Box>
      </CardBody>
    </Card>
  );
};

export default FeatureContentHorizontal;
