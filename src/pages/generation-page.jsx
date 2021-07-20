import React from "react";
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

function passwordGen(length, exclusion, characters) {
    var password = ""
    console.log(length)
    characters = characters.replace(exclusion, '');
    for(var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * (characters.length - 0) + 0);
        password += characters[index];
    }
    return password;
}

class PasswordGeneration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()`~-=_+[]{}|;':<>?,./",
            exclusion: "",
            length: 1,
            password: "",
        };
        this.changeLength = this.changeLength.bind(this);
    }

    changeLength = (e) => {
        this.setState({
          length: e.target.value
        })
    }

    genPass = () => {
        this.setState({
          password: passwordGen(this.state.length, this.state.exclusion, this.state.characters)
        })
      }

      changeExclusions = (e) => {
        this.setState({
          exclusion: e.target.value
        })
      }

    render() {
      return (
        <div>
            <h1>Password Generator</h1>
            <h3>Length: {this.state.length}</h3>
            <Grid container spacing={2}>
                <Grid item>
                    1
                </Grid>
                <Grid item xs>
                    <input type="range" className="custom-range" id="customRange1" min = {1} max = {20} value = {this.state.length} onChange = {this.changeLength}/>
                </Grid>
                <Grid item>
                    20
                </Grid>
            </Grid>
            <h3>Words to exclude</h3>
            <Grid container spacing={1}>
                <Grid item xs>
                    <input type = "text" onChange = {this.changeExclusions} placeholder = "Enter Words e.g. *,A,b etc."/>
                </Grid>
            </Grid>
            <button onClick = {this.genPass}>Generate Password</button>
            <Grid container spacing={1}>
                <Grid item xs>
                    <h1>{this.state.password}</h1>
                </Grid>
            </Grid>
        </div>
      );
    }
  }

  export default PasswordGeneration;