var vidsContainer = document.getElementById("vids");

function createVideo(src) {
    var video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = false; // Audio enabled
    video.width = 200;
    video.height = 112;
    return video;
}

vidsContainer.appendChild(createVideo("oia.mp4"));
vidsContainer.appendChild(createVideo("oh.mp4"));

document.getElementById("repeat").onclick = function() {
    if (confirm("Ulitin mo pa ba?")) {
        window.location.href = "index.html";
    } else {
        alert("Oke boss thanks sa cooperation");
    }
};
