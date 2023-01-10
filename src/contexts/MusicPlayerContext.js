import React, { useState }from 'react';
import Track1 from "../mp3/track_1.mp3";
import Track2 from "../mp3/track_2.mp3";
import Track3 from "../mp3/track_3.mp3";
import Track4 from "../mp3/track_4.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Chuyện Đôi Ta",
        single: "Emcee, Muội",
        image: "https://i.scdn.co/image/ab67616d0000b273a400211178f6d590d875f2da",
        file: Track1,
      },
      {
        name: "Đế Vương",
        single: "Đình Dũng ",
        image: "https://i.ytimg.com/vi/YM0J1vkjziU/maxresdefault.jpg",
        file: Track2,
      },
      {
        name: "Muộn Rồi Mà Sao Còn",
        single: "Sơn Tùng MTP",
        image: "https://2sao.vietnamnetjsc.vn/images/2021/04/29/23/53/3.jpg",
        file: Track3,
      },
      {
        name: "Dạ Vũ - Chinese",
        single: "Tăng Duy Tân",
        image: "https://i.scdn.co/image/ab67616d00001e020a2e1e70f88f45f5252e29b7",
        file: Track4,
      },
],
currentTrackIndex: null,
isPlaying: false,
}

const MusicPlayerProvider = ({ children }) => {
    const [state, setState] = useState(defaultValues);
    return (
        <MusicPlayerContext.Provider value={{state, setState}}>
            {children}
        </MusicPlayerContext.Provider>
    )
}

export { MusicPlayerContext, MusicPlayerProvider};