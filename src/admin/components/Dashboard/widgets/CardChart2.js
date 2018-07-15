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
			backgroundColor: brandInfo,
			borderColor: 'rgba(255,255,255,.55)',
			data: [1, 18, 9, 17, 34, 22, 11],
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
			gridLines: {
				color: 'transparent',
				zeroLineColor: 'transparent',
			},
			ticks: {
				fontSize: 2,
				fontColor: 'transparent',
			},
		}],
		yAxes: [
		{
			display: false,
			ticks: {
				display: false,
				min: Math.min.apply(Math, data.datasets[0].data) - 5,
				max: Math.max.apply(Math, data.datasets[0].data) + 5,
			},
		}],
	},
	elements: {
		line: {
			tension: 0.00001,
			borderWidth: 1,
		},
		point: {
			radius: 4,
			hitRadius: 10,
			hoverRadius: 4,
		},
	},
};

export default class CardChart2 extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<Col xs="12" sm="6" lg="3">
				<Card className="text-white bg-primary">
					<CardBody className="pb-0">
						<ButtonGroup className="float-right">
							<Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
								<DropdownToggle className="p-0" color="transparent">
									<i className="icon-location-pin"></i>
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
						<div className="chart-wrapper mx-3" style={{ height: '70px' }}>
					<Line data={data} options={opts} height={70} />
					</div>
				</Card>
			</Col>
		);
	}
}
