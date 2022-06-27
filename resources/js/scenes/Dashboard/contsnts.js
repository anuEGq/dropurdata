import {
    faFileVideo,
    faFileImage,
    faFileAudio,
    faFileWord,
    faFileCode,
    faFile,
} from "@fortawesome/free-solid-svg-icons";

export const fileData = {
    xmlFiles:{
        type: "text/xml",
        title: "XML Files",
        icon: faFile,
        key: "xmlFiles",
    },
    HtmlFiles:{
        type: "text/html",
        key: "HtmlFiles",
        title: "HTML Files",
        icon: faFileCode,
        count: 0,
    },
    wordFiles:{
        type: "application/msword",
        key: "wordFiles",
        title: "Word Files",
        icon: faFileWord,
        count: 0,
    },
    videoFiles:{
        type: "video/*",
        key: "videoFiles",
        title: "Video Files",
        icon: faFileVideo,
        count: 0,
    },
    imageFiles:{
        type: "image/*",
        key: "imageFiles",
        title: "Images",
        icon: faFileImage,
        count: 0,
    },
    audioFiles:{
        type: "audio/*",
        key: "audioFiles",
        title: "Audio Files",
        icon: faFileAudio,
        count: 0,
    },

}
