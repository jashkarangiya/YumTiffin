import React, { PureComponent } from 'react'
import './Signuppage.css';
export default class Signuppage extends PureComponent {
  render() {
    return (
      <div>
        
<main className="main">
	<div className="signupcontainer">
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large" id='text-large'>Register your account</h1>
				<p id='register-heading'>Fill the below details to register</p>
				
			</div>
			<form name="signin" className="form">
				<div id='flnamelabel'>
				<p id='fnamelabel'>First Name</p>
				
				<p id='lnamelabel'>Last Name</p>
				
				</div>
				<div id='flname'>
				<div className="input-control">
					<label for="email" className="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="fname" className="input-field" placeholder="Email Address"/>
				</div>
				<div className="input-control">
					<label for="email" className="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="lname" className="input-field" placeholder="Email Address"/>
				</div>
				</div>
			
			<p id='login-label'>Email</p>
				<div className="input-control">
					<label for="email" className="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="email" className="input-field" placeholder="Email Address"/>
				</div>
				<div className="striped">
				<span className="striped-line">---------------------------------------------- </span>
				<span className="striped-text">or continue with </span>
				<span className="striped-line">-----------------------------------------------</span>
			</div>
			<div className="input-control">
				<p id='login-label'>Phone Number</p>
				<label for="phone" className="input-label" hidden>phone number</label>
				<input type="tel" id="phonenumber" name="phone" className="input-field" placeholder="Phone number" pattern="[0-9]{10}" required/>
				</div>
				<div className="input-control">
				<p id='login-label'>Password</p>
					<label for="password" className="input-label" hidden>Password</label>
					<input type="password" name="password" id="password" className="input-field" placeholder="Password"/>
				</div>
				
				
			</form>
			
			<div className="method">
				<div className="method-control1">
					<a href="#" className="method-action">
						
						Sign Up with Google
					</a>
				</div>
				<div>
				<input type="submit" name="submit" className="input-submit" value="Continue" disabled/>
				</div>
				<div className='already'>
				<span id='already-account'>Already have an account?</span><span>
				<a href="/login" className="already-login">
						
						Login
					</a>
				</span>
				</div>
				
				
				
			</div>
		</section>
	</div>
</main>

      </div>
    )
  }
}

