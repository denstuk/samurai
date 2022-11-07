export interface Account {
	id: string;
	type: string;
	name: string;
	status: string;
	openedDate: Date;
	closedDate: Date;
	accessLevel: string;
}

export type GetAccountsResult = { accounts: Account[] };
