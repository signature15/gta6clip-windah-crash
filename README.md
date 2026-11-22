# gta6clip-windah-crash

## Name

GTA 6 Windah Crash clipper entry.

## Purpose

This entry submits a public YouTube Short built from a Windah Basudara GTA 6 moment. The clip was formatted vertically at 1080x1920 with a webcam panel above the gameplay, word captions, and an ffmpeg-based render. `VIDEO.json` points to the published Short.

## How to run

This project runs directly with Node 22 and copies `VIDEO.json` into `./output`:

```sh
node main.ts
```

To use a different output directory, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=./submission node main.ts
```

The submitted video is available at https://www.youtube.com/shorts/a_xQRTpqyZI.

## License

This project is released under the [MIT License](LICENSE).

Bounty: https://make.fun/bounty/gta6-clipper-01
