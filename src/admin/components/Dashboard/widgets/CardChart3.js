import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	ButtonGroup,
	Card,
	CardBody,
	Col,
	Dropdown,
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
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(255,255,255,.2)',
			borderColor: 'rgba(255,255,255,.55)',
			data: [78, 81, 80, 45, 34, 12, 40],
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
		}],
		yAxes: [
		{
			display: false,
		}],
	},
	elements: {
		line: {
			borderWidth: 2,
		},
		point: {
			radius: 0,
			hitRadius: 10,
			hoverRadius: 4,
		},
	},
};

export default class CardChart3 extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<Col xs="12" sm="6" lg="3">
				<Card className="text-white bg-warning">
					<CardBody className="pb-0">
						<ButtonGroup className="float-right">
							<Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
								<DropdownToggle caret className="p-0" color="transparent">
									<i className="icon-settings"></i>
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Action</DropdownItem>
									<DropdownItem>Another action</DropdownItem>
									<DropdownItem>Something else here</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</ButtonGroup>
						<div className="text-value">9.823</div>
						<div>Members online</div>
					</CardBody>
					<div className="chart-wrapper" style={{ height: '70px' }}>
						<Line data={data} options={opts} height={70} />
					</div>
				</Card>
			</Col>
		);
	}
}
