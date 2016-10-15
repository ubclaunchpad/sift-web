import React, {Component} from 'react';
import 'react-dropzone';
import Dropzone from 'react-dropzone';

class DropArea extends Component {
  static displayName = "DropArea";
  state = {
    count : 0
  }
  onDrop (acceptedFile, rejectedFiles) {
    this.setState({
    files: acceptedFile
    });
  }
  //    onOpenClick () {
  //      this.dropzone.open();
  //    }
  render() {
    return (
      <div>
          <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
          <button type="button" onClick={this.onOpenClick}>
              Open Dropzone
          </button>
          {this.state && this.state.files && this.state.files.length > 0 ? <div>
          <h2>Uploading {this.state.files.length} files...</h2>
          <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
          </div> : null}
          </Dropzone>
      </div>
    );
  }
}
export default DropArea;
export {DropArea};
