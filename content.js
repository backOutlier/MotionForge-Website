/* Add your own local media files here. Paths are relative to index.html.
 * Hero: { type: 'image', src: 'assets/media/overview.webp', alt: '…' }
 *    or { type: 'video', src: 'assets/media/overview.mp4', poster: '…', alt: '…' }
 * Gallery clips: set src to an MP4/WebM path; poster and caption are optional.
 * Add or remove video objects in any row to change its length.
 * An optional captions field accepts the path to an English WebVTT file.
 */
window.MOTIONFORGE_MEDIA = {
  overview: null
};

window.MOTIONFORGE_GALLERIES = [
  {
    id: "fc",
    group: "scene",
    title: "Factory Conveyor",
    description: "Dynamic manipulation with conveyor-driven objects.",
    videos: [
      { title: "Factory Conveyor · Clip 01", src: null, poster: null, caption: "" },
      { title: "Factory Conveyor · Clip 02", src: null, poster: null, caption: "" },
      { title: "Factory Conveyor · Clip 03", src: null, poster: null, caption: "" },
      { title: "Factory Conveyor · Clip 04", src: null, poster: null, caption: "" },
      { title: "Factory Conveyor · Clip 05", src: null, poster: null, caption: "" },
      { title: "Factory Conveyor · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "cm",
    group: "scene",
    title: "Circular Motion",
    description: "Dynamic manipulation with rotational and orbital motion.",
    videos: [
      { title: "Circular Motion · Clip 01", src: null, poster: null, caption: "" },
      { title: "Circular Motion · Clip 02", src: null, poster: null, caption: "" },
      { title: "Circular Motion · Clip 03", src: null, poster: null, caption: "" },
      { title: "Circular Motion · Clip 04", src: null, poster: null, caption: "" },
      { title: "Circular Motion · Clip 05", src: null, poster: null, caption: "" },
      { title: "Circular Motion · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "ht",
    group: "scene",
    title: "Home Tabletop",
    description: "Dynamic tabletop interactions involving contact and changing motion.",
    videos: [
      { title: "Home Tabletop · Clip 01", src: null, poster: null, caption: "" },
      { title: "Home Tabletop · Clip 02", src: null, poster: null, caption: "" },
      { title: "Home Tabletop · Clip 03", src: null, poster: null, caption: "" },
      { title: "Home Tabletop · Clip 04", src: null, poster: null, caption: "" },
      { title: "Home Tabletop · Clip 05", src: null, poster: null, caption: "" },
      { title: "Home Tabletop · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "ei",
    group: "scene",
    title: "Embodied Interaction",
    description: "Dynamic interactions with moving objects and partners.",
    videos: [
      { title: "Embodied Interaction · Clip 01", src: null, poster: null, caption: "" },
      { title: "Embodied Interaction · Clip 02", src: null, poster: null, caption: "" },
      { title: "Embodied Interaction · Clip 03", src: null, poster: null, caption: "" },
      { title: "Embodied Interaction · Clip 04", src: null, poster: null, caption: "" },
      { title: "Embodied Interaction · Clip 05", src: null, poster: null, caption: "" },
      { title: "Embodied Interaction · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "object",
    group: "ood",
    title: "Object OOD",
    description: "Held-out target objects under the same task objective.",
    videos: [
      { title: "Object OOD · Clip 01", src: null, poster: null, caption: "" },
      { title: "Object OOD · Clip 02", src: null, poster: null, caption: "" },
      { title: "Object OOD · Clip 03", src: null, poster: null, caption: "" },
      { title: "Object OOD · Clip 04", src: null, poster: null, caption: "" },
      { title: "Object OOD · Clip 05", src: null, poster: null, caption: "" },
      { title: "Object OOD · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "background",
    group: "ood",
    title: "Background OOD",
    description: "Held-out backgrounds with the task objective preserved.",
    videos: [
      { title: "Background OOD · Clip 01", src: null, poster: null, caption: "" },
      { title: "Background OOD · Clip 02", src: null, poster: null, caption: "" },
      { title: "Background OOD · Clip 03", src: null, poster: null, caption: "" },
      { title: "Background OOD · Clip 04", src: null, poster: null, caption: "" },
      { title: "Background OOD · Clip 05", src: null, poster: null, caption: "" },
      { title: "Background OOD · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "lighting",
    group: "ood",
    title: "Lighting OOD",
    description: "Held-out lighting conditions for the same interactions.",
    videos: [
      { title: "Lighting OOD · Clip 01", src: null, poster: null, caption: "" },
      { title: "Lighting OOD · Clip 02", src: null, poster: null, caption: "" },
      { title: "Lighting OOD · Clip 03", src: null, poster: null, caption: "" },
      { title: "Lighting OOD · Clip 04", src: null, poster: null, caption: "" },
      { title: "Lighting OOD · Clip 05", src: null, poster: null, caption: "" },
      { title: "Lighting OOD · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "speed",
    group: "ood",
    title: "Speed OOD",
    description: "Target motion at speeds outside the training setting.",
    videos: [
      { title: "Speed OOD · Clip 01", src: null, poster: null, caption: "" },
      { title: "Speed OOD · Clip 02", src: null, poster: null, caption: "" },
      { title: "Speed OOD · Clip 03", src: null, poster: null, caption: "" },
      { title: "Speed OOD · Clip 04", src: null, poster: null, caption: "" },
      { title: "Speed OOD · Clip 05", src: null, poster: null, caption: "" },
      { title: "Speed OOD · Clip 06", src: null, poster: null, caption: "" }
    ]
  },
  {
    id: "joint",
    group: "ood",
    title: "Joint OOD",
    description: "Object, background, lighting, and speed shifts applied together.",
    videos: [
      { title: "Joint OOD · Clip 01", src: null, poster: null, caption: "" },
      { title: "Joint OOD · Clip 02", src: null, poster: null, caption: "" },
      { title: "Joint OOD · Clip 03", src: null, poster: null, caption: "" },
      { title: "Joint OOD · Clip 04", src: null, poster: null, caption: "" },
      { title: "Joint OOD · Clip 05", src: null, poster: null, caption: "" },
      { title: "Joint OOD · Clip 06", src: null, poster: null, caption: "" }
    ]
  }
];
