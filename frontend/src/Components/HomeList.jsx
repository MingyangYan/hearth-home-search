import React from 'react';
import {Table} from 'react-bootstrap';

const HomeList = ({homeList=[]}) => {
	return (
	    <div style={{margin:'50px'}}>
			<Table striped responsive bordered>
				<thead>
					<tr>
					<th className="bt-none">Address</th>
					<th className="bt-none">City</th>
					<th className="bt-none">State</th>
					<th className="bt-none">Price</th>
					</tr>
				</thead>
				<tbody>
					{homeList.map((home, index) => {
						if (home) {
							return (
								<tr key={index}>
									<td>{home.address}</td>
									<td>{home.city}</td>
									<td>{home.state}</td>
									<td>{home.price}</td>
								</tr>
							)}
						else {
							return (
								<tr className="text-center">
								<td colSpan={3}>No home found</td>
								</tr>
							)
						}
					})}
				</tbody>
			</Table>
		</div>
  	);
}

export default HomeList