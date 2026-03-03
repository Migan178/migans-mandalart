import { get, writable } from "svelte/store";

interface URIComponentData {
	name: string;
	subNames: string[];
	subGoals: string[][];
}

const mandalartName = writable("");

export default mandalartName;

export const subNames = writable<string[]>([]);

export const subGoals = writable<string[][]>([[], [], [], [], [], [], [], []]);

export function saveMandalart() {
	const data: URIComponentData = {
		name: get(mandalartName),
		subNames: get(subNames),
		subGoals: get(subGoals),
	};

	const uriComponent = encodeURIComponent(JSON.stringify(data));
	const encodedData = btoa(uriComponent);

	const url = new URL(window.location.href);
	url.searchParams.set("data", encodedData);
	window.history.replaceState({}, "", url);
}

export function loadMandalArt() {
	const params = new URLSearchParams(window.location.search);
	console.log(window.location.search);

	try {
		const encodedData = params.get("data") || "";
		if (!encodedData) return;
		const decodedData = atob(encodedData);
		const data: URIComponentData = JSON.parse(
			decodeURIComponent(decodedData),
		);

		mandalartName.set(data.name || "");
		subNames.set(data.subNames || []);
		subGoals.set(data.subGoals || [[], [], [], [], [], [], [], []]);
	} catch (err) {
		console.error(err);
	}
}
