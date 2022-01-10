import React from "react";


class FileInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
       fileName: '',
    };
  }

  onChange = e => {

    switch (e.target.name) {
      // Updated this
      case 'selectedFile':
        if(e.target.files.length > 0) {
            // Accessed .name from file 
            this.setState({ fileName: e.target.files[0].name });
        }
      break;
      default:
        this.setState({ [e.target.name]: e.target.value });
     }
  };

render(){
   const { fileName } = this.state;
   let file = null;

   file = fileName 
      ? ( <span>File Selected - {fileName}</span>) 
      : ( <span>Curiculum vitae (.pdf)*</span> );

   return(
      <form onSubmit={this.onSubmit}
      >
         <div
          style={{
            border: '1px dashed',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
         >
            <input
               style={{
                 opacity: '0.01'
               }}
               id="file"
               type="file"
               name="selectedFile"
               onChange={ (event) => this.onChange(event) }
            /> { /* Updated this to an arrow function */ }
            <label 
              htmlFor="file"
              style={{
                position: 'absolute',
                left: '10px',
                fontFamily: 'Swansea',
                fontWeight: 'bold'
              }}
            >
              {file}
            </label>
             <div
                className="attachmentSvg" />

            </div>
        </form>
     );
  }
}

export default FileInput;