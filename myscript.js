// https://www.w3schools.com/howto/howto_js_dropdown.asp
function toggleDropMenu() {
    // document.getElementById("dropdiv").classList.toggle("show");
    if (parseInt(getComputedStyle(document.querySelector("#dropdiv"),10).height)===0) {
    	let menu = document.getElementById("dropdiv").style
    	menu.height = '323px'
    	menu.opacity = 1
    } else {
    	let menu = document.getElementById("dropdiv").style
    	menu.height = 0
    	menu.opacity = 0
    }
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

  	if (parseInt(getComputedStyle(document.querySelector("#dropdiv"),10).height)!==0) {
    	let menu = document.getElementById("dropdiv").style
    	menu.height = 0
    	menu.opacity = 0
    }
    // var dropdowns = document.getElementsByClassName("dropdown-content");
    // var i;
    // for (i = 0; i < dropdowns.length; i++) {
    //   var openDropdown = dropdowns[i];
    //   if (openDropdown.classList.contains('show')) {
    //     openDropdown.classList.remove('show');
    //   }
    // }
  }
}
window.onload = function() {
    document.getElementById("top").innerHTML = "<ul><li id='menulogo'>Jason's Webpage</li><li id='dropmenuunit'><button onclick='toggleDropMenu()' class='dropbtn'>Menu</button><div id='dropdiv' class='dropdown-content'><ul><li class='menuunit'><a title='to education information' href='#sectionwithheader-education'>Education</a></li><li class='menuunit'><a onclick='javascript:toggleDropMenu()' title='to volunteer information' href='#sectionwithheader-volunteerwork'>Volunteer Work</a></li><li class='menuunit'><a onclick='javascript:toggleDropMenu()' title='to work history' href='#sectionwithheader-workhistory'>Work History</a></li><li class='menuunit'><a onclick='javascript:toggleDropMenu()' title='to projects information' href='#sectionwithheader-projects'>Projects</a></li><li class='menuunit'><a onclick='javascript:toggleDropMenu()' title='to repositories' href='#sectionwithheader-repositories'>Repositories</a></li><li class='menuunit'><a onclick='javascript:toggleDropMenu()' title='to repositories' href='#sectionwithheader-connect'>Connect</a></li></ul></div></li></ul>"
	// document.getElementById("companyclockimageslider").innerHTML =
	// <button
	// >Prev</button>
	// <img src="companyclock_0.png" alt="companyclock screen capture" style="max-width: px;"/>
	// <button
	// >Next</button>
}

// sticky function
// window.onscroll = function() {
// 	let menus = document.getElementsByClassName("menucontainer");
// 	menus.forEach(menu => {
// 		if (wi)
// 		menu.classList.toggle("sticky");
// 	});
// }