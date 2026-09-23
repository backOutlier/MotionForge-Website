# Causal motion comparison videos

## DOMINO

- File: `domino-adjust-bottle.mp4`.
- Official task: Adjust Bottle, Aloha-AgileX, Level 1, Clean, episode 0.
- Source: https://h-embodvis.github.io/DOMINO/static/videos/aloha_clean_level1_adjust_bottle/episode0.mp4
- Project and credit: [DOMINO — Fang et al., ECCV 2026](https://h-embodvis.github.io/DOMINO/).
- License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), as stated in the official project-page footer. This attribution and license apply to the DOMINO clip and its extracted poster.
- Video preserved byte-for-byte, without cropping, overlays, trimming or speed changes. `domino-adjust-bottle.jpg` is a frame extracted from the video.
- 320 × 240, 30 fps, 145 frames, 4.833 seconds.

The video is labelled an official demonstration; the source does not identify a particular evaluated policy. The description of prescribed target motion is supported by [DOMINO's paper, Section 2.2–2.3](https://arxiv.org/html/2603.15620v1#S2.SS2), and its [Level 1 target updater](https://github.com/H-EmbodVis/DOMINO/blob/9c94f2d3a700fff3b65f041df4038d497139ed1f/envs/_base_task.py#L2153-L2194). The comparison concerns the cause of task-relevant target motion under MotionForge's Table I criterion.

## MotionForge

The second video reuses `../id/ht/ht_001_grasp_rolling_fallen_bottle/level2/overview.mp4`: the complete HT-001 state-machine demonstration, at its original speed. The bottle falls from a raised surface, contacts the table, rolls, and is grasped. The full clip is 3.233 seconds at 30 fps, 1440 × 1080. `motionforge-falling-bottle.webp` is its opening frame.

The two clips illustrate motion mechanisms in different tasks and scenes. They are not a matched policy-performance experiment.
