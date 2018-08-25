import React from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	Button
} from 'reactstrap';

export default class CreateMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			categories: [],
		}
	}

	handleAddCategory = (e) => {
		e.preventDefault();
		const category_name = e.target.value;
		this.setState(() => ({ categories: [] }));
	}

	handleAddFoodItem = (e) => {
		e.preventDefault();
		const foodItem_name = e.target.value;
		this.setState(() => ({ categories: [] }));
	}

	render(){
		return(
			<Container>
				<legend>Create Menu or Add Food-Items</legend>
				{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
				{this.state.categories.map((category) => (
					<div>
						<Form onSubmit={this.handleAddCategory}>
							<FormGroup>
								<InputGroup style={{ paddingTop: '3%' }}>
									<Input type="text" name="category" placeholder="Enter Category Name" />
									<InputGroupAddon addonType="append">
										<Button name="add_category">Add Category</Button>
									</InputGroupAddon>
								</InputGroup>
							</FormGroup>
						</Form>
						{category.foodItems.map((foodItem) => (
							<Form inline style={{ padding: '1% 10%' }} onSubmit={this.handleAddFoodItem}>
								<FormGroup>
									<InputGroup>
										<Input type="text" name="food-item" placeholder="Enter Food-Item Name" value={foodItem.name} />
									</InputGroup>
									&nbsp;
									<InputGroup>
										<Input type="number" name="price" placeholder="Enter Price" value={foodItem.price} />
									</InputGroup>
									&nbsp;
									<Button>Add Food-Item</Button>
								</FormGroup>
							</Form>
						))}
						<Form inline style={{ padding: '1% 10%' }} onSubmit={this.handleAddFoodItem}>
							<FormGroup>
								<InputGroup>
									<Input type="text" name="food-item" placeholder="Enter Food-Item Name" />
								</InputGroup>
								&nbsp;
								<InputGroup>
									<Input type="number" name="price" placeholder="Enter Price" />
								</InputGroup>
								&nbsp;
								<Button>Add Food-Item</Button>
							</FormGroup>
						</Form>
					</div>
				))}
				<Form onSubmit={this.handleAddCategory}>
					<FormGroup>
						<InputGroup style={{ paddingTop: '3%' }}>
							<Input type="text" name="category" placeholder="Enter Category Name" />
							<InputGroupAddon addonType="append">
								<Button name="add_category">Add Category</Button>
							</InputGroupAddon>
						</InputGroup>
					</FormGroup>
				</Form>
			</Container>
		);
	}
}
