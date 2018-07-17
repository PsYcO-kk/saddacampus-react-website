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

const sparkLineChartData = [
	{
		data: [35, 23, 56, 22, 97, 23, 64],
		label: 'New Clients',
	},
	{
		data: [65, 59, 84, 84, 51, 55, 40],
		label: 'Recurring Clients',
	},
	{
		data: [35, 23, 56, 22, 97, 23, 64],
		label: 'Pageviews',
	},
	{
		data: [65, 59, 84, 84, 51, 55, 40],
		label: 'Organic',
	},
	{
		data: [78, 81, 80, 45, 34, 12, 40],
		label: 'CTR',
	},
	{
		data: [1, 13, 9, 17, 34, 41, 38],
		label: 'Bounce Rate',
	},
];

const makeSparkLineData = (dataSetNo, variant) => {
	const dataset = sparkLineChartData[dataSetNo];
	const data = {
		labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		datasets: [
			{
				backgroundColor: 'transparent',
				borderColor: variant ? variant : '#c2cfd6',
				data: dataset.data,
				label: dataset.label,
			},
		],
	};
	return () => data;
};

const sparklineChartOpts = {
	tooltips: {
		enabled: false,
		custom: CustomTooltips
	},
	responsive: true,
	maintainAspectRatio: true,
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
			hoverBorderWidth: 3,
		},
	},
	legend: {
		display: false,
	},
};

export default class SparkLineChart2 extends React.Component{
	render(){
		return(
			<Col sm="6">
				<div className="callout callout-danger">
					<small className="text-muted">Recurring Clients</small>
					<br />
					<strong className="h4">22,643</strong>
					<div className="chart-wrapper">
						<Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
					</div>
				</div>
			</Col>
		);
	}
}
