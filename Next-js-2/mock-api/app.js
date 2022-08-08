// const express = require('express');
// const apiMocker = require('connect-api-mocker')
import express from 'express'
import apiMocker from 'connect-api-mocker'

const PORT = 3000;
const app = express();

app.use("/api", apiMocker("../mock-api"));
app.listen(PORT);