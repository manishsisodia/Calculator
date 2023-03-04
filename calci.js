let expression=""
let show=document.getElementById("calc")
let answer=parseInt(show.value)
let data=""

function input(event)
{
	data=event.target.value
	//console.log(data)
	if(data=="C")
	{
		expression=""
		show.value=expression
	}
	else if(data=="=")
	{
		if(expression=="")
		{
			return 
		}
		answer=eval(expression)
	    show.value=answer	
	    expression=answer		
	}
	else if(data=="<-")
	{
		expression=expression.slice(0,-1)
		//console.log(expression)
		show.value=expression
	}
	else
	{
		expression+=data
		show.value=expression
	}
}