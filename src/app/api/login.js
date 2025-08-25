async function login() {
  const res = await fetch("https://common.sandbox.unaport.com/api/v1/public/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "developer@unacores.com",
      password: "Q7gCljuppDnP0po"
    }),
  });

  const data = await res.json();
  console.log("Access Token:", data.access_token);
  console.log("Refresh Token:", data.refresh_token);
}
