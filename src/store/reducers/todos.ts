import { ReducersMapObject } from "redux";

const INITIAL_STATE = [
	{ id: 1, text: "Fazer Café" },
	{ id: 2, text: "Estudar React" }
];

export default function todos(state: Object, action: ReducersMapObject) {
	switch (action.type) {
		default:
			return state;
	}
}
