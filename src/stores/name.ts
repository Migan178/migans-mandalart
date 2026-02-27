import { writable } from "svelte/store";

const mandalartName = writable("");

export default mandalartName;

export const subNames = writable<string[]>(["", "", "", "", "", "", "", ""]);
