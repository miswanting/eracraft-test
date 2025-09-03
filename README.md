# eracraft

## Dev Env

1. Install dependencies with `pnpm i`
2. Download fonts ttf files and place them in `./packages/frontend/public/fonts`
3. Generate icons with `pnpm icon`

## Contribute

1. Make changes
2. Commit those changes with `pnpm commit`
3. Make sure tests turns green
4. Push

## Release

1. Bump version with `pnpm bump`
2. Update changelog with `pnpm changelog`
3. Release new version with `pnpm bump:commit` and choose `as-is`