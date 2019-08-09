import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const PING_QUERY = gql`
	query Ping {
		ping
    error
	}
`;

export default () => {
	const { data, error, loading } = useQuery(PING_QUERY);

	if (loading) {
		return <div>Loading....</div>;
	}

	if (error) {
		return (
			<pre>
				<code>Got an error</code>
			</pre>
		);
	}

	return <div>Ping responded with "{data.ping}"</div>;
};
