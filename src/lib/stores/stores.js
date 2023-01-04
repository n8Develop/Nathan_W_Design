import { writable } from "svelte/store";

export let todos = writable([
    {id: 0,name: "Main Page", checked:false},
    {id: 1,name: "Other Page", checked:false}
]);







export let GitContributions = writable([
    {month: 0, date: "2023-01-04"}
]);