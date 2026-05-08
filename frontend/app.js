async function checkBackend(){

    try{

        const response =
            await fetch("https://vanadium-backend.onrender.com/api/status");

        const data = await response.json();

        document.getElementById("result").innerHTML = `

            Backend: ${data.backend}<br>
            Docker: ${data.docker}<br>
            Jenkins: ${data.jenkins}<br>
            GitHub Actions: ${data.githubActions}

        `;

    }catch(error){

        document.getElementById("result").innerText =
            "Backend Not Running";

    }

}