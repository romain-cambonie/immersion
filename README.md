# Configure project on your IDE

# Pnpm

With pnpm all your nodes_modules are symlinkeds so paths may need to be configured manually

## Jetbrains

### Node & pnpm

![Node configuration](./docs/assets/ide-configuration/node.png)
pnpm path should be autodetected

### Prettier

Image reference:
![Prettier configuration](./docs/assets/ide-configuration/prettier.png)

Path format (replace module version with your latest version):
Prettier package: $ROOT_DIRECTORY\node_modules\.pnpm\prettier@2.6.2\node_modules\prettier

### Eslint

Image reference:
![Prettier configuration](./docs/assets/ide-configuration/eslint.png)

Path format (replace module version with your latest version):
Eslint package: $ROOT_DIRECTORY\node_modules\.pnpm\eslint@8.21.0\node_modules\eslint

Working directories format
$ROOT_DIRECTORY_ABSOLUTE_PATH\back; $ROOT_DIRECTORY_ABSOLUTE_PATH\front; $ROOT_DIRECTORY_ABSOLUTE_PATH\shared; $ROOT_DIRECTORY_ABSOLUTE_PATH\libs;
