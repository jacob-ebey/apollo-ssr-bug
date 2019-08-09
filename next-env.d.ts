/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
	import * as Fetch from 'isomorphic-fetch';

	interface Global extends NodeJS.Global {
		fetch: Fetch;
	}
}

declare module 'react-collapsing-table-ssr/src/components/Table' {
	import * as React from 'react';

	export interface ReactCollapsingTable {
		rows: { [key: string]: any }[];
		columns: {
			accessor: string;
			label: string;
			priorityLevel: number;
			position: number;
			minWidth: number;
		}[];
	}

  export class ReactCollapsingTable extends React.Component<ReactCollapsingTableProps> {}

  export default ReactCollapsingTable;
}
