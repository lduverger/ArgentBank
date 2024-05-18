export async function login(email, password) {

    const preBody = {
        email: email,
        password: password,
    };

    const body = JSON.stringify(preBody);
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body
    });

    const data = await response.json();
    return data.body.token;
}

export async function signUp(userData) {

    const body = JSON.stringify(userData);

    const response = await fetch('http://localhost:3001/api/v1/user/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body
    });

    const data = await response.json();
    return data;
}

export async function postProfile(token) {

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    if (!response.ok) {
        console.log(data.message);
    }
    return data.body;
}

export async function putProfile(username, token) {

    const preBody = {
        userName: username,
    };

    const body = JSON.stringify(preBody);

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: body,
    });

    if (!response.ok) {
        console.log(data.message);
    }

    const data = await response.json();
    return data.body;
}