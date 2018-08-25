import React from 'react';
import { Line } from 'react-chartjs-2';
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
import getMembershipData from '../../../requests/getMembershipData';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// data example
const data = {
	labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
	datasets: [
		{
			label: 'Users registered',
			backgroundColor: brandPrimary,
			borderColor: 'rgba(255,255,255,.55)',
			data: [0,0,0,0,0,0,0],
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
			//   min: Math.min.apply(Math, cardChartData1.days.datasets[0].data) - 5,
			//   max: Math.max.apply(Math, cardChartData1.days.datasets[0].data) + 5,
			},
		}],
	},
	elements: {
		line: {
			borderWidth: 1,
		},
		point: {
			radius: 4,
			hitRadius: 10,
			hoverRadius: 4,
		},
	}
};

export default class CardChart1 extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			totalUser: 0,
			days: data,
			weeks: data,
			months: data,
			status: {
				totalUser: true,
				days: false,
				weeks: false,
				months: false
			}
		}
	}

	componentDidMount() {
		if(this.props.role == 'super' || this.props.role == 'core') {
			const admin_token = sessionStorage.getItem('admin-token');
			getMembershipData(admin_token)
			.then((response) => {
				if(response.success){
					this.setState({
						totalUser: response.result.totalUser.success ? response.result.totalUser.totalUserCount : 0,
						days: {
							labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
							datasets: [
								{
									label: 'Users registered',
									backgroundColor: brandPrimary,
									borderColor: 'rgba(255,255,255,.55)',
									data: response.result.lastSevenDays.success ? response.result.lastSevenDays.data : [],
								},
							],
						},
						weeks: {
							labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
							datasets: [
								{
									label: 'Users registered',
									backgroundColor: brandPrimary,
									borderColor: 'rgba(255,255,255,.55)',
									data: response.result.lastSevenWeeks.success ? response.result.lastSevenWeeks.data : [],
								},
							],
						},
						months: {
							labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
							datasets: [
								{
									label: 'Users registered',
									backgroundColor: brandPrimary,
									borderColor: 'rgba(255,255,255,.55)',
									data: response.result.lastSevenMonths.success ? response.result.lastSevenMonths.data : [],
								},
							],
						}
					});
				}
			})
			.catch((error) => { console.log(error.message) });
		}
	}

	render(){
		return(
			<Col xs="12" sm="6" lg="3">
				<Card className="text-white bg-info">
					<CardBody className="pb-0">
						<ButtonGroup className="float-right">
							<ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
								<DropdownToggle caret className="p-0" color="transparent">
									<i className="icon-settings"></i>
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem active={this.state.status.totalUser} onClick={() => {this.setState({ status: { totalUser: true, days: false, weeks: false, months: false } })}}>Total Users</DropdownItem>
									<h6 className="dropdown-header">Users registered in</h6>
									<DropdownItem active={this.state.status.days} onClick={() => {this.setState({ status: { totalUser: false, days: true, weeks: false, months: false } })}}>Last 7 days</DropdownItem>
									<DropdownItem active={this.state.status.weeks} onClick={() => {this.setState({ status: { totalUser: false, days: false, weeks: true, months: false } })}}>Last 7 weeks</DropdownItem>
									<DropdownItem active={this.state.status.months} onClick={() => {this.setState({ status: { totalUser: false, days: false, weeks: false, months: true } })}}>Last 7 months</DropdownItem>
								</DropdownMenu>
							</ButtonDropdown>
						</ButtonGroup>
						<div className="text-value">{
							this.state.status.totalUser ? this.state.totalUser : (
								this.state.status.months ? this.state.months.datasets[0].data.reduce((a, b) => a + b, 0) : (
									this.state.status.days ? this.state.days.datasets[0].data.reduce((a, b) => a + b, 0) : (
										this.state.status.weeks ? this.state.weeks.datasets[0].data.reduce((a, b) => a + b, 0) :
										0
									)
								)
							)
						}</div>
						<div>Users registered</div>
					</CardBody>
					<div className="chart-wrapper mx-3" style={{ height: '70px' }}>
						<Line data={
							this.state.status.months ? this.state.months : (
								this.state.status.days ? this.state.days : (
									this.state.status.weeks ? this.state.weeks :
									{}
								)
							)
						} options={opts} height={70} />
					</div>
				</Card>
			</Col>
		);
	}
}
