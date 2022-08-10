/** @jsxImportSource @emotion/react */

import * as styles from "./FileSelector.styles";
import { FileSelectorListingProps } from "./FileSelector.types";

import Box from "../Box";
import Icon from "../Icon";

import { ReactComponent as JsonIcon } from "../../images/icons/json.svg";

const FileSelectorListing = ({
  onRemove,
  fileList,
  actions,
}: FileSelectorListingProps) => {
  return (
    <table css={styles.table}>
      <thead>
        <tr>
          <th>File</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {[...fileList].map(({ name }) => {
          return (
            <tr key={name}>
              <td css={styles.nameColumn}>
                <Box
                  display="flex"
                  alignItems="center"
                  overflow="hidden"
                  width="100px"
                >
                  <Icon svg={<JsonIcon />} size="2xl" mr={2} /> {name}
                </Box>
              </td>
              <td>{name}</td>
              <td css={styles.actionsColumn}>
                <Box display="flex" justifyContent="flex-end" gap={1}>
                  {actions({ onRemove: () => onRemove(name) })}
                </Box>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

FileSelectorListing.defaultProps = {
  fileList: [],
};

export default FileSelectorListing;
