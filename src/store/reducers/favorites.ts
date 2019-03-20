import { ComponentState } from "react";
import { AnyAction } from "redux";

const INITIAL_STATE: any = [];

export default function favorites(
	state: ComponentState = INITIAL_STATE,
	action: AnyAction
) {
	switch (action.type) {
		case "ADD_FAVORITE":
			return [
				...state,
				{
					id: Math.random(),
					name: "facebook/react",
					description: "Description",
					url: "www.google.com"
				}
			];
			break;
		default:
			return state;
	}
}
