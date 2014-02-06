//This tells the window to wait for everything to load before starting to run the javascript
$(init);

//Checkout form validation messages 
	var checkoutMessages = 
	{
		firstName:				
		{
			required: "Don't leave this blank!",
		},
		lastName:
		{
			required: "Don't leave this blank!",
		},
		street:
		{
			required: "Don't leave this blank!",
		},
		city:
		{
			required: "Don't leave this blank!",
		},
		cardNum:
		{
			required: "Don't leave this blank!",
			digits: "Numbers only!"
		}
	};
	
//Checkout Event in defined here
	var checkoutEvent =
	{
		submitHandler: processPayment,	
		rules: checkoutRules,					
		messages: checkoutMessages			
	};
	
	
//Ensures that the proper form is validated with the corresponding event
	$("#checkoutForm").validate(checkoutEvent);
