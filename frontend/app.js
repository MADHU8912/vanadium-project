async function checkBackend(){

    try{

        const response =
            await fetch("http://localhost:5000/api/status");

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