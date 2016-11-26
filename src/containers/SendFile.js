/*
This will dispatch the upload start request and handle response?
2. Make an action creator for submitting the form. It should:
(a) Send the file to the server and dispatch an action like `UPLOAD_START`. This should set global view state to `in progress`
(b) Receive response from server. Dispatch either `UPLOAD_SUCCESS` or `UPLOAD_ERROR` actions. `UPLOAD_SUCCESS` should set global
view state to `report view` and load the Report store with the response data. `UPLOAD_ERROR` should set global view state to `form view`.
*/

// SEND the request.
// RECIEVE the request.

import { connect } from 'react-redux'
import React from 'react'
