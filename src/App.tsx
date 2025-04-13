import './App.css';

function openAudio() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("getUserMedia supported.");
    navigator.mediaDevices
      .getUserMedia(
        // constraints - only audio needed for this app
        {
          audio: true,
        },
      )
  
      // Success callback
      .then((stream) => {
        new Audio().srcObject = stream;
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(stream);
        sourceNode.connect(audioContext.destination);
      })
  
      // Error callback
      .catch((err) => {
        console.error(`The following getUserMedia error occurred: ${err}`);
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
  }
}

function App() {
  return (
    <div className="App">
     
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1>Schreier</h1>
          <button onClick={openAudio}>Mikrofon verbinden</button>
        </header>
      </div>
    </main>
    </div>
  );
}

export default App;
