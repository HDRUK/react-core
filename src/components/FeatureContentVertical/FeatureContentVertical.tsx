/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Card, CardBody } from "components/Card";

import * as styles from "./FeatureContentVertical.styles";
import { FeatureContentVerticalProps } from "./FeatureContentVertical.types";
import FeatureContentBody from "../FeatureContent/FeatureContentBody";
import FeatureContentHeader from "../FeatureContent/FeatureContentHeader";
import FeatureContentActions from "components/FeatureContent/FeatureContentActions";

const FeatureContentVertical = ({
  media,
  header,
  body,
  actions,
  ...outerProps
}: FeatureContentVerticalProps) => {
  return (
    <Card {...outerProps} maxWidth="284px">
      <CardBody>
        <div css={styles.root}>
          {header && (
            <FeatureContentHeader mb={3}>{header}</FeatureContentHeader>
          )}
          <div css={styles.media}>{media}</div>
          {body && <FeatureContentBody mb={4}>{body}</FeatureContentBody>}
          {actions && (
            <FeatureContentActions textAlign="center">
              {actions}
            </FeatureContentActions>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default FeatureContentVertical;
