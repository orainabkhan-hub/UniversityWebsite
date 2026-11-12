
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f7fb;
    color: #263445;
}

/* HEADER */
header {
    background: linear-gradient(120deg, #142d4e, #3478a5);
    color: white;
    text-align: center;
    padding: 65px 20px;
}

header h1 {
    font-size: 40px;
    margin: 0 0 15px;
}

header p {
    font-size: 18px;
    letter-spacing: 2px;
}

/* NAVIGATION */
nav {
    background: white;
    padding: 20px;
    text-align: center;
    box-shadow: 0 3px 12px #d5dce5;
    position: sticky;
    top: 0;
    z-index: 10;
}

nav a {
    display: inline-block;
    color: #173b60;
    text-decoration: none;
    font-weight: bold;
    margin: 5px 15px;
    padding: 10px 15px;
    border-radius: 25px;
}

nav a:hover {
    background: #173b60;
    color: white;
}

/* SECTIONS */
section {
    background: white;
    width: 88%;
    margin: 35px auto;
    padding: 35px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(25, 55, 85, 0.09);
}

section h2 {
    color: #173b60;
    font-size: 27px;
    border-bottom: 3px solid #74a9cf;
    padding-bottom: 12px;
    margin-bottom: 22px;
}

/* PARAGRAPHS */
section p {
    line-height: 1.8;
    font-size: 16px;
}

/* IMAGES */
img {
    width: 420px;
    max-width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
    margin: 25px auto;
    border-radius: 15px;
    border: 5px solid #e5eff7;
    box-shadow: 0 5px 15px #cbd8e3;
}

/* DEPARTMENTS */
ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 15px;
}

li {
    background: #edf4fa;
    padding: 20px;
    border-radius: 10px;
    border-left: 5px solid #3478a5;
    font-weight: bold;
    text-align: center;
}

/* TABLE */
table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
}

th {
    background: #173b60;
    color: white;
    padding: 17px;
}

td {
    padding: 15px;
    border-bottom: 1px solid #dce5ed;
}

tr:nth-child(even) {
    background: #edf4fa;
}

tr:hover {
    background: #dcebf7;
}

/* FORM */
form {
    max-width: 550px;
}

label {
    display: inline-block;
    margin-top: 15px;
    font-weight: bold;
    color: #173b60;
}

input, select {
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #b9cbd9;
    border-radius: 7px;
    max-width: 100%;
}

input:focus, select:focus {
    outline: 2px solid #74a9cf;
}

/* BUTTONS */
button {
    background: #24658f;
    color: white;
    padding: 13px 25px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
}

button:hover {
    background: #142d4e;
}

/* FOOTER */
footer {
    background: #142d4e;
    color: white;
    text-align: center;
    padding: 28px;
    margin-top: 40px;
}

/* MOBILE */
@media (max-width: 600px) {
    section {
        width: 94%;
        padding: 20px;
    }

    header h1 {
        font-size: 28px;
    }

    nav a {
        margin: 3px;
    }

    table {
        font-size: 12px;
    }
}
