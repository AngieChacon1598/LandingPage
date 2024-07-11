document.getElementById('pacienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const id = form.id.value;
    const dni = form.dni.value;
    const nombres = form.nombres.value;
    const apellidos = form.apellidos.value;
    const fechaNacimiento = form.fecha_nacimiento.value;
    const genero = form.genero.value;
    const celular = form.celular.value;
    const email = form.email.value;
    const direccion = form.direccion.value;
    const colesterol = form.colesterol.value;
    const glucosa = form.glucosa.value;
    const hemoglobina = form.hemoglobina.value;
    const tipoSeguro = form.tipo_seguro.value;

    const tablaPacientes = document.getElementById('tablaPacientes');
    const newRow = tablaPacientes.insertRow();

    newRow.innerHTML = `
        <td>${id}</td>
        <td>${dni}</td>
        <td>${nombres}</td>
        <td>${apellidos}</td>
        <td>${fechaNacimiento}</td>
        <td>${genero}</td>
        <td>${celular}</td>
        <td>${email}</td>
        <td>${direccion}</td>
        <td>${colesterol}</td>
        <td>${glucosa}</td>
        <td>${hemoglobina}</td>
        <td>${tipoSeguro}</td>
    `;

    form.reset();
});
