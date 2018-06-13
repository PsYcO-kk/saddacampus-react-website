import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class LoginPage extends Component {
	
	constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }
    
    handleSubmit = (event)=>{
	  event.preventDefault();
	  console.log("coming");
      const data = {
          username : this.state.username,
          password : this.state.password
      }
      fetch("http://127.0.0.1:3000/v1/membership/admin/auth", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response)=>{
          return response.json()
      })
      .then((response)=>{
		  console.log("1");
           if(response.success)
           {
			   console.log("2")
			 if(response.Admin.role === "super" || response.Admin.role === "core")
             {
				 console.log("3");
              this.props.history.push("/dashboard");
             }
             else{

             }
           }
           else{
         
           }
         })
      .catch((err)=>{
          this.setState(()=>({error:err}));
      })
      
    }
    
    handleUsername = (event)=>{
		const username = event.target.value;
		console.log(username);
        this.setState(()=>({
           username
		}));
  }
    handlePassword = (event)=>{
        const password = event.target.value;
        console.log(password);
        this.setState(()=>({
            password
        }));
    }


	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="8">
							<CardGroup>
								<Card className="p-4">
									<CardBody>
									<h1>Login</h1>
									<p className="text-muted">Sign In to your account</p>
									<InputGroup className="mb-3">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="fas fa-user"></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input type="text" placeholder="Username" onChange={this.handleUsername} />
									</InputGroup>
									<InputGroup className="mb-4">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="fas fa-lock"></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input type="password" placeholder="Password" onChange={this.handlePassword} />
										</InputGroup>
									<Row>
										<Col xs="6">
											<Button color="primary" className="px-4"  onClick={this.handleSubmit} >Login</Button>
										</Col>
										<Col xs="6" className="text-right">
											<Button color="link" className="px-0">Forgot password?</Button>
										</Col>
									</Row>
									</CardBody>
								</Card>
								<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
									<CardBody className="text-center">
										<div>
											<h2>Sign up</h2>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
											labore et dolore magna aliqua.</p>
											<Button color="primary" className="mt-3" active>Register Now!</Button>
										</div>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
			);
		}
	}

export default LoginPage;
