import gravitationalBeep from "../assets/audios/gravitational_beep.mp3";

export function loadBeep() {
    const audio = new Audio(gravitationalBeep);
    // audio.play(); // Inicia o audio, porém não funciona em navegadores como Safari
    audio.load(); // Carrega o audio para evitar delay na primeira vez que for tocado

    return () => {
        audio.currentTime = 0;
        audio.play().catch(error => console.log("Erro ao tocar o audio: ", error));
    }
}