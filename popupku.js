window.onscroll=function(){myFunction()};var header=document.getElementById("navbar");var sticky=header.offsetTop;function myFunction(){if(window.pageYOffset>sticky){header.classList.add("sticky")}else{header.classList.remove("sticky")}}
function popup(url,namawin)
{params='width='+(screen.width*80/100);params+=', height='+(screen.height*80/100);params+=', top=0, left='+(screen.width-(screen.width*80/100))/2
params+=', location=no,fullscreen=no, toolbar=no, menubar=no, status=no, directories=no';newwin=window.open(url,namawin,params);if(window.focus){newwin.focus()}
return!1}
$(document).ready(function(){$("#video").fadeIn(1000);$("#seeall").click(function(){popup("https://www.google.co.id/search?q=BPJS+Ketenagakerjaan+Cabang+Mojokerto,+Jl.+Gajah+Mada+No.135,+Mergelo,+Balongsari,+Magersari,+Kota+Mojokerto,+Jawa+Timur+61363&ludocid=5699857095980815915#lrd=0x2e780d8d94f02843:0x4f19f5d4646d162b,1","review")});$("#writereview").click(function(){popup("https://goo.gl/b8mUPe","writereview")})})
