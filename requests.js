document.addEventListener("DOMContentLoaded", () => {
    fetch("datos.json")
        .then(response => response.json())
        .then(data => {
            // Actualizar el nombre en la página
            document.getElementById("name").textContent = `Hola soy ${data.nombre}`;
            document.getElementById("nombreFooter").textContent = data.nombre;

            // Actualizar enlaces
            document.getElementById("facebookLink").href = data.enlaces.facebook;
            document.getElementById("instagramUser").href = data.enlaces.instagram;
            document.getElementById("xUser").href = data.enlaces.x;
            document.getElementById("githubUser").href = data.enlaces.github;
            document.getElementById("linkedinUser").href = data.enlaces.linkedin;
            document.getElementById("website").href = data.enlaces.blog;
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});

