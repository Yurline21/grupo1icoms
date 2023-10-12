function Mostrartxt(flag){
	if (flag==1) {
		document.getElementById('txt1').style.display="block";
		document.getElementById('txt2').style.display="none";
		document.getElementById('txt3').style.display="none";
	}
	if (flag==2) {
		document.getElementById('txt1').style.display="none";
		document.getElementById('txt2').style.display="block";
		document.getElementById('txt3').style.display="none";
	}
	if (flag==3) {
		document.getElementById('txt1').style.display="none";
		document.getElementById('txt2').style.display="none";
		document.getElementById('txt3').style.display="block";
	}
}
function MostrarIntInf(flag){
	if (flag==1) {
		document.getElementById('Integrantes').style.display="block";
		document.getElementById('informacion').style.display="none";
	}
	if (flag==2) {
		document.getElementById('Integrantes').style.display="none";
		document.getElementById('informacion').style.display="block";
	}
}
function MostrarServicios(flag){
	if (flag==1) {
		document.getElementById('serv1').style.display="block";
		document.getElementById('serv2').style.display="none";
		document.getElementById('serv3').style.display="none";
	}
	if (flag==2) {
		document.getElementById('serv1').style.display="none";
		document.getElementById('serv2').style.display="block";
		document.getElementById('serv3').style.display="none";
	}
	if (flag==3) {
		document.getElementById('serv1').style.display="none";
		document.getElementById('serv2').style.display="none";
		document.getElementById('serv3').style.display="block";
	}
}