import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

const Administrators = () => (
	<div>
		<Link to="/admin/administrators/create" className="nav-link">
			<Button color="primary" size="lg" block>Create New Administrator</Button>
		</Link>
		<br />
		<Table striped>
			<thead>
				<tr>
					<th>#</th>
					<th>Admin ID</th>
					<th>Username</th>
					<th>Password</th>
					<th>Email</th>
					<th>Role</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>sadd4kfue954ji4nk014</td>
					<td>saddacampussuper</td>
					<td>Campusjoy69</td>
					<td>saddacampus@gmail.com</td>
					<td>Super</td>
				</tr>
			</tbody>
		</Table>
	</div>
);

export default Administrators;
