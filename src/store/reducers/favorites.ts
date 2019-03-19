import { Action } from "redux";
import { ComponentState } from "react";

const INITIAL_STATE: ComponentState = [];

export default function favorites(
	state: ComponentState = INITIAL_STATE,
	action: Action
) {
	switch (action.type) {
		case "ADD_FAVORITE":
			return [
				...state,
				{
					id: Math.random(),
					name: "facebook/react",
					description: "text description",
					url: "google.com"
				}
			];
			break;
		default:
			return state;
	}
}
