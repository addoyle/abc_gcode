const abcEditor = document.querySelectorAll('textarea.language-abc')[0];
const abcRender = document.querySelectorAll('.abc-render')[0];
let abcData;

const render = async abc => {
  const abcData = ABCJS.renderAbc(abcRender, abc, { responsive: 'resize' })[0];

  if (ABCJS.synth.supportsAudio()) {
    // const synth = new ABCJS.synth.CreateSynth();
    // synth
    //   .init({
    //     visualObj: abcData,
    //     audioContext: this,
    //     millisecondsPerMeasure: abcData.millisecondsPerMeasure()
    //   })
    //   .then(() => synth.prime())
    //   .then(midi => {
    //     console.log(midi);
    //   });
  }
};

// Initial render
render(abcEditor.innerHTML);

let timer;
abcEditor.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(
    () => render(document.querySelectorAll('code.language-abc')[0].innerText),
    500
  );
});
