import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getInterventions } from "../actions";
import InterventionsTable from "../components/InterventionsTable";

function InterventionsList() {
	const { interventions, error, loadingInterventions } = useSelector(
		(state) => state.interventions
	);

	const history = useHistory();

	const dispatch = useDispatch();

	const redirectToCreateIntervention = () => history.push("/create");

	useEffect(() => {
		if (!interventions.length) {
			dispatch(getInterventions());
		}
	}, [dispatch, interventions.length]);

	if (!!error.message) {
		return (
			<div style={styles.errorMessage}>Error fetching data, contact Admin</div>
		);
	}

	if (loadingInterventions) {
		return <div style={styles.loader}>Loading....</div>;
	}

	return (
		<div className="" style={styles.container}>
			<div style={styles.buttonWrapper}>
				<button
					type="button"
					className="btn btn-warning"
					onClick={redirectToCreateIntervention}
					style={styles.createButton}>
					Creer une intervention
				</button>
				<div>{`${interventions.length} Interventions`}</div>
			</div>

			<InterventionsTable interventions={interventions} />
		</div>
	);
}

export default InterventionsList;

const styles = {
	container: {
		marginTop: "3em",
		width: "100%"
	},
	errorMessage: {
		textAlign: "center",
		fontSize: "16px",
		marginTop: "20px",
		color: "red"
	},
	loader: {
		textAlign: "center",
		fontSize: "16px",
		marginTop: "20px"
	},
	buttonWrapper: {
		display: "flex",
		alignItems: "center",
		marginBottom: "20px"
	},
	createButton: {
		color: "#ffffff",
		marginRight: "10px"
	}
};
