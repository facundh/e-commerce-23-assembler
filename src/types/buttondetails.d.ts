import { MouseEvent } from "react";

export type ButtonAction = {
	initialValue?: number;
	label: string;
	action: (event: MouseEvent<HTMLButtonElement>) => void;
	id: string;
	display: string;
	quantity:number,
	
};