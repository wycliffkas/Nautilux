import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getIntervention } from "../actions";

const Intervention = () => {
	let { id } = useParams();
	const { intervention, error, loadingIntervention } = useSelector(
		(state) => state.interventions
	);

	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIntervention(id));
	}, [dispatch, id]);

	const redirectToHomePage = () => history.push("/");

	if (!!error.message) {
		return (
			<div style={styles.errorMessage}>Error fetching data, contact Admin</div>
		);
	}

	if (loadingIntervention) {
		return <div style={styles.loader}>Loading....</div>;
	}

	return (
		<div>
			<button
				onClick={redirectToHomePage}
				className="btn btn-outline-secondary"
				style={styles.backButton}>
				Retour
			</button>

			<div style={styles.wrapper}>
				<h5>
					<strong>{intervention.name}</strong>
				</h5>

				<p style={styles.title}>Description</p>

				<p>{intervention.description}</p>

				<p style={styles.title}>DEMANDEUR</p>

				<h6>
					<strong>{intervention.sender_name}</strong>
				</h6>

				<p>{intervention.sender_email}</p>
				<p>{intervention.sender_phone}</p>
			</div>
		</div>
	);
};

export default Intervention;

const styles = {
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
	wrapper: {
		border: "1px solid gray",
		borderRadius: "10px",
		padding: "20px"
	},
	backButton: {
		margin: "20px 0"
	},
  title: {
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "20px"
  }
};
