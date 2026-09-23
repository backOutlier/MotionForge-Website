# ID 视频素材

本目录收录 `all_tasks_level2_state_machine_hd_separate_20260917` 批次的正式 ID 素材：40 个 Level 2 任务，每个任务包含 overview、front、wrist 三个视角，共 120 段视频，648.5 MB（618.5 MiB）。生成方式为 state machine。

## 场景分类

| 目录 | 场景 | 原始目录 | 任务数 | 视频数 |
| --- | --- | --- | ---: | ---: |
| `fc/` | Factory Conveyor | `factory_conveyor/` | 10 | 30 |
| `cm/` | Circular Motion | `circular_motion/` | 10 | 30 |
| `ht/` | Home Tabletop | `home_tabletop/` | 10 | 30 |
| `ei/` | Embodied Interaction | `human_robot_interaction/` | 10 | 30 |

HRI 对应 EI：素材中的场景目录使用 `ei`，任务名前缀从 `hri_` 改为 `ei_`，其余任务编号与名称保持一致。索引中的 `source_task_id` 保留原始任务名称，方便核对。

## 目录与命名

```text
assets/media/id/
├── README.md
├── manifest.json
├── fc/
│   └── fc_000_grasp_moving_object/
│       └── level2/
│           ├── overview.mp4
│           ├── front.mp4
│           └── wrist.mp4
├── cm/
├── ht/
└── ei/
    └── ei_000_human_hand_can_handover/
        └── level2/
            ├── overview.mp4
            ├── front.mp4
            └── wrist.mp4
```

每个场景的任务编号均为 `000`–`009`。原始文件 `state_machine_success_<视角>_camera.mp4` 统一简写为 `<视角>.mp4`。

| 文件名 | 视角 | 分辨率 |
| --- | --- | --- |
| `overview.mp4` | 全局视角 | 1440 × 1080 |
| `front.mp4` | 正面视角 | 1440 × 1080 |
| `wrist.mp4` | 腕部视角 | 1080 × 1080 |

视频均为 H.264、yuv420p、30 FPS，保持原始内容与分辨率。入库时逐个核对源文件、结果记录和目标文件的大小及 SHA-256，120 段全部匹配。

## 素材索引

[`manifest.json`](manifest.json) 按场景、任务编号排序，包含：

- 批次信息、ID 分布、Level 2、state machine 生成方式及各场景统计。
- `id`：整理后的任务标识；`source_task_id`：原始任务标识；`scene`：网站场景标识。
- `result_status`、`successful_seed`：当前任务 `result.json` 中记录的成功状态与 seed。这是本批视频生成记录，不是策略评测成功率。
- `videos.overview`、`videos.front`、`videos.wrist`：三个视角的 `src`、编码信息、分辨率、帧率、时长、帧数、字节数与 SHA-256。编码及时间信息取自对应任务的结果记录。

所有 `src` 都相对于网站根目录，例如：

```text
assets/media/id/ei/ei_000_human_hand_can_handover/level2/overview.mp4
```

## 网页接入

`content.js` 已接入全部 40 个任务，四排 ID 长廊各 10 张任务卡。每张卡默认展示 Overview，可切换 Front 与 Wrist。任务编号保留在卡片说明中，生成方式标为 State machine、难度标为 Level 2。

每段视频旁新增同名 `.webp` 封面，由该视频的真实帧提取。封面仅供网页预览，原始 MP4 与索引中的视频校验值保持不变。

原始素材目录保留在项目根目录，并通过 `.gitignore` 排除。运行缓存、测试视频、作业日志及包含运行环境路径的原始 JSON 保留在该源目录。
