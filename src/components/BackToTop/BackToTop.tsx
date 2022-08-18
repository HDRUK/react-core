/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import IconButton from "../IconButton";
import { ReactComponent as ChevronUpIcon } from "../../images/icons/chevron-up.svg";
import { BackToTopProps } from "./BackToTop.types";
import * as styles from "./BackToTop.styles";

const BackToTop = ({
	scrollOffset = 100,
	size = "xs",
	variant = "secondary",
}: BackToTopProps) => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			toggleVisibility();
		});
	});

	const toggleVisibility = () => {
		setShowButton(window.scrollY > scrollOffset);
	};

	const jumpToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return showButton ? (
		<div css={styles.root()}>
			<IconButton
				onClick={jumpToTop}
				variant={variant}
				size={size}
				svg={<ChevronUpIcon />}
			/>
		</div>
	) : null;
};

export default BackToTop;
