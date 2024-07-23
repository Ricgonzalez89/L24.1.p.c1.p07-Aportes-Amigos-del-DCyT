/* 10. Aportes Amigos DCyT
|* Los aportes a la asociación egresados del decanato se realizan en billetes de $5, $10 y $20.
|* Cuando llega una persona a aportar proporciona su cédula y la cantidad de billetes que entregará
|* de cada denominación. La administración guarda la cantidad de billetes por denominación
|* acumulados hasta el día anterior. Se desea conocer el monto total aportado por cada persona, el
|* total reunido en el día, el total incluyendo lo de días anteriores y el porcentaje de billetes de 20
|* en relación a la cantidad total de billetes.
|* Monto total aportado por la persona con cedula 12122344 20$
|* Monto total aportado por la persona con cedula 33144567 80$
|* Monto total aportado por la persona con cedula 31123456 85$
|* Total reunido en el día 410$
|* Porcentaje de billetes de 20: 27.77%
|* La salida corresponde a los siguientes datos de la persona que aporta (cedula, cantidad billetes
|* de 5$, cantidad de billetes de 10$, cantidad de billetes de 20$): (12122344, 2, 1, 0)
|* (33144567,2,3,2) (31123456,1,2,3).
|* Cantidad de billetes de 5$ acumulados hasta el día anterior: 5
|* Cantidad de billetes de 10$ acumulados hasta el día anterior: 10
|* Cantidad de billetes de 20$ acumulados hasta el día anterior: 5
*/
import Cl_persona from "./Cl_persona.js";
import Cl_administracion from "./Cl_administracion.js";

let per1 = new Cl_persona("12122344", 2, 1, 0);
let per2 = new Cl_persona("33144567", 2, 3, 2);
let per3 = new Cl_persona("31123456", 1, 2, 3);
let asoc = new Cl_administracion(5, 10, 5);

asoc.procesarPersona(per1);
asoc.procesarPersona(per2);
asoc.procesarPersona(per3);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Monto total aportado por la persona con cédula ${per1.cedula}: ${per1.calcMontoAporte()}$
<br>Monto total aportado por la persona con cédula ${per2.cedula}: ${per2.calcMontoAporte()}$
<br>Monto total aportado por la persona con cédula ${per3.cedula}: ${per3.calcMontoAporte()}$
<br>
<br>Aportes reunidos el día de hoy: ${asoc.devolverMontoDia()}$
<br>Total reunido en el día: ${asoc.calcMontoTotal()}$
<br>Porcentaje de billetes de 20: ${asoc.calcPorcBi20().toFixed(2)}%
`;