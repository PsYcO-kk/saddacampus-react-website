import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const FilterSection = () => (
	<div className="filter-section">
		<Form>
			<FormGroup>
				<Label>Categories</Label>
				<Input type="select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Input>
			</FormGroup>
			<FormGroup>
				<Label>Location</Label>
				<Input type="select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Input>
			</FormGroup>
			<FormGroup check style={{ marginBottom: '5%' }}>
				<Label check>
					<Input type="checkbox" />{' '}
					Work from home
				</Label>
			</FormGroup>
			<FormGroup>
				<Label>Starting Date</Label>
				<Input type="select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Input>
			</FormGroup>
			<FormGroup>
				<Label>Max Duration</Label>
				<Input type="select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Input>
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	</div>
);

export default FilterSection;
