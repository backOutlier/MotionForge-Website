/* Add your own local media files here. Paths are relative to index.html.
 * Hero: { type: 'image', src: 'assets/media/overview.webp', alt: '…' }
 *    or { type: 'video', src: 'assets/media/overview.mp4', poster: '…', alt: '…' }
 * Gallery tasks: src/poster select the default video; views lists camera choices.
 * ID cards use actual frame posters from the corresponding videos.
 * Add or remove video objects in any row to change its length.
 * An optional captions field accepts the path to an English WebVTT file.
 */
window.MOTIONFORGE_MEDIA = {
  overview: {
    type: 'video',
    src: 'MotionForge_Video.mp4',
    poster: 'assets/media/overview.webp',
    alt: 'MotionForge overview',
    muted: false
  }
};

window.MOTIONFORGE_GALLERIES = [
  {
    "id": "fc",
    "group": "scene",
    "title": "Factory Conveyor",
    "description": "Dynamic manipulation with conveyor-driven objects.",
    "videos": [
      {
        "title": "Grasp a moving object",
        "src": "assets/media/id/fc/fc_000_grasp_moving_object/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_000_grasp_moving_object/level2/overview.webp",
        "caption": "FC-000 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_000_grasp_moving_object/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_000_grasp_moving_object/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_000_grasp_moving_object/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_000_grasp_moving_object/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_000_grasp_moving_object/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_000_grasp_moving_object/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move a moving object to a static container",
        "src": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/overview.webp",
        "caption": "FC-001 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_001_pick_moving_object_to_static_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Place two objects into container slots",
        "src": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/overview.webp",
        "caption": "FC-002 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_002_two_objects_to_container_slots/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move a static object to a moving container",
        "src": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/overview.webp",
        "caption": "FC-003 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_003_pick_static_object_to_moving_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Place three static cubes into moving trays",
        "src": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/overview.webp",
        "caption": "FC-004 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_004_three_static_cubes_to_moving_trays/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Upright a fallen can on the conveyor",
        "src": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/overview.webp",
        "caption": "FC-005 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_005_upright_fallen_can_on_conveyor/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Upright multiple fallen cans",
        "src": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/overview.webp",
        "caption": "FC-006 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_006_long_horizon_upright_fallen_cans/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move a moving object to a moving tray",
        "src": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/overview.webp",
        "caption": "FC-007 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_007_pick_moving_object_to_moving_tray/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Place two moving objects into moving trays",
        "src": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/overview.webp",
        "caption": "FC-008 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_008_two_moving_objects_to_moving_trays/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Push a side cube into the center box",
        "src": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/overview.mp4",
        "poster": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/overview.webp",
        "caption": "FC-009 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/overview.mp4",
            "poster": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/front.mp4",
            "poster": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/wrist.mp4",
            "poster": "assets/media/id/fc/fc_009_push_side_cube_into_center_box/level2/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "cm",
    "group": "scene",
    "title": "Circular Motion",
    "description": "Dynamic manipulation with rotational and orbital motion.",
    "videos": [
      {
        "title": "Hang a mug on a rotating mug tree",
        "src": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/overview.webp",
        "caption": "CM-000 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_000_hang_mug_on_rotating_mug_tree/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Pick an object from a rotating platform",
        "src": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/overview.webp",
        "caption": "CM-001 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_001_pick_object_from_rotating_platform/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move a static object to a rotating container",
        "src": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/overview.webp",
        "caption": "CM-002 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_002_pick_static_object_to_rotating_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move a rotating object to a rotating container",
        "src": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/overview.webp",
        "caption": "CM-003 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_003_pick_rotating_object_to_rotating_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Insert a test tube into a rotating rack",
        "src": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/overview.webp",
        "caption": "CM-004 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_004_insert_test_tube_into_rotating_rack/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Hang mugs on a rotating mug tree",
        "src": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/overview.webp",
        "caption": "CM-005 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Press rotating buttons in sequence",
        "src": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/overview.webp",
        "caption": "CM-006 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move static objects to a rotating container",
        "src": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/overview.webp",
        "caption": "CM-007 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move rotating objects to a rotating container",
        "src": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/overview.webp",
        "caption": "CM-008 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_008_long_horizon_pick_rotating_objects_to_rotating_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Insert test tubes into a rotating rack",
        "src": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/overview.mp4",
        "poster": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/overview.webp",
        "caption": "CM-009 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/overview.mp4",
            "poster": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/front.mp4",
            "poster": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/wrist.mp4",
            "poster": "assets/media/id/cm/cm_009_long_horizon_insert_test_tubes_into_rotating_rack/level2/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "ht",
    "group": "scene",
    "title": "Home Tabletop",
    "description": "Dynamic tabletop interactions involving contact and changing motion.",
    "videos": [
      {
        "title": "Open a cabinet and return a bottle",
        "src": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/overview.webp",
        "caption": "HT-000 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_000_open_cabinet_return_bottle/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Grasp a rolling fallen bottle",
        "src": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/overview.webp",
        "caption": "HT-001 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_001_grasp_rolling_fallen_bottle/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Place a rolling fallen bottle into a box",
        "src": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/overview.webp",
        "caption": "HT-002 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_002_grasp_rolling_fallen_bottle_to_box/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Restore the fruit basket",
        "src": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/overview.webp",
        "caption": "HT-003 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_003_restore_fruit_basket/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Stop a sliding box",
        "src": "assets/media/id/ht/ht_004_stop_sliding_box/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_004_stop_sliding_box/level2/overview.webp",
        "caption": "HT-004 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_004_stop_sliding_box/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_004_stop_sliding_box/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_004_stop_sliding_box/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_004_stop_sliding_box/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_004_stop_sliding_box/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_004_stop_sliding_box/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Intercept an orange and upright a bottle",
        "src": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/overview.webp",
        "caption": "HT-005 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_005_intercept_orange_and_upright_bottle/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Clear an obstacle for an accelerating car",
        "src": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/overview.webp",
        "caption": "HT-006 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_006_clear_obstacle_for_accelerating_car/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Intercept a deflected ball and place it in a container",
        "src": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/overview.webp",
        "caption": "HT-007 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_007_intercept_deflected_ball_to_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Intercept deflected balls and place them in a container",
        "src": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/overview.webp",
        "caption": "HT-008 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_008_long_horizon_intercept_deflected_balls_to_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Stop two rolling fruits and place them on a plate",
        "src": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/overview.mp4",
        "poster": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/overview.webp",
        "caption": "HT-009 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/overview.mp4",
            "poster": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/front.mp4",
            "poster": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/wrist.mp4",
            "poster": "assets/media/id/ht/ht_009_stop_two_rolling_fruits_to_plate/level2/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "ei",
    "group": "scene",
    "title": "Embodied Interaction",
    "description": "Dynamic interactions with moving objects and partners.",
    "videos": [
      {
        "title": "Receive a can from a human hand",
        "src": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/overview.webp",
        "caption": "EI-000 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_000_human_hand_can_handover/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Pass a can to a moving hand",
        "src": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/overview.webp",
        "caption": "EI-001 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_001_pick_can_to_moving_hand/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move a pen from a hand to a holder",
        "src": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/overview.webp",
        "caption": "EI-002 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_002_pick_pen_from_hand_to_holder/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Relay pens via a moving hand",
        "src": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/overview.webp",
        "caption": "EI-003 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_003_relay_pens_via_moving_hand/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Catch a dropped pen with a holder",
        "src": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/overview.webp",
        "caption": "EI-004 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_004_catch_dropped_pen_with_holder/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Thread a ring onto a moving post",
        "src": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/overview.webp",
        "caption": "EI-005 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_005_thread_ring_onto_moving_post/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Catch a swinging cloth",
        "src": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/overview.webp",
        "caption": "EI-006 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_006_catch_swinging_cloth/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Catch two dropped balls in a cylindrical container",
        "src": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/overview.webp",
        "caption": "EI-007 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_007_catch_two_dropped_balls_in_cylindrical_container/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Move a pin from a holder into a moving socket",
        "src": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/overview.webp",
        "caption": "EI-008 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_008_pick_pin_from_holder_into_moving_socket/level2/wrist.webp"
          }
        ]
      },
      {
        "title": "Hand over three plastic bottles",
        "src": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/overview.mp4",
        "poster": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/overview.webp",
        "caption": "EI-009 · State machine · Level 2",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/overview.mp4",
            "poster": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/front.mp4",
            "poster": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/wrist.mp4",
            "poster": "assets/media/id/ei/ei_009_handover_three_plastic_bottles/level2/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "object",
    "group": "ood",
    "title": "Object OOD",
    "description": "Held-out target objects under the same task objective.",
    "videos": [
      {
        "title": "Move a moving object to a moving tray",
        "src": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/front.mp4",
        "poster": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/front.webp",
        "caption": "FC-007 · Red butter dish",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/overview.mp4",
            "poster": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/front.mp4",
            "poster": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/wrist.mp4",
            "poster": "assets/media/ood/object/fc/fc_007_pick_moving_object_to_moving_tray/a/wrist.webp"
          }
        ]
      },
      {
        "title": "Hang mugs on a rotating mug tree",
        "src": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/front.mp4",
        "poster": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/front.webp",
        "caption": "CM-005 · Pink mugs and bright mug tree",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/overview.mp4",
            "poster": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/front.mp4",
            "poster": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/wrist.mp4",
            "poster": "assets/media/ood/object/cm/cm_005_long_horizon_hang_mugs_on_rotating_mug_tree/a/wrist.webp"
          }
        ]
      },
      {
        "title": "Clear an obstacle for an accelerating car",
        "src": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/overview.mp4",
        "poster": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/overview.webp",
        "caption": "HT-006 · Different shapes and packaging",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/overview.mp4",
            "poster": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/front.mp4",
            "poster": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/wrist.mp4",
            "poster": "assets/media/ood/object/ht/ht_006_clear_obstacle_for_accelerating_car/b/wrist.webp"
          }
        ]
      },
      {
        "title": "Catch a swinging scroll",
        "src": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/front.mp4",
        "poster": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/front.webp",
        "caption": "EI-006 · Crimson scroll border",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/overview.mp4",
            "poster": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/front.mp4",
            "poster": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/wrist.mp4",
            "poster": "assets/media/ood/object/ei/ei_006_catch_swinging_cloth/a/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "background",
    "group": "ood",
    "title": "Background OOD",
    "description": "Held-out backgrounds with the task objective preserved.",
    "videos": [
      {
        "title": "Move a moving object to a moving tray",
        "src": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/front.mp4",
        "poster": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/front.webp",
        "caption": "FC-007 · Green industrial floor",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/overview.mp4",
            "poster": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/front.mp4",
            "poster": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/wrist.mp4",
            "poster": "assets/media/ood/background/fc/fc_007_pick_moving_object_to_moving_tray/b/wrist.webp"
          }
        ]
      },
      {
        "title": "Hang a mug on a rotating mug tree",
        "src": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/overview.mp4",
        "poster": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/overview.webp",
        "caption": "CM-000 · Wood table and furnished room",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/overview.mp4",
            "poster": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/front.mp4",
            "poster": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/wrist.mp4",
            "poster": "assets/media/ood/background/cm/cm_000_hang_mug_on_rotating_mug_tree/b/wrist.webp"
          }
        ]
      },
      {
        "title": "Open a cabinet and return a bottle",
        "src": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/overview.mp4",
        "poster": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/overview.webp",
        "caption": "HT-000 · White table and new room",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/overview.mp4",
            "poster": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/front.mp4",
            "poster": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/wrist.mp4",
            "poster": "assets/media/ood/background/ht/ht_000_open_cabinet_return_bottle/a/wrist.webp"
          }
        ]
      },
      {
        "title": "Receive a can from a human hand",
        "src": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/overview.mp4",
        "poster": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/overview.webp",
        "caption": "EI-000 · Wood floor and furnished room",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/overview.mp4",
            "poster": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/front.mp4",
            "poster": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/wrist.mp4",
            "poster": "assets/media/ood/background/ei/ei_000_human_hand_can_handover/a/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "lighting",
    "group": "ood",
    "title": "Lighting OOD",
    "description": "Held-out lighting conditions for the same interactions.",
    "videos": [
      {
        "title": "Upright a fallen can on the conveyor",
        "src": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/overview.mp4",
        "poster": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/overview.webp",
        "caption": "FC-005 · Low illumination",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/overview.mp4",
            "poster": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/front.mp4",
            "poster": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/wrist.mp4",
            "poster": "assets/media/ood/lighting/fc/fc_005_upright_fallen_can_on_conveyor/preset_01/wrist.webp"
          }
        ]
      },
      {
        "title": "Press rotating buttons in sequence",
        "src": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/front.mp4",
        "poster": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/front.webp",
        "caption": "CM-006 · Warm reflections and shadows",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/overview.mp4",
            "poster": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/front.mp4",
            "poster": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/wrist.mp4",
            "poster": "assets/media/ood/lighting/cm/cm_006_long_horizon_press_rotating_buttons_in_sequence/preset_01/wrist.webp"
          }
        ]
      },
      {
        "title": "Clear an obstacle for an accelerating car",
        "src": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/overview.mp4",
        "poster": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/overview.webp",
        "caption": "HT-006 · Amber light and backdrop",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/overview.mp4",
            "poster": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/front.mp4",
            "poster": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/wrist.mp4",
            "poster": "assets/media/ood/lighting/ht/ht_006_clear_obstacle_for_accelerating_car/preset_01/wrist.webp"
          }
        ]
      },
      {
        "title": "Catch a swinging scroll",
        "src": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/front.mp4",
        "poster": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/front.webp",
        "caption": "EI-006 · Warm walls and robot arms",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/overview.mp4",
            "poster": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/front.mp4",
            "poster": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/wrist.mp4",
            "poster": "assets/media/ood/lighting/ei/ei_006_catch_swinging_cloth/preset_01/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "speed",
    "group": "ood",
    "title": "Speed OOD",
    "description": "Target motion at speeds outside the training setting.",
    "videos": [
      {
        "title": "Move a moving object to a moving tray",
        "src": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/front.mp4",
        "poster": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/front.webp",
        "caption": "FC-007 · Dual conveyors · Level 3",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/overview.mp4",
            "poster": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/front.mp4",
            "poster": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/wrist.mp4",
            "poster": "assets/media/ood/speed/fc/fc_007_pick_moving_object_to_moving_tray/level3/wrist.webp"
          }
        ]
      },
      {
        "title": "Move static objects to a rotating container",
        "src": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/front.mp4",
        "poster": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/front.webp",
        "caption": "CM-007 · Rotating container · Level 3",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/overview.mp4",
            "poster": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/front.mp4",
            "poster": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/wrist.mp4",
            "poster": "assets/media/ood/speed/cm/cm_007_long_horizon_pick_static_objects_to_rotating_container/level3/wrist.webp"
          }
        ]
      },
      {
        "title": "Intercept a deflected ball and place it in a container",
        "src": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/front.mp4",
        "poster": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/front.webp",
        "caption": "HT-007 · Deflected ball · Level 3",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/overview.mp4",
            "poster": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/front.mp4",
            "poster": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/wrist.mp4",
            "poster": "assets/media/ood/speed/ht/ht_007_intercept_deflected_ball_to_container/level3/wrist.webp"
          }
        ]
      },
      {
        "title": "Pass a can to a moving hand",
        "src": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/front.mp4",
        "poster": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/front.webp",
        "caption": "EI-001 · Moving hand · Level 3",
        "views": [
          {
            "id": "overview",
            "label": "Overview",
            "src": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/overview.mp4",
            "poster": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/overview.webp"
          },
          {
            "id": "front",
            "label": "Front",
            "src": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/front.mp4",
            "poster": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/front.webp"
          },
          {
            "id": "wrist",
            "label": "Wrist",
            "src": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/wrist.mp4",
            "poster": "assets/media/ood/speed/ei/ei_001_pick_can_to_moving_hand/level3/wrist.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "joint",
    "group": "ood",
    "title": "Joint OOD",
    "description": "Object, background, lighting, and speed shifts applied together.",
    "videos": [],
    "emptyMessage": "Joint OOD videos will be added here."
  }
];
