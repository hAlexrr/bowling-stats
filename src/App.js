import PlayersList from "./PlayersList";

function App() {
  const [players, setPlayers] = useState([]);
  return (
    <PlayersList players={players}/>
  );
}

export default App;
