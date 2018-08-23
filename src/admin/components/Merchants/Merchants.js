import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import getMerchantList from '../../requests/getMerchantList';

export default class Merchants extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			merchants : []
		}
	}
	componentDidMount(){
		const admin_token = sessionStorage.getItem('admin-token');
		getMerchantList(admin_token)
		.then((data) => {
			if(data.success){
				this.setState({ merchants: data.Merchants });
			}
		});
	}
	render(){
		return(
			<div>
				<Link to="/admin/merchants/create" className="nav-link">
					<Button color="primary" size="lg" block>Create New Merchant</Button>
				</Link>
				<br />
				<Table striped>
					<thead>
						<tr>
							<th>#</th>
							<th>Merchant ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Contact No.</th>
							<th>Alternate Contact No.</th>
						</tr>
					</thead>
					<tbody>
						{this.state.merchants.map((merchant) => (
							<tr>
								<th scope="row">1</th>
								<td>{merchant.merchant_id}</td>
								<td>{merchant.name}</td>
								<td>{merchant.email}</td>
								<td>{`${merchant.country_code} - ${merchant.number}`}</td>
								<td>{`${merchant.alternate_country_code} - ${merchant.alternate_number}`}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}
