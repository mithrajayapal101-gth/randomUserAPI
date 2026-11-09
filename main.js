generate.addEventListener('click', async () => {
    const count = document.getElementById('count').value

    if (count && count > 0) {
        try {
            const url = `https://randomuser.me/api/?results=${count}`
            const response = await fetch(url)

            if (response.status != 200) {
                userdetails.innerHTML = `
                    <p class="text-danger text-center">
                        Failed to fetch users. Please try again.
                    </p>
                `
                return
            }

            const data = await response.json()
            console.log(data)

            userdetails.innerHTML = ""

            data.results.forEach((item) => {
                userdetails.innerHTML += `
                    <div class="col-lg-4 col-md-6">
                        <div class="card shadow text-center p-3">
                            <img src="${item.picture.large}"
                                class="rounded-circle mx-auto"
                                width="120" height="120">

                            <div class="card-body">
                                <h4>${item.name.first} ${item.name.last}</h4>
                                <p>Email: ${item.email}</p>
                                <p>Location: ${item.location.city}, ${item.location.country}</p>
                                <p>Phone: ${item.phone}</p>
                            </div>
                        </div>
                    </div>
                `
            })
        } catch (error) {
            userdetails.innerHTML = `
                <p class="text-danger text-center">
                    Something went wrong. Please try again.
                </p>
            `
            console.log(error)
        }
    } else {
        alert("Please enter a valid number of users")
    }
})