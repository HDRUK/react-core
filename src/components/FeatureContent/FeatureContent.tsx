/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Box from "components/Box";
import { Card, CardBody } from "components/Card";

import * as styles from "./FeatureContent.styles";
import { FeatureContentProps } from "./FeatureContent.types";

const FeatureContent = ({ media, children }: FeatureContentProps) => {
  return (
    <Card>
      <CardBody>
        <Box display="flex">
          <Box flexGrow="1" m={-2}>
            {children}
          </Box>
          <Box
            flexGrow="0.4"
            minHeight="254px"
            maxWidth="200px"
            position="relative"
          >
            <div css={styles.media}>{media}</div>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default FeatureContent;
