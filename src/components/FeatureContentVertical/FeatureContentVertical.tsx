/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Card, CardBody } from "components/Card";

import * as styles from "./FeatureContentVertical.styles";
import { FeatureContentVerticalProps } from "./FeatureContentVertical.types";
import FeatureContentBody from "../FeatureContent/FeatureContentBody";
import FeatureContentHeader from "../FeatureContent/FeatureContentHeader";

const FeatureContentVertical = ({
  media,
  header,
  body,
  ...outerProps
}: FeatureContentVerticalProps) => {
  return (
    <Card {...outerProps} maxWidth="284px">
      <CardBody>
        <div css={styles.root}>
          {header && <FeatureContentHeader>{header}</FeatureContentHeader>}
          <div css={styles.media}>{media}</div>
          <FeatureContentBody>{body}</FeatureContentBody>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeatureContentVertical;
