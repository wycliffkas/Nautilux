import React from "react";
import { useHistory } from "react-router-dom";

const CreateInterventionsForm = ({ handleOnChange, createIntervention }) => {
	const history = useHistory();

	const redirectToHomePage = (event) => {
		event.preventDefault();
		history.push("/");
	};

	return (
		<form onSubmit={createIntervention}>
			<div style={styles.buttonWrapper}>
				<button
					type="reset"
					onClick={redirectToHomePage}
					className="btn btn-outline-secondary">
					Annuler
				</button>
				<button
					type="submit"
					className="btn btn-warning"
					style={styles.createButton}>
					Creer
				</button>
			</div>

			<div className="mb-3">
				<label htmlFor="nom" className="form-label">
					NOM DE L'INTERVENTION
				</label>
				<input
					type="text"
					className="form-control"
					aria-describedby="nom"
					placeholder="Nom"
					name="name"
					onChange={handleOnChange}
          aria-required="true"
					required
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					DESCRIPTION
				</label>
				<textarea
					className="form-control"
					placeholder="Saisissez la description de L'intervention"
					rows="3"
					name="description"
					onChange={handleOnChange}
          aria-required="true"
					required></textarea>
			</div>

			<div className="mb-3">
				<label htmlFor="demandeur" className="form-label">
					DEMANDEUR
				</label>
				<input
					type="text"
					className="form-control"
					aria-describedby="demandeur"
					placeholder="Prenom Nom"
					name="sender_name"
					onChange={handleOnChange}
          aria-required="true"
					required
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					EMAIL
				</label>
				<input
					type="email"
					className="form-control"
					aria-describedby="email"
					placeholder="email@domaine.fr"
					name="sender_email"
					onChange={handleOnChange}
          aria-required="true"
					required
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="telephone" className="form-label">
					TELEPHONE
				</label>
				<input
					type="telephone"
					className="form-control"
					aria-describedby="telephone"
					placeholder="00 00 00 00 00"
					name="sender_phone"
					onChange={handleOnChange}
          aria-required="true"
					required
				/>
			</div>
		</form>
	);
};

export default CreateInterventionsForm;

const styles = {
	buttonWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "20px 0"
	},
	createButton: {
		color: "#ffffff"
	}
};
