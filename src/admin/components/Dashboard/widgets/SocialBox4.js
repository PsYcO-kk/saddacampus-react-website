import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const socialBoxData = [
	{ data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
	{ data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
	{ data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
	{ data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
	const dataset = socialBoxData[dataSetNo];
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				backgroundColor: 'rgba(255,255,255,.1)',
				borderColor: 'rgba(255,255,255,.55)',
				pointHoverBackgroundColor: '#fff',
				borderWidth: 2,
				data: dataset.data,
				label: dataset.label,
			},
		],
	};
	return () => data;
};

const socialChartOpts = {
	tooltips: {
		enabled: false,
		custom: CustomTooltips
	},
	responsive: true,
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
		point: {
			radius: 0,
			hitRadius: 10,
			hoverRadius: 4,
			hoverBorderWidth: 3,
		},
	},
};

export default class SocialBox4 extends React.Component{
	render(){
		return(
			<Col xs="6" sm="6" lg="3">
				<div className="brand-card">
					<div className="brand-card-header bg-google-plus">
						<i className="fab fa-google-plus-g fa-3x" style={{ 'color': 'white' }}></i>
						<div className="chart-wrapper">
							<Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
						</div>
					</div>
					<div className="brand-card-body">
						<div>
							<div className="text-value">894</div>
							<div className="text-uppercase text-muted small">followers</div>
						</div>
						<div>
							<div className="text-value">92</div>
							<div className="text-uppercase text-muted small">circles</div>
						</div>
					</div>
				</div>
			</Col>
		);
	}
}
