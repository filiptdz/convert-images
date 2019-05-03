# convert-images

Converts images from an android-like structure, to be used in React Native projects:

From:
```
/path
  /drawable-mdpi
    image.png
  /drawable-xhdpi
    image.png
  /drawable-xxhdpi
    image.png
```
To:
```
/path
  image.png
  image@2x.png
  image@3x.png
```

## Instalation:
`npm i -g convert-images`

## Usage:

`convert-images -p path -n newName`;

- `-path`: (Alias: `-p`): Path of the folder containing all the images (Default: `'.'`)
- `-name`: (Alias: `-n`): Name to be used in the new files (Default: Current name)

## PS: If anyone wants this package name for something actually useful, feel free to contact me ;)
