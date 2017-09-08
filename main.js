class Bloobs extends React.Component {
      render() {
        var bloobsHeader = {
          width: 500,
          height: 500,
          background: "indigo"
        }
        return(
          <h1 style={bloobsHeader}>Bloobs. life's a fruit, pick it.</h1>
        );
      }
    }

    ReactDOM.render(
      <div>
        <Bloobs/>
      </div>,
      document.getElementById("app")
    );