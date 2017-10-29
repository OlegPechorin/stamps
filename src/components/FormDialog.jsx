import React, {Component} from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {toggleDialog} from '../AC'

function FormDialog({dialogIsOpen, toggleDialog}) {
  return (
    <div>
      <Dialog open={dialogIsOpen} onRequestClose={toggleDialog}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send
            updates occationally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={toggleDialog} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

FormDialog.propTypes = {
  dialogIsOpen: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired
}

export default connect(({dialogIsOpen}) => ({dialogIsOpen}), {toggleDialog})(FormDialog)
