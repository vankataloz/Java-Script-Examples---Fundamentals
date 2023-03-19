function gramophone(bandName, albumName, songName){
    let rotatingSeconds = (albumName.length * bandName.length) * songName.length / 2
    let rotatingTimes = Math.ceil(rotatingSeconds / 2.5);

    console.log(`The plate was rotated ${rotatingTimes} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');