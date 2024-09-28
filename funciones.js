
//SECCION 1 CURSOS DISPONIBLES
// Función para mostrar u ocultar los detalles de cada curso
function toggleDetails(courseId) {
    var details = document.getElementById(courseId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}


//SECCION 2  AGREGAR CURSOS
// Cargar cursos guardados desde localStorage
document.addEventListener('DOMContentLoaded', cargarCursos);
document.getElementById('formCurso').addEventListener('submit', agregarCurso);

function agregarCurso(e) {
    e.preventDefault();
    
    // Obtener valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const docente = document.getElementById('docente').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const duracion = document.getElementById('duracion').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crear un objeto curso
    const curso = {
        nombre,
        docente,
        fechaInicio,
        duracion,
        descripcion
    };

    // Guardar en localStorage
    let cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));

    // Limpiar formulario y recargar lista de cursos
    document.getElementById('formCurso').reset();
    cargarCursos();
}

function cargarCursos() {
    const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    const listaCursos = document.getElementById('cursos');
    listaCursos.innerHTML = '';

    cursos.forEach((curso, index) => {
        const cursoDiv = document.createElement('div');
        cursoDiv.innerHTML = `
            <h3>${curso.nombre}</h3>
            <p><strong>Docente:</strong> ${curso.docente}</p>
            <p><strong>Fecha de Inicio:</strong> ${curso.fechaInicio}</p>
            <p><strong>Duración:</strong> ${curso.duracion} semanas</p>
            <p><strong>Descripción:</strong> ${curso.descripcion}</p>
            <button onclick="eliminarCurso(${index})">Eliminar</button>
            <hr>
        `;
        listaCursos.appendChild(cursoDiv);
    });
}

function eliminarCurso(index) {
    let cursos = JSON.parse(localStorage.getItem('cursos'));
    cursos.splice(index, 1);
    localStorage.setItem('cursos', JSON.stringify(cursos));
    cargarCursos();
}
