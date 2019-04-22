import WebMidi from "webmidi";

WebMidi.enable(function(err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
    return;
  }
  WebMidi.outputs.forEach(function(output) {
    window.document
      .getElementById("treble0")
      .addEventListener("input", function changeControl(e) {
        output.sendControlChange(14, e.target.value, "all");
      });
  });
});
