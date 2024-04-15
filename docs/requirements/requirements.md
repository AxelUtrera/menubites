# Requisitos de menubites

La siguiente numeracion pertenece a las funcionalidades 
relacionadas con el proyecto menubites v1.0.0

### Requisitos funcionales

1. Generar receta con base en un numero de personas
a para las cuales es esa comida.
> Ejemplo:   
> Le doy como entrada 4 personas y me debe dar la lista de 
> ingredientes y preparacion de esa receta.

2. Generar receta con base en un presupuesto, número de personas
y tipo de comida que se quiere.
> Ejemplo:  
> Ingreso un presupuesto de $120 pesos, 4 personas y plato fuerte
> como opcion de tipo de platillo y me debe generar la receta.

3. Capacidad para excluir ingredientes, o grupo de ellos.
> Ejemplo:  
> Debo poder excluir tanto como por ejemplo el jitomate, como tambien
> todo el grupo de tipo de ingrediente en este caso las verduras.

4. Capacidad del sistema para poder generar recetas de un tipo en especifico
por ejemplo, comidas para veganos, o comidas solo con carne, etc.
> Ejemplo:  
> Si selecciono la opcion de comidas veganas, solo se generarán comidas de
> este tipo.

5. Capacidad del sistema para generar cierto tipo de comida.
> Ejemplo:  
> Si ingreso una opción de generar solo comida mexicana, el sistema
> lo debe realizar.

### Reglas de negocio.
1. Se debe generar la receta con base en la ubicación en la cual
se encuentra el usario.
> Ejemplo:  
> Si el usuario se encuentra en veracruz, se generará una receta
> con ingredientes tipicos de esa región.


### Requisitos no funcionales.
1. Rendimiento: 
> Las consultas a las API de terceros deben realizarse en un máximo de 
> 10 segundos.


### Restricciones.
1. Se hará uso de IA generativa para la generación de recetas.