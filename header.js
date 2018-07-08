(function(){
	
	var appConfig={
		siteName:"Event Calendar",
		siteLogo:"https://www.gstatic.com/images/branding/product/2x/calendar_48dp.png"
	}

	var header = {
		build: function(){
			let page = document.getElementsByTagName("body")[0];
			//clear page
			page.innerHTML = "";
			nav = document.createElement("nav");
			nav.classList.add("navbar");
			nav.classList.add("navbar-default");
			page.appendChild(nav);
			
			containerDiv= document.createElement("div");
			containerDiv.classList.add("container-fluid");
			nav.appendChild(containerDiv);

			navbarHeader = document.createElement("div");
			navbarHeader.classList.add("navbar-header")
			containerDiv.appendChild(navbarHeader);
			
			siteName = document.createElement("a");
			siteName.classList.add("navbar-brand")
			siteName.href="javascript:void(0)";
			siteName.innerText = appConfig.siteName
			navbarHeader.appendChild(siteName);
			
			siteLogo = document.createElement("img");
			siteLogo.className = "logo";
			siteLogo.src = appConfig.siteLogo;
			navbarHeader.appendChild(siteLogo);
		}
	}
	header.build();
})()
