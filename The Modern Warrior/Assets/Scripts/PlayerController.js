#pragma strict
var speed : float;

function FixedUpdate(){
	var moveHorizontal : float = Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");
	
	var movement : Vector3 = new Vector3(moveHorizontal, 0.0f, moveVertical);
	rigidbody.AddForce(movement * speed * Time.deltaTime);
}