# OOD 精选素材

从 `all_tasks_ood_hd_separate_20260919` 批次中精选 **16 个案例、48 段视频**，视频合计 201.1 MB。四类 OOD 各选 4 个案例，每类覆盖 FC、CM、HT、EI，每个案例保留 Overview、Front、Wrist 三个视角。HRI 统一对应 EI。

## 选用案例

| 条件 | FC | CM | HT | EI |
| --- | --- | --- | --- | --- |
| Object | FC-007 / A | CM-005 / A | HT-006 / B | EI-006 / A |
| Background | FC-007 / B | CM-000 / B | HT-000 / A | EI-000 / A |
| Lighting | FC-005 / Preset 01 | CM-006 / Preset 01 | HT-006 / Preset 01 | EI-006 / Preset 01 |
| Speed | FC-007 / Level 3 | CM-007 / Level 3 | HT-007 / Level 3 | EI-001 / Level 3 |

选取时与对应 ID 任务的同机位画面对照，优先选择物体轮廓和颜色、大面积环境、光影变化明显且动作完整的片段；Speed 对照多个时间点的运动过程。默认镜头与封面时刻按变化是否清楚可见分别选择，部分卡片默认 Front，所有卡片仍可切换三个视角。

- Object：红色器皿、粉杯与亮色杯架、新的桌面障碍物、红边挂轴。
- Background：绿色工厂地面、带家具的室内环境、白色矩形桌和木纹地板。
- Lighting：暗色传送带、暖色反射、桌面与墙面的色调及阴影变化。
- Speed：双传送带、旋转容器、弹球拦截和移动手部交接，按正常播放速度展示。

每组源记录为成功的 state-machine 演示；精选案例不作为评测成功率的统计样本。

这批没有 Joint OOD，网页保留待补充说明。

## 目录

```text
assets/media/ood/
├── README.md
├── manifest.json
├── object/
├── background/
├── lighting/
└── speed/
    └── ei/
        └── ei_001_pick_can_to_moving_hand/
            └── level3/
                ├── overview.mp4
                ├── overview.webp
                ├── front.mp4
                ├── front.webp
                ├── wrist.mp4
                └── wrist.webp
```

每个视频目录为 `条件/场景/任务/设置/`。Object、Background 的 A/B 是两套预设；Lighting 的 01/04 是两套照明配置；Speed 的 Level 3 是源数据中的运动配置，并非三倍播放速度。

## 索引与校验

[`manifest.json`](manifest.json) 保存 16 个案例的源目录、原始任务名、场景、条件、设置、运动等级、成功 seed、选取说明、`default_view` 默认镜头及 `visual_summary` 画面变化描述；三个视角各附网站相对路径、封面路径与取帧时刻、视频尺寸、帧率、帧数、时长、字节数和 SHA-256。

48 段视频均核对源文件与复制件哈希，并抽查开头、中间、末尾能否解码。MP4 保持原始内容。WebP 封面从对应视频的真实帧生成。

原始批次完整保留在项目根目录，未选用的视频、日志、缓存和未完成录制不进入网站素材目录。后续更换精选案例时，同步更新本目录索引及 `content.js`。
