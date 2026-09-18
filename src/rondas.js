const RONDAS=[
 {n:"Financiera y cartera", f:[
  {k:"rol",x:"Eres un auditor financiero con 10 años en entidades vigiladas por la Superintendencia Financiera."},
  {k:"rol",x:"Eres un auditor de crédito que revisa el ciclo completo de originación de vivienda."},
  {k:"ctx",x:"La conciliación bancaria tiene partidas pendientes desde hace más de 90 días."},
  {k:"ctx",x:"La cartera vencida pasó de 4.2% a 5.1% en el último trimestre."},
  {k:"ins",x:"Devuelve una tabla de hallazgos con condición, criterio, causa y efecto."},
  {k:"ins",x:"No concluyas sobre la suficiencia de la provisión, presenta solo la brecha."}]},
 {n:"TI y cumplimiento", f:[
  {k:"rol",x:"Eres un auditor de TI que revisa accesos al sistema core de afiliados."},
  {k:"rol",x:"Eres un oficial de cumplimiento que evalúa el SARLAFT del FNA."},
  {k:"ctx",x:"Se encontraron cuentas de exfuncionarios activas después de su retiro."},
  {k:"ctx",x:"El canal de denuncias tiene casos abiertos más allá del plazo interno."},
  {k:"ins",x:"Marca con [verificar] cualquier plazo regulatorio que cites."},
  {k:"ins",x:"No incluyas nombres de funcionarios, usa el cargo o el rol."}]},
 {n:"Las que engañan", f:[
  {k:"rol",x:"Eres un auditor que escribe para un Comité de Auditoría sin formación técnica."},
  {k:"rol",x:"Eres realista al estimar la severidad de un hallazgo antes de escalarlo."},
  {k:"ctx",x:"Toda la información de este caso está anonimizada para el ejercicio."},
  {k:"ctx",x:"Ya se solicitó el soporte documental y el área no respondió a tiempo."},
  {k:"ins",x:"Separa lo que es evidencia confirmada de lo que sigue siendo una hipótesis."},
  {k:"ins",x:"No emitas la opinión de auditoría, eso corresponde al informe final."}]}
];
