export function playSound(sound) {
    const audio = new Audio(sound);
    audio
        .play()
        .catch(
            error => console.error('Error playing sound:', error)
        );
}