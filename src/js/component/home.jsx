import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="flex flex-col items-center">
      		<h1 className="text-xl mt-5">Hello Rigo!</h1>
      		<img src="./rigo-baby.jpg" />
			<p className="bg-yellow-300 w-full text-center mt-4 p-4">
				If this text is <b>not</b> centered and <b>yellow</b>, you probably have
				an error
			</p>
			<div className="absolute bottom-0 w-full text-center p-4">
				Made with ❤️ by
				<a href="https://www.4geeksacademy.com">4Geeks Academy</a>
			</div>
   		 </div>
	);
};

export default Home;
