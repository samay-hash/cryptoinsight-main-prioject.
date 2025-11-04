let ENDPOINT = "";
if (process.env.NODE_ENV === "development") {
    ENDPOINT = "http://localhost:5000"
}
else if (process.env.NODE_ENV === "production") {
    // ENDPOINT = "myhostedendpoint"
}

export default ENDPOINT;