/** @jsxImportSource @emotion/react */
import Box from "../Box";
import { Card, CardBody } from "../Card";

import * as styles from "./FeatureContentHorizontal.styles";
import { FeatureContentHorizontalProps } from "./FeatureContentHorizontal.types";
import FeatureContentBody from "../FeatureContent/FeatureContentBody";
import FeatureContentHeader from "../FeatureContent/FeatureContentHeader";
import FeatureContentActions from "../FeatureContent/FeatureContentActions";

const FeatureContentHorizontal = ({
  media,
  header,
  body,
  actions,
  ...outerProps
}: FeatureContentHorizontalProps) => {
  return (
    <Card
      maxWidth="500px"
      {...outerProps}
      className="ui-FeatureContentHorizontal"
    >
      <CardBody>
        <Box
          display="grid"
          gridTemplateColumns="1fr 200px"
          gridTemplateRows="1fr"
        >
          <Box m={-2} gridColumn="1" css={styles.root}>
            {header && (
              <FeatureContentHeader mb={3}>{header}</FeatureContentHeader>
            )}
            {body && <FeatureContentBody mb={3}>{body}</FeatureContentBody>}
            {actions && (
              <FeatureContentActions>{actions}</FeatureContentActions>
            )}
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
