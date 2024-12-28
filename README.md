# Ejercicio Práctico: Manejo Avanzado del DOM y Elementos ReactJS para el Proyecto del Hospital
## Descripción
en esta actividad se implementa el manejo del DOM virtual, el uso de referencias para manipular elementos del DOM, y la integración de componentes avanzados en ReactJS, la optimización de rendimiento, y el uso defragmentos y componentes de orden superior.


### Estructura principal de carpetas
- **assets:** carpeta que contiene los elementos graficos del sitio web, en este caso, imagenes.
- **components:** carpeta que contiene todos los componentes creados y utilizados en el sitio web, como header y footer.
- **context:** contiene los contextos utilizados en el proyecto, en este caso DoctorContext.
- **data:** contiene los archivos JSON con los cuales se trabaja.
  - appointment.json: archivo que contiene toda la información asociada las citas medicas registradas
  - doctors.json: archivo que contiene toda la información respecto a cada doctor de la clinica.
  - services.json: archivo que contiene toda la información respecto a cada servicio medico ofrecido por la clinica a sus pacientes.
- **views:** contienen la estructura basica de las 5 pantallas principales del sitio web, desde ellas se llaman y utilizan los componentes.
  - contact: contiene la pantalla asociada al formulario de contacto.
  - home: pantalla principal del sitio, aqui, se listan los servicios ofrecidos por la clinica, llamando al componente ServiceList.
  - services: presenta información asociada al equipo medico de la clinica, llamando al componente DoctorCard.
  - RegisterAppointment: presenta un listado con todas las citas medicas registradas.
  - Appointment: contiene el formulario que permite agendar una cita medica, llamando al componente AppointmentForm.

### Manejo del DOM Virtual en ReactJS
El uso de DOM virtual, consiste en una representación del DOM almacenada en memoria, la cual, se sincroniza con el DOM real, de tal forma que cuendo ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles, con el objetivo de ahorrar recursos de procesamiento y brindar una experiencia de usuario más fluida en nuestras aplicaciones web. Esto, lo convierte en una de las principales ventajas y caracteristicas de React.
A lo largo de las secciones del sitio web se utiliza useEffect para gestionar la actualización del DOM al cargar los datos.
### Referencias
se crean referencias en la seccion **Contacto** para manejar el formulario y se implementa el boton volver al inicio, el cual al ser presionado por un usuario, pone el foco en el primer input del formulario.
### Fragmentos y contextos
se utiliza fragmentos en distintas secciones de la aplicacion, como en app.jsx, para evitar usos de div inncesarios. En cuanto a contextos se crear el contexto DoctorContext en la carpeta context para acceder a los datos de los doctores los cuales se visualizan en la sección **Servicios**.
### PropTypes
Se implemental propTypes en los componentes DoctorCard, ServiceList, y AppointmentForm, disponibles en la carpeta components.
### Portales
En la seccion **Servicios** cuando, se presenta la información de un doctor en una tarjeta se encuentra el botón **Ver mas**, el cual, al ser presionado abre un modal implementado mediante portales y componente de orden superior, que muestra mas información asocidada al doctor seleccionado.
### Profiler
Se implementan profiles en las secciones donde se considera se trabajan muchos datos, como RegisterAppointment (Registro de citas) y services (Servicios),  mediante la consola de las herramientas de desarrollador se puede visualizar la información recopilada.

 ### Visualización del proyecto
Para visualizar este proyecto se necesita que previamente cuentes con la instalación de:
- **Git**: [sitio de descarga] (https://git-scm.com/downloads)
- **Node.js**: [sitio de descarga] (https://nodejs.org/en/download/package-manager)
- **Visual Studio Code**: [sitio de descarga] (https://code.visualstudio.com/download)
  
Una vez que ya cuentes con lo descrito anteriormente, debes clonar este repositorio en una carpeta local, mediante el siguiente comando:
```bash
git clone https://github.com/lorenasotosanmartin/M4_EP1.git
```
cuando ya este clonado, escribir el siguiente comando en la consola: 
```bash
npm  i
```
y ejecutar el comando, para inicializar el proyecto: 
```bash
npm run serve
```
Finalmente, para visualizar el proyecto en tu navegador debes abrir la url http://localhost:3000/ 
