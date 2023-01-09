import React, { useState, useCallback } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSortDown,
	faSortUp,
	faSort
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const sortTypes = {
	up: {
		icon: faSortUp,
		fn: (a, b) => new Date(a.created_at) - new Date(b.created_at)
	},
	down: {
		icon: faSortDown,
		fn: (a, b) => new Date(b.created_at) - new Date(a.created_at)
	},
	default: {
		icon: faSort,
		fn: (a, b) => a
	}
};

const Table = ({ interventions }) => {

	const [currentSort, setCurrentSort] = useState("default");

	const history = useHistory();

	const onSortChange = useCallback(() => {
		let nextSort;

		if (currentSort === "down") nextSort = "up";
		else if (currentSort === "up") nextSort = "default";
		else if (currentSort === "default") nextSort = "down";
		setCurrentSort(nextSort);
	}, [currentSort]);

	const redirectToDetailedPage = (id) => history.push(`/intervention/${id}`);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>
							<div style={styles.dateTitle}>
								DATE
								<div style={styles.iconWrapper}>
									<FontAwesomeIcon
										icon={sortTypes[currentSort].icon}
										onClick={onSortChange}
									/>
								</div>
							</div>
						</th>
						<th>NOM</th>
						<th>DESCRIPTION</th>
						<th>DEMANDEUR</th>
						<th>COORDONNEES</th>
					</tr>
				</thead>
				<tbody>
					{interventions.sort(sortTypes[currentSort].fn).map((intervation) => (
						<tr
							key={intervation.id}
							style={styles.tableRow}
							onClick={() => redirectToDetailedPage(intervation.id)}>
							<td>
								<div style={styles.dateWrapper}>
									{moment(intervation.created_at, "YYYY-MM-DD HH:mm:ss").format(
										"DD MMM"
									)}
								</div>
							</td>
							<td>
								{intervation.name}
								<br />
								{moment(intervation.created_at, "YYYY-MM-DD HH:mm:ss").format(
									"DD/MM/YYYY HH:mm"
								)}
							</td>
							<td>{intervation.description}</td>
							<td>{intervation.sender_name}</td>
							<td>
								{intervation.sender_email}
								<br />
								{intervation.sender_phone}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;

const styles = {
	tableRow: {
		borderBottom: "1px solid #ececec",
		pointer: "cursor"
	},
	dateTitle: {
		display: "flex",
		alignItems: "center"
	},
	iconWrapper: {
		marginLeft: "5px"
	},
	dateWrapper: {
		borderRadius: "10px",
		background: "black",
		color: "#ffffff",
		textAlign: "center",
		width: "40px"
	}
};
