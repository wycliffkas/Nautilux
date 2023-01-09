import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { createIntervention } from "../actions";
import CreateInterventionsForm from "../components/CreateInterventionsForm";

const CreateIntervention = () => {
	const [intervention, setIntervention] = useState({});

	const dispatch = useDispatch();

	const history = useHistory();

	const onCreateIntervention = (event) => {
		event.preventDefault();
		let currentDate = moment().format("YYYY-MM-DD HH:ss:mm");
		const updatedIntervention = { ...intervention, created_at: currentDate };
		dispatch(createIntervention(updatedIntervention));
		history.push("/");
	};

	const handleOnChange = (event) => {
		const { name, value } = event.target;

		setIntervention((prev) => ({
			...prev,
			[name]: value
		}));
	};

	return (
		<div>
			<CreateInterventionsForm
				createIntervention={onCreateIntervention}
				handleOnChange={handleOnChange}
			/>
		</div>
	);
};

export default CreateIntervention;
