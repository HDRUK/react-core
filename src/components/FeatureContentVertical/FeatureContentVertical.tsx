/** @jsxImportSource @emotion/react */
import { Card, CardBody } from "../Card";
import { cx } from "@emotion/css";

import * as styles from "./FeatureContentVertical.styles";
import { FeatureContentVerticalProps } from "./FeatureContentVertical.types";
import FeatureContentBody from "../FeatureContent/FeatureContentBody";
import FeatureContentHeader from "../FeatureContent/FeatureContentHeader";
import FeatureContentActions from "../FeatureContent/FeatureContentActions";

const FeatureContentVertical = ({
    className,
    media,
    header,
    body,
    actions,
    ...outerProps
}: FeatureContentVerticalProps) => {
    return (
        <Card
            className={cx("ui-FeatureContentVertical", className)}
            {...outerProps}>
            <CardBody>
                <div css={styles.root}>
                    {header && (
                        <FeatureContentHeader mb={3}>
                            {header}
                        </FeatureContentHeader>
                    )}
                    <div css={styles.media}>{media}</div>
                    {body && (
                        <FeatureContentBody mb={4}>{body}</FeatureContentBody>
                    )}
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
