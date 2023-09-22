function anaMnZnae(band,album,song){
    const plateRotation = 2.5;
    let songDuration = (album.length * band.length) * song.length/2
    let rotations = songDuration / plateRotation;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}
anaMnZnae('Rammstein', 'Sehnsucht','Engel')