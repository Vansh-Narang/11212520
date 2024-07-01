const express = require('express');
const app = express();
const PORT = 3000;
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5ODE0MDM5LCJpYXQiOjE3MTk4MTM3MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRlZTlmNTBmLTVlZWQtNDM0MS1hYTdhLTBhY2NmODg4NjY5YiIsInN1YiI6InZhbnNobmFyYW5nNDk5MDZAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI0ZWU5ZjUwZi01ZWVkLTQzNDEtYWE3YS0wYWNjZjg4ODY2OWIiLCJjbGllbnRTZWNyZXQiOiJTQXJRYUtVRGpIdExKTFlhIiwib3duZXJOYW1lIjoidmFuc2giLCJvd25lckVtYWlsIjoidmFuc2huYXJhbmc0OTkwNkBnbWFpbC5jb20iLCJyb2xsTm8iOiIxMTIxMjUyMCJ9.HdA0BTZ-H9_cnGxUFtnCAHfZSwhdl4DoQe6J67HEdUc';
app.get("/", (req, res) => {
    res.send("Welcome")
})

app.post("/", (req, res) => {

})
app.listen(PORT, () => {
    console.log("Server listening on port")
})