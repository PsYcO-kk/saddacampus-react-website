import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
	ButtonDropdown,
	ButtonGroup,
	Card,
	CardBody,
	Col,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// data example
const data = {
	labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(255,255,255,.3)',
			borderColor: 'transparent',
			data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
		},
	],
};

const opts = {
	tooltips: {
		enabled: false,
		custom: CustomTooltips
	},
	maintainAspectRatio: false,
	legend: {
		display: false,
	},
	scales: {
		xAxes: [
		{
			display: false,
			barPercentage: 0.6,
		}],
		yAxes: [
		{
			display: false,
		}],
	},
};

export default class CardChart4 extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<Col xs="12" sm="6" lg="3">
				<Card className="text-white bg-danger">
					<CardBody className="pb-0">
						<ButtonGroup className="float-right">
							<ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
								<DropdownToggle caret className="p-0" color="transparent">
									<i className="icon-settings"></i>
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Action</DropdownItem>
									<DropdownItem>Another action</DropdownItem>
									<DropdownItem>Something else here</DropdownItem>
								</DropdownMenu>
							</ButtonDropdown>
						</ButtonGroup>
						<div className="text-value">9.823</div>
						<div>Members online</div>
					</CardBody>
					<div className="chart-wrapper mx-3" style={{ height: '70px' }}>
						<Bar data={data} options={opts} height={70} />
					</div>
				</Card>
			</Col>
		);
	}
}
