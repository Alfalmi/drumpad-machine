const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Drum Machine"
    };
    this.playKey = this.playKey.bind(this);
    this.play = this.play.bind(this);
    this.define = this.define.bind(this);
  }
  playKey(event) {
    let button = String.fromCharCode(event.charCode);
    let note = button.toUpperCase();
    let drumPad = document.getElementById(note).parentElement;
    this.play(drumPad);
  }
  define(event) {
    let key = event.currentTarget;
    this.play(key);
  }
  play(key) {
    let audio = document.getElementById(key.innerText);
    audio.currentTime = 0;
    audio.play();
    this.setState({
      display: key.id
    });
  }

  componentDidMount() {
    this.firstBtn.focus();
  }

  render() {
    return (
      <div>
        <div
          id="drum-machine"
          className="grid-container container"
          onKeyPress={this.playKey}
        >
          <div className="jumbotron animated flipInX" id="display">
            {this.state.display}
          </div>

          <div className="grid-container" id="btn-grid">
            <button
              className="btn drum-pad"
              id="ChordRhythm"
              onClick={this.define}
              ref={(input) => {
                this.firstBtn = input;
              }}
            >
              Q
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Chord+rhythm.m4a"
                className="clip"
                id="Q"
              />
            </button>

            <button className="btn drum-pad" id="Chord" onClick={this.define}>
              W
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Chord.m4a"
                className="clip"
                id="W"
              />
            </button>

            <button className="btn drum-pad" id="Conga" onClick={this.define}>
              E
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Conga.m4a"
                className="clip"
                id="E"
              />
            </button>

            <button className="btn drum-pad" id="Crash" onClick={this.define}>
              A
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Crash.m4a"
                className="clip"
                id="A"
              />
            </button>

            <button className="btn drum-pad" id="Cymbal" onClick={this.define}>
              S
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Cymbal+Hit.m4a"
                className="clip"
                id="S"
              />
            </button>

            <button className="btn drum-pad" id="Kick" onClick={this.define}>
              D
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Kick.m4a"
                className="clip"
                id="D"
              />
            </button>

            <button className="btn drum-pad" id="Scratch" onClick={this.define}>
              Z
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Scratch.m4a"
                className="clip"
                id="Z"
              />
            </button>

            <button className="btn drum-pad" id="Serve" onClick={this.define}>
              X
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Serve.m4a"
                className="clip"
                id="X"
              />
            </button>

            <button className="btn drum-pad" id="Volley" onClick={this.define}>
              C
              <audio
                src="https://s3.us-east-2.amazonaws.com/fcc-projects-jms/Drum+Machine/Volley.m4a"
                className="clip"
                id="C"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Presentational />, document.getElementById("drum"));
